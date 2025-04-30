import React from "react";

type KeypadProps = {
  onNumberPress: (num: string) => void;
};

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

export const Keypad: React.FC<KeypadProps> = ({ onNumberPress }) => {
  return (
    <div className="grid grid-cols-3 gap-y-6 gap-x-2">
      {keypadButtons.map((button, index) => (
        <button
          key={`button-${index}`}
          className="flex flex-col items-center justify-center focus-visible:outline-0"
          onClick={() => onNumberPress(button.number)}
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
  );
};

export default Keypad;
