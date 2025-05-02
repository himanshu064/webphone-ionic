import { IonInput } from "@ionic/react";
import { Controller, Control } from "react-hook-form";
import "./index.css";

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>; // Replace with the correct type for your control
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
}

export const TextField = ({
  control,
  name,
  label,
  error,
  placeholder,
  ...props
}: IProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <IonInput
            {...field}
            {...props}
            placeholder={placeholder}
            className="w-full px-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black no-highlight"
          />
        )}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
