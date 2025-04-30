import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { PhoneNumberDisplay, CallButton, Keypad } from "@/components";
import { usePhoneNumber } from "@/hooks";

export const CallScreen: React.FC = () => {
  const {
    phoneNumber,
    handleNumberPress,
    handleClear,
    handleClearAll,
    handleCall,
  } = usePhoneNumber();

  return (
    <IonPage>
      <IonContent className="bg-white" forceOverscroll={false}>
        <div className="flex flex-col h-full justify-center overflow-y-hidden">
          <div className="flex-none pt-4 pb-2 px-6 flex items-end justify-between">
            <PhoneNumberDisplay
              phoneNumber={phoneNumber}
              onClear={handleClear}
              onClearAll={handleClearAll}
            />
          </div>

          <div className="flex-grow max-h-10" />

          <div className="flex-none px-6 pb-6">
            <Keypad onNumberPress={handleNumberPress} />
          </div>

          <div className="flex-grow max-h-10" />

          <CallButton phoneNumber={phoneNumber} onCall={handleCall} />
        </div>
      </IonContent>
    </IonPage>
  );
};
