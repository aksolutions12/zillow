import React, { useState } from "react";

const SixQuestion = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const isButtonDisabled = () => {
    return selectedOption === null;
  };

  const handleNext = () => {
    onNext(); // Call the onNext function passed from the parent component
  };

  return (
    <div className="w-full mx-auto p-4">
      <p className="text-lg font-semibold mb-4">
        Are you buying this home on your own or with someone?{" "}
        <span className="text-red-500">*</span>
      </p>
      <div className="flex border rounded-lg overflow-hidden mb-4">
        <button
          className={`flex-1 p-4 border-r text-center ${
            selectedOption === "Borrower" ? "bg-blue-50" : ""
          } hover:bg-zinc-100 focus:bg-zinc-200`}
          onClick={() => handleOptionSelect("Borrower")}
        >
          I'm the borrower
        </button>
        <button
          className={`flex-1 p-4 text-center ${
            selectedOption === "Co-borrower" ? "bg-blue-50" : ""
          } hover:bg-zinc-100 focus:bg-zinc-200`}
          onClick={() => handleOptionSelect("Co-borrower")}
        >
          I have a co-borrower
        </button>
      </div>
      <button
        className={`w-full py-3 rounded-lg ${
          isButtonDisabled()
            ? "bg-blue-300 text-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-700"
        }`}
        onClick={handleNext}
        disabled={isButtonDisabled()}
      >
        Next
      </button>
    </div>
  );
};

export default SixQuestion;
