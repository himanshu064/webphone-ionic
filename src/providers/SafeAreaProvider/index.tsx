import React, { useEffect } from "react";
import { initialize } from "@capacitor-community/safe-area";
import { useSafeArea } from "@/hooks/useSafeArea";
import { cn } from "@/lib/cn";

interface SafeAreaProviderProps {
  children: React.ReactNode;
  enabled?: boolean;
  className?: string;
}

/**
 * Initializes safe area insets and provides a container with proper padding
 * based on safe area insets
 */
export const SafeAreaProvider: React.FC<SafeAreaProviderProps> = ({
  children,
  enabled = true,
  className,
}) => {
  // Initialize safe area CSS variables
  useEffect(() => {
    initialize();
  }, []);

  // Enable/disable edge-to-edge mode
  useSafeArea(enabled);

  return (
    <div
      className={cn(
        "min-h-screen w-full",
        enabled &&
          "pt-[var(--safe-area-inset-top)] pb-[var(--safe-area-inset-bottom)] pl-[var(--safe-area-inset-left)] pr-[var(--safe-area-inset-right)]",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * A component that adds top safe area inset padding
 */
export const SafeAreaTop: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("pt-[var(--safe-area-inset-top)]", className)}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * A component that adds bottom safe area inset padding
 */
export const SafeAreaBottom: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("pb-[var(--safe-area-inset-bottom)]", className)}
      {...props}
    >
      {children}
    </div>
  );
};
