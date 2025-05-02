import { IonIcon, IonInput } from "@ionic/react";
import { useState } from "react";
import { Controller, Control } from "react-hook-form";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";

interface IPasswordFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  error?: string;
}

// Common PasswordField Component
export const PasswordField = ({
  control,
  name,
  label,
  error,
  ...props
}: IPasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <IonInput
              {...field}
              {...props}
              type={showPassword ? "text" : "password"}
              className="w-full px-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          )}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
          onClick={togglePasswordVisibility}
        >
          <IonIcon
            icon={showPassword ? eyeOutline : eyeOffOutline}
            className="text-gray-500"
          />
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
