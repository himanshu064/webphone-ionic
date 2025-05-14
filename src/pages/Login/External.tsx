import React, { useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  useIonRouter,
} from "@ionic/react";
import {
  logIn,
  lockClosed,
  timeOutline,
  shieldCheckmarkOutline,
  call,
} from "ionicons/icons";
import { useAuth } from "@/context/auth/hooks";
import { ENV } from "@/env";
import { AppRoutes } from "@/router/routes";
// import AuthService from "@/services/auth";

const authBaseUrl = ENV.VITE_APP_BACKOFFICE;

export const Login: React.FC = () => {
  const router = useIonRouter();
  const { setIsAuthenticated } = useAuth();
  // Handler for the external login button
  const handleExternalLogin = async () => {
    // alert(
    //   `${authBaseUrl}${AppRoutes.ExternalLogin}?origin=${window.location.origin}`
    // );
    // window.open(
    //   `${authBaseUrl}${AppRoutes.ExternalLogin}?origin=${window.location.origin}`,
    //   "_blank"
    // );
    // await AuthService.openExternalAuth();
  };

  useEffect(() => {
    // listen for messages from the external login window
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === authBaseUrl && event.data === "reload") {
        window.removeEventListener("message", handleMessage); // Remove listener after handling
        setIsAuthenticated(true); // Set authentication state to true
        router.push(AppRoutes.CallScreen, "forward", "replace");
      }
    };

    window.addEventListener("message", handleMessage);
  }, [router, setIsAuthenticated]);

  return (
    <IonPage>
      <IonContent
        className="bg-gradient-to-br from-gray-50 to-gray-200"
        forceOverscroll={false}
      >
        <div className="flex flex-col h-full items-center justify-center px-4 py-8">
          <div className="flex flex-col items-center mb-4">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <IonIcon icon={call} className="text-4xl text-blue-600" />
            </div>
            <h1 className="text-3xl font-semibold text-blue-600">
              Connexio Webphone
            </h1>
          </div>
          {/* Info Card */}
          <IonCard className="w-full max-w-md rounded-xl border border-gray-200 shadow-xs mb-6 overflow-hidden">
            <IonCardContent className="p-6">
              {/* Logo and Title */}

              <p className="text-gray-600 mb-6 text-base">
                Welcome to the Connexio webphone. To access your account, please
                click the button below to log in through our secure external
                authentication service.
              </p>

              <div className="space-y-4 mb-6">
                {/* Feature items */}
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <IonIcon
                      icon={lockClosed}
                      className="text-xl text-blue-600"
                      style={{ fontSize: "1.5rem" }}
                    />
                  </div>
                  <span className="text-gray-800">Secure Authentication</span>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <IonIcon
                      icon={timeOutline}
                      className="text-xl text-blue-600"
                    />
                  </div>
                  <span className="text-gray-800">Quick Access</span>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <IonIcon
                      icon={shieldCheckmarkOutline}
                      className="text-xl text-blue-600"
                    />
                  </div>
                  <span className="text-gray-800">Data Protection</span>
                </div>
              </div>
            </IonCardContent>
          </IonCard>

          {/* Login Button */}
          <div className="w-full max-w-md">
            <IonButton
              expand="block"
              className="h-12 font-medium rounded-lg shadow-md"
              onClick={handleExternalLogin}
            >
              <IonIcon icon={logIn} slot="start" />
              <span className="mx-auto">External Login</span>
            </IonButton>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Connexio. All rights reserved.
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};
