import React from "react";
import { IonIcon } from "@ionic/react";
import { call } from "ionicons/icons";

type CallButtonProps = {
  phoneNumber: string;
  onCall: () => void;
};

export const CallButton: React.FC<CallButtonProps> = ({
  phoneNumber,
  onCall,
}) => {
  return (
    <div className="flex-none h-24 flex items-start justify-center pt-2 pb-4">
      <button
        className={`w-16 h-16 rounded-full ${
          phoneNumber ? "bg-purple-600" : "bg-purple-400"
        } shadow-md flex items-center justify-center call-button`}
        onClick={onCall}
        disabled={!phoneNumber}
      >
        <IonIcon icon={call} className="text-white text-2xl" />
      </button>
    </div>
  );
};
