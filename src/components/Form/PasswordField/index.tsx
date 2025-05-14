import React from "react";
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { TextInputProps, PasswordInput } from "@/components/Inputs";

export interface PasswordFieldProps<T extends FieldValues>
  extends Omit<TextInputProps, "name" | "type"> {
  name: FieldPath<T>;
  label?: string;
}

export function PasswordField<T extends FieldValues>({
  name,
  label,
  ...rest
}: PasswordFieldProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <PasswordInput
            {...field}
            {...rest}
            error={errorMessage}
            id={name.toString()}
          />
        )}
      />
    </div>
  );
}
