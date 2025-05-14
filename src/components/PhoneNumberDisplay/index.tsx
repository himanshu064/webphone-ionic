import React from "react";
import { IonIcon } from "@ionic/react";
import { backspace } from "ionicons/icons";

type PhoneNumberDisplayProps = {
  phoneNumber: string;
  onClear: () => void;
  onClearAll: () => void;
};

export const PhoneNumberDisplay: React.FC<PhoneNumberDisplayProps> = ({
  phoneNumber,
  onClear,
  onClearAll,
}) => {
  const handleBackspaceLongPress = () => {
    let timerId: ReturnType<typeof setTimeout>;

    const handleMouseDown = () => {
      timerId = setTimeout(() => {
        onClearAll();
      }, 800);
    };

    const handleMouseUp = () => {
      clearTimeout(timerId);
    };

    return {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onTouchStart: handleMouseDown,
      onTouchEnd: handleMouseUp,
      onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
    };
  };

  return (
    <div className="flex items-center w-full">
      <div className="flex-1 mr-2 overflow-hidden">
        <div
          className="text-4xl font-medium text-gray-800 text-right whitespace-nowrap min-h-6 max-w-full overflow-hidden"
          style={{
            direction: "rtl",
            textAlign: "right",
            textOverflow: "clip",
          }}
        >
          {phoneNumber}
        </div>
      </div>
      <button
        onClick={onClear}
        {...handleBackspaceLongPress()}
        className="text-gray-500 p-2 flex-shrink-0"
      >
        <IonIcon icon={backspace} className="text-3xl" />
      </button>
    </div>
  );
};
