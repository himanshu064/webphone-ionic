import { IonButton, IonSpinner } from "@ionic/react";
import "./Button.css";

interface IProps {
  onClick: () => void;
  loading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export const Button = ({
  onClick,
  loading = false,
  loadingText,
  children,
}: IProps) => {
  return (
    <IonButton
      mode="md"
      expand="block"
      className="w-full text-white rounded-md font-medium py-2 custom-button"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <IonSpinner
            name="circular"
            className="mr-3"
            style={{ width: "18px", height: "18px" }}
          />
          {loadingText && <span>{loadingText}</span>}
        </div>
      ) : (
        children
      )}
    </IonButton>
  );
};
