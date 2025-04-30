import React, { ReactNode } from "react";
import { IonPage, IonContent, useIonRouter } from "@ionic/react";
import { AppHeader } from "@/components";

type HeaderSize = "small" | "medium" | "large";

interface PageProps {
  title: string;
  children: ReactNode;
  onBack?: () => void;
  size?: HeaderSize;
  headerClassName?: string;
  contentClassName?: string;
  hideHeader?: boolean;
  hideBackButton?: boolean;
  forceOverscroll?: boolean;
}

export const Page: React.FC<PageProps> = ({
  title,
  children,
  onBack,
  size = "medium",
  headerClassName = "",
  contentClassName = "",
  hideHeader = false,
  hideBackButton = false,
  forceOverscroll = false,
}) => {
  const router = useIonRouter();

  // Default back function uses Ionic router
  const handleBack = () => {
    router.goBack();
  };

  // Use provided onBack function or default
  const backAction = onBack || handleBack;

  return (
    <IonPage>
      {!hideHeader && (
        <AppHeader
          title={title}
          size={size}
          onBack={hideBackButton ? undefined : backAction}
          className={headerClassName}
        />
      )}

      <IonContent
        className={contentClassName}
        forceOverscroll={forceOverscroll}
      >
        {children}
      </IonContent>
    </IonPage>
  );
};
