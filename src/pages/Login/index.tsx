import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TextField, PasswordField, CheckboxField } from "@/components/Form";
import { Button } from "@/components/Button";
import { login } from "@/services/auth/auth.service";
import { useIonRouter } from "@ionic/react";
import { AppRoutes } from "@/router/routes";
import { SafeAreaProvider } from "@/providers";

// Define the login form schema
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

// Type for our form values
export type LoginFormValues = z.infer<typeof loginSchema>;

export const Login: React.FC = () => {
  const router = useIonRouter();
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: LoginFormValues): Promise<void> => {
    try {
      await login(data);
      // Navigate to dashboard or show success message
      router.push(AppRoutes.CallScreen, "forward", "replace");
    } catch (error) {
      console.error("Login failed", error);
      // Handle login failure (could use a toast notification or inline error message)
    }
  };

  return (
    <SafeAreaProvider>
      <div className="flex flex-col min-h-screen bg-white p-6 relative">
        <div className="flex justify-center my-12">
          <div className="ml-auto">
            <svg
              width="46"
              height="44"
              viewBox="0 0 46 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 0L23.823 3.36707C25.109 8.62855 25.752 11.2593 27.1233 13.3821C28.336 15.2593 29.9527 16.8418 31.8554 18.0139C34.0071 19.3395 36.651 19.926 41.9388 21.0991L46 22L41.9388 22.9009C36.651 24.074 34.0071 24.6605 31.8554 25.9861C29.9527 27.1582 28.336 28.7407 27.1233 30.6179C25.752 32.7407 25.109 35.3714 23.823 40.6329L23 44L22.177 40.6329C20.891 35.3714 20.248 32.7407 18.8767 30.6179C17.664 28.7407 16.0473 27.1582 14.1446 25.9861C11.9929 24.6605 9.34898 24.074 4.06116 22.9009L0 22L4.06116 21.0991C9.34897 19.926 11.9929 19.3395 14.1446 18.0139C16.0473 16.8418 17.664 15.2593 18.8767 13.3821C20.248 11.2593 20.891 8.62855 22.177 3.36707L23 0Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-8">Log in</h1>

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col h-full"
          >
            <div className="flex-grow space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <TextField<LoginFormValues>
                  name="username"
                  placeholder="email@example.com"
                  autoComplete="email"
                  trailingAccessory={
                    methods.formState.isValid && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="10" cy="10" r="10" fill="black" />
                        <path
                          d="M5.49994 9.5L8.99994 13L14.4999 7.5"
                          stroke="white"
                          stroke-width="1.5"
                        />
                      </svg>
                    )
                  }
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                </div>
                <PasswordField<LoginFormValues>
                  name="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>

              <div className="flex justify-between items-center">
                <CheckboxField<LoginFormValues>
                  name="rememberMe"
                  label="Remember me"
                />

                <a href="#" className="font-medium text-[15px] text-gray-700">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                fullWidth
                loading={isSubmitting}
                loadingText="Logging in..."
              >
                Log in
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </SafeAreaProvider>
  );
};
