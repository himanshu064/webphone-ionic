import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  trailingAccessory?: React.ReactNode;
  leadingAccessory?: React.ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { className, error, trailingAccessory, leadingAccessory, ...props },
    ref
  ) => {
    const hasError = !!error;

    return (
      <div className="w-full">
        {/* Wrap only input and accessories in a relative div */}
        <div className="relative w-full">
          {leadingAccessory && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              {leadingAccessory}
            </div>
          )}

          <input
            ref={ref}
            className={cn(
              "w-full px-4 py-4 text-base bg-white border rounded-md focus:outline-none transition-colors",
              {
                "pl-12": leadingAccessory,
                "pr-12": trailingAccessory,
                "border-red-500 focus:ring-1 focus:ring-red-500":
                  hasError && !props.disabled,
                "border-gray-300 focus:ring-1 focus:ring-gray-500":
                  !hasError && !props.disabled,
                "cursor-not-allowed opacity-50": props.disabled,
              },
              className
            )}
            {...props}
          />

          {trailingAccessory && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              {trailingAccessory}
            </div>
          )}
        </div>

        {/* Place error outside relative wrapper so it doesn’t affect icon layout */}
        {hasError && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
