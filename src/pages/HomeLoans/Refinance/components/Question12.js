import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { MdDone } from "react-icons/md";

const Question12 = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onNext();
  };
  return (
    <div className="text-center py-10 bg-white">
      <h2 className="text-2xl font-bold mb-4">
        Have you had a bankruptcy, foreclosure, or short sale in the past 2
        years?
      </h2>
      <p className="text-zinc-600 mb-8">
        Experiencing one of these events doesn't mean that you can't get a loan,
        but could affect your eligibility.
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
            <TfiClose size={50} color="blue" />
          </div>
          <span className="text-blue-500">No</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-24 h-24 flex items-center justify-center border hover:bg-sky-100 border-blue-500 rounded-full mb-2 ${
              selectedOption === "Secondary residence" ? "bg-sky-100" : ""
            }`}
            onClick={() => handleOptionSelect("Secondary residence")}
          >
            <MdDone size={50} color="blue" />
          </div>
          <span className="text-blue-500">Yes</span>
        </div>
      </div>
    </div>
  );
};

export default Question12;
