import React from "react";
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { CheckboxInput } from "@/components/Inputs";

export interface CheckboxFieldProps<T extends FieldValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "type"> {
  name: FieldPath<T>;
  label: string;
}

export function CheckboxField<T extends FieldValues>({
  name,
  label,
  className,
  ...rest
}: CheckboxFieldProps<T>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<T>();
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <CheckboxInput
          {...field}
          {...rest}
          id={name.toString()}
          checked={!!value}
          onChange={(e) => onChange(e.target.checked)}
          label={label}
          error={errorMessage}
          className={className}
        />
      )}
    />
  );
}
