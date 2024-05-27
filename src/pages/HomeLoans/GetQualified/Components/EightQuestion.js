import React, { useState } from "react";

const EightQuestion = ({ onNext }) => {
  const [interestedInVALoan, setInterestedInVALoan] = useState(null);
  const [firstTimeHomeBuyer, setFirstTimeHomeBuyer] = useState(null);

  const handleOptionClick = (question, value) => {
    if (question === "interestedInVALoan") {
      setInterestedInVALoan(value);
    } else if (question === "firstTimeHomeBuyer") {
      setFirstTimeHomeBuyer(value);
    }
  };

  const isButtonDisabled = () => {
    return interestedInVALoan === null || firstTimeHomeBuyer === null;
  };

  const handleNext = () => {
    onNext(); // Call the onNext function passed from the parent component
  };

  return (
    <div className="w-full">
      <div className="w-full mx-auto p-4">
        <p className="text-lg font-semibold mb-4">
          Are you interested in a VA loan for veterans?{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex border rounded-lg overflow-hidden mb-4">
          <button
            className={`flex-1 p-4 border-r text-center ${
              interestedInVALoan === "Yes" ? "bg-blue-50" : ""
            } hover:bg-zinc-100 focus:bg-zinc-200`}
            onClick={() => handleOptionClick("interestedInVALoan", "Yes")}
          >
            Yes
          </button>
          <button
            className={`flex-1 p-4 text-center ${
              interestedInVALoan === "No" ? "bg-blue-50" : ""
            } hover:bg-zinc-100 focus:bg-zinc-200`}
            onClick={() => handleOptionClick("interestedInVALoan", "No")}
          >
            No
          </button>
        </div>
      </div>

      <div className="w-full mx-auto p-4">
        <p className="text-lg font-semibold mb-4">
          Are you a first time home buyer?{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex border rounded-lg overflow-hidden mb-4">
          <button
            className={`flex-1 p-4 border-r text-center ${
              firstTimeHomeBuyer === "Yes" ? "bg-blue-50" : ""
            } hover:bg-zinc-100 focus:bg-zinc-200`}
            onClick={() => handleOptionClick("firstTimeHomeBuyer", "Yes")}
          >
            Yes
          </button>
          <button
            className={`flex-1 p-4 text-center ${
              firstTimeHomeBuyer === "No" ? "bg-blue-50" : ""
            } hover:bg-zinc-100 focus:bg-zinc-200`}
            onClick={() => handleOptionClick("firstTimeHomeBuyer", "No")}
          >
            No
          </button>
        </div>
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

export default EightQuestion;
