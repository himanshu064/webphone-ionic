import React, { useState, useEffect } from "react";
import { IonPage, IonContent, IonIcon } from "@ionic/react";
import { call, backspace } from "ionicons/icons";

const CallScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // Handle keyboard input for the component
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Allow numbers 0-9
      if (/^[0-9]$/.test(event.key)) {
        handleNumberPress(event.key);
      }
      // Allow + character
      else if (event.key === "+") {
        handleNumberPress("+");
      }
      // Handle backspace key
      else if (event.key === "Backspace") {
        handleClear();
      }
      // Handle delete or escape for clear all
      else if (event.key === "Delete" || event.key === "Escape") {
        handleClearAll();
      }
      // Handle Enter key as call
      else if (event.key === "Enter" && phoneNumber) {
        handleCall();
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [phoneNumber]); // Include phoneNumber in dependency array

  const handleNumberPress = (num: string) => {
    setPhoneNumber((prev) => prev + num);
  };

  const handleClear = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  const handleClearAll = () => {
    setPhoneNumber("");
  };

  const handleCall = () => {
    if (phoneNumber) {
      console.log("Calling:", phoneNumber);
      // Implement call functionality here
    }
  };

  // Add keyboard focus handling
  useEffect(() => {
    // Set focus to the page when component mounts
    document.body.focus();

    // If we wanted to prevent other elements from stealing focus
    // const preventFocusShift = (e: FocusEvent) => {
    //   // Allow focus on call button and tab navigation
    //   const target = e.target as HTMLElement;
    //   if (
    //     !target.classList.contains("call-button") &&
    //     !target.closest(".call-button")
    //   ) {
    //     document.body.focus();
    //   }
    // };

    // Optional: uncomment if you want to force focus to stay on the keypad
    // document.addEventListener('focusin', preventFocusShift);

    return () => {
      // Optional: uncomment if you added the event listener above
      // document.removeEventListener('focusin', preventFocusShift);
    };
  }, []);

  // Long press on backspace to clear all
  const handleBackspaceLongPress = () => {
    let timerId: ReturnType<typeof setTimeout>;

    const handleMouseDown = () => {
      timerId = setTimeout(() => {
        handleClearAll();
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
      onContextMenu: (e: React.MouseEvent) => e.preventDefault(), // Prevent context menu
    };
  };

  // Keypad data structure
  const keypadButtons = [
    { number: "1", letters: "." },
    { number: "2", letters: "ABC" },
    { number: "3", letters: "DEF" },
    { number: "4", letters: "GHI" },
    { number: "5", letters: "JKL" },
    { number: "6", letters: "MNO" },
    { number: "7", letters: "PQRS" },
    { number: "8", letters: "TUV" },
    { number: "9", letters: "WXYZ" },
    { number: "*", letters: "" },
    { number: "0", letters: "+" },
    { number: "#", letters: "" },
  ];

  return (
    <IonPage>
      <IonContent className="bg-white" forceOverscroll={false}>
        <div className="flex flex-col h-full justify-center overflow-y-hidden">
          {/* Dynamic spacing for top area - using flex instead of fixed height */}
          <div className="flex-none pt-4 pb-2 px-6 flex items-end justify-between">
            <div className="flex items-center w-full">
              {/* Phone number container showing latest digits on right with overflow hidden */}
              <div className="flex-1 mr-2 overflow-hidden">
                <div
                  className="text-2xl font-medium text-gray-800 text-right whitespace-nowrap min-h-6 max-w-full overflow-hidden"
                  style={{
                    direction: "rtl",
                    textAlign: "right",
                    textOverflow: "clip",
                  }}
                >
                  {phoneNumber}
                </div>
              </div>
              {/* Backspace button with fixed position */}
              <button
                onClick={handleClear}
                {...handleBackspaceLongPress()}
                className="text-gray-500 p-2 flex-shrink-0"
                onContextMenu={(e) => e.preventDefault()} // Prevent context menu on right-click
              >
                <IonIcon icon={backspace} className="text-3xl" />
              </button>
            </div>
          </div>

          {/* Auto-adjusting space - fills available space between display and keypad */}
          <div className="flex-grow max-h-10" />

          {/* Middle: Keypad - now uses flex-none to maintain consistent size */}
          <div className="flex-none px-6 pb-6">
            <div className="grid grid-cols-3 gap-y-6 gap-x-2">
              {keypadButtons.map((button, index) => (
                <button
                  key={`button-${index}`}
                  className="flex flex-col items-center justify-center focus-visible:outline-0"
                  onClick={() => handleNumberPress(button.number)}
                >
                  <span className="text-3xl md:text-4xl font-light text-purple-600">
                    {button.number}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 uppercase">
                    {button.letters}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* Auto-adjusting space - fills available space between display and keypad */}
          <div className="flex-grow max-h-10" />

          {/* Bottom: Call button */}
          <div className="flex-none h-24 flex items-start justify-center pt-2 pb-4">
            <button
              className={`w-16 h-16 rounded-full ${
                phoneNumber ? "bg-purple-600" : "bg-purple-400"
              } shadow-md flex items-center justify-center call-button`}
              onClick={handleCall}
              disabled={!phoneNumber}
            >
              <IonIcon icon={call} className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CallScreen;
