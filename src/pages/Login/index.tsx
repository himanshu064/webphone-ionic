import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Page, PasswordField, TextField } from "@/components";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

// Type for our form values
type LoginFormValues = z.infer<typeof loginSchema>;

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormValues): void => {
    console.log("Form submitted with:", data);
    // Here you would typically handle authentication logic
  };

  return (
    <Page title="" hideHeader>
      <div className="min-h-[100dvh] flex justify-center p-4">
        <div className="flex flex-col justify-between w-full max-w-md flex-1">
          <div className="mt-10">
            <h1 className="text-2xl font-bold mb-8">Log in</h1>
            <TextField
              control={control}
              name="username"
              label="Username"
              placeholder="johndoe"
              error={errors.username?.message}
            />

            <PasswordField
              control={control}
              name="password"
              label="Password"
              error={errors.password?.message}
            />

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="rememberMe"
                {...control.register("rememberMe")}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                Remember me
              </label>
            </div>
          </div>
          <div className="space-y-4">
            <Button
              loading={false}
              loadingText="Logging in"
              onClick={handleSubmit(onSubmit)}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};
