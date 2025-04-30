import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
} from "@ionic/react";
import { cn } from "@/lib/cn";

interface AppHeaderProps {
  title: string;
  onBack?: () => void;
  size?: "small" | "medium" | "large";
  className?: string;
  showBackButton?: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  onBack,
  size = "medium",
  className = "",
  showBackButton = true,
}) => {
  // Size-specific styles
  const sizeStyles = {
    small: {
      container: "h-12",
      title: "text-sm",
      icon: "text-sm h-4 w-4",
    },
    medium: {
      container: "h-16",
      title: "text-base",
      icon: "text-base h-5 w-5",
    },
    large: {
      container: "h-20",
      title: "text-lg",
      icon: "text-lg h-6 w-6",
    },
  };

  const selectedSize = sizeStyles[size];

  return (
    <IonHeader className={cn(selectedSize.container, className)}>
      <IonToolbar
        className="h-full px-4 flex flex-col justify-center"
        style={{
          "--background": "#fff",
          "--color": "#000",
          "--border-width": "0px", // removes bottom border
        }}
      >
        {showBackButton && onBack && (
          <IonButtons slot="start">
            <IonButton onClick={onBack} className="mr-2">
              <span className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8L2 12L6 16" />
                  <path d="M2 12H22" />
                </svg>
              </span>
            </IonButton>
          </IonButtons>
        )}
        <IonTitle
          className={`${selectedSize.title} font-semibold text-center`}
          size={
            size === "large" ? "large" : size === "small" ? "small" : undefined
          }
        >
          {title}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
