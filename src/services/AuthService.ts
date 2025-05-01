import { Browser } from "@capacitor/browser";
import { App } from "@capacitor/app";
import axios, { AxiosError } from "axios";
import { isPlatform } from "@ionic/react";
import { ENV } from "@/env";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthResponse {
  authenticated: boolean;
  user?: User;
  error?: string;
}

class AuthService {
  private authBaseUrl: string;
  private customScheme: string;

  constructor() {
    this.authBaseUrl = ENV.VITE_APP_BACKOFFICE;
    this.customScheme = "connexio"; // This needs to be same as capacitor.config.ts, under App > scheme
    this.setupAppUrlListener();
  }

  private setupAppUrlListener(): void {
    // Listen for deep link events (when app is opened via custom URL scheme)
    App.addListener("appUrlOpen", ({ url }) => {
      console.log("App opened with URL:", url);
      Browser.close();
      // Check auth state again
      setTimeout(() => {
        this.checkAuth();
      }, 500);

      // Check if this is our auth callback
      // if (url.includes("auth-callback")) {
      // console.log("Auth callback received");
      // Close the browser if it's open
      // Browser.close();

      // Check auth state again
      // setTimeout(() => {
      //   this.checkAuth();
      // }, 500);
      // }
    });
  }

  public async checkAuth(): Promise<AuthResponse> {
    try {
      const response = await axios.get<User>(
        `${this.authBaseUrl}/api/user/check_auth`,
        {
          withCredentials: true, // Important: Send cookies with the request
        }
      );

      return {
        authenticated: true,
        user: response.data,
      };
    } catch (error) {
      const axiosError = error as AxiosError;

      // If authentication fails, handle it
      if (axiosError.response?.config?.url?.includes("/api/user/check_auth")) {
        console.log("Authentication error, user needs to login");
        return {
          authenticated: false,
          error: "Authentication required",
        };
      }

      return {
        authenticated: false,
        error: axiosError.message,
      };
    }
  }

  public async openExternalAuth(): Promise<void> {
    // Determine origin based on platform
    let origin: string = window.location.origin;

    // If running on a Capacitor/Cordova app, use the custom scheme
    if (isPlatform("capacitor") || isPlatform("cordova")) {
      origin = this.customScheme;
    }

    const url = `${this.authBaseUrl}/external-login?origin=${origin}`;

    // Open the URL in the in-app browser
    const response = await Browser.open({
      url,
      presentationStyle: "popover", // iOS only
      toolbarColor: "#3880ff", // Customize to match your app's theme
    });

    console.log("Browser response:", response);
  }

  // Handle auth error (e.g. from an API interceptor)
  public async handleAuthError(error: AxiosError): Promise<boolean> {
    if (
      error.response?.status === 401 ||
      error.response?.config?.url?.includes("/api/user/check_auth")
    ) {
      await this.openExternalAuth();
      return true; // Error was handled
    }
    return false; // Error was not handled
  }

  // Test if cookie sharing is working correctly
  public async testCookieSharing(): Promise<boolean> {
    try {
      // First make an API call to set a test cookie
      await axios.get(`${this.authBaseUrl}/api/set-test-cookie`, {
        withCredentials: true,
      });

      // Now check if we can read that cookie from our app
      const testResponse = await axios.get<{
        cookiePresent: boolean;
        message: string;
      }>(`${this.authBaseUrl}/api/check-test-cookie`, {
        withCredentials: true,
      });

      console.log("Cookie sharing test result:", testResponse.data);
      return testResponse.data.cookiePresent;
    } catch (error) {
      console.error("Cookie sharing test failed:", error);
      return false;
    }
  }
}

export default new AuthService();
