import { useState, useEffect } from "react";

export const usePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (/^[0-9]$/.test(event.key)) {
        handleNumberPress(event.key);
      } else if (event.key === "+") {
        handleNumberPress("+");
      } else if (event.key === "Backspace") {
        handleClear();
      } else if (event.key === "Delete" || event.key === "Escape") {
        handleClearAll();
      } else if (event.key === "Enter" && phoneNumber) {
        handleCall();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [phoneNumber]);

  return {
    phoneNumber,
    handleNumberPress,
    handleClear,
    handleClearAll,
    handleCall,
  };
};
