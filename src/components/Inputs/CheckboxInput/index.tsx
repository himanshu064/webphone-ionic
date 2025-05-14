import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface CheckboxInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  error?: string;
  label?: string;
}

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const hasError = !!error;

    return (
      <div className="flex items-center">
        <div className="flex items-center h-6">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            className={cn(
              "w-5 h-5 text-gray-600 bg-gray-100 border-gray-300 rounded accent-black",
              {
                "cursor-not-allowed opacity-50": props.disabled,
                "border-red-500 focus:ring-red-500":
                  hasError && !props.disabled,
              },
              className
            )}
            {...props}
          />
        </div>

        {label && (
          <div className="ml-3 text-base">
            <label htmlFor={id} className="font-medium text-[15px] text-gray-700">
              {label}
            </label>
            {hasError && <p className="mt-1 text-xs text-red-500">{error}</p>}
          </div>
        )}
      </div>
    );
  }
);

CheckboxInput.displayName = "CheckboxInput";
