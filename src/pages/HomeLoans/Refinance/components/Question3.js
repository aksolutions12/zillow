import React, { useState } from "react";
import { PiSignpostLight } from "react-icons/pi";
import { PiTagThin } from "react-icons/pi";
import { PiTreePalmThin } from "react-icons/pi";

const Question3 = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onNext();
  };
  return (
    <div className="text-center py-10 bg-white">
      <h2 className="text-2xl font-bold mb-4">How are you using this home?</h2>
      <p className="text-zinc-600 mb-8">
        Our loan options may vary depending on the home's use.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <div
          className="flex flex-col items-center"
          onClick={() => handleOptionSelect("Primary residence")}
        >
          <div
            className={`w-24 h-24 flex items-center justify-center border hover:bg-sky-100 border-blue-500 rounded-full mb-2 ${
              selectedOption === "Primary residence" ? "bg-sky-100" : ""
            }`}
          >
            <PiSignpostLight size={50} color="blue" />
          </div>
          <span className="text-blue-500">Primary residence</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-24 h-24 flex items-center justify-center border hover:bg-sky-100 border-blue-500 rounded-full mb-2 ${
              selectedOption === "Secondary residence" ? "bg-sky-100" : ""
            }`}
            onClick={() => handleOptionSelect("Secondary residence")}
          >
            <PiTreePalmThin size={50} color="blue" />
          </div>
          <span className="text-blue-500">Secondary residence</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-24 h-24 flex items-center justify-center hover:bg-sky-100 border border-blue-500 rounded-full mb-2 ${
              selectedOption === "Condominium" ? "bg-sky-100" : ""
            }`}
            onCli
            onClick={() => handleOptionSelect("Investment property")}
          >
            <PiTagThin size={50} color="blue" />
          </div>
          <span className="text-blue-500">Investment property</span>
        </div>
      </div>
    </div>
  );
};

export default Question3;
