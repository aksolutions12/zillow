import React, { useState } from "react";

const NineQuestion = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">
        What's your credit score? It's okay to estimate.
      </h1>
      <p className="text-center text-zinc-600">
        Your credit score affects the loan programs and interest rates you may
        qualify for, as well as the amount you'll need to put down.
      </p>
      <div className="mt-4 border rounded-lg overflow-hidden">
        <button
          className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
            selectedOption === "720 and above" && "bg-sky-100"
          }`}
          onClick={() => handleOptionClick("720 and above")}
        >
          720 and above
        </button>
        <button
          className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
            selectedOption === "660-719" && "bg-sky-100"
          }`}
          onClick={() => handleOptionClick("660-719")}
        >
          660-719
        </button>
        <button
          className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
            selectedOption === "620-659" && "bg-sky-100"
          }`}
          onClick={() => handleOptionClick("620-659")}
        >
          620-659
        </button>
        <button
          className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
            selectedOption === "580-619" && "bg-sky-100"
          }`}
          onClick={() => handleOptionClick("580-619")}
        >
          580-619
        </button>
        <button
          className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
            selectedOption === "579 or below" && "bg-sky-100"
          }`}
          onClick={() => handleOptionClick("579 or below")}
        >
          579 or below
        </button>
        <button
          className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
            selectedOption === "I don't know" && "bg-sky-100"
          }`}
          onClick={() => handleOptionClick("I don't know")}
        >
          I don't know
        </button>
      </div>
      <button
        className={`w-full bg-blue-500 text-white py-3 rounded-lg mt-4 hover:bg-blue-600 focus:bg-blue-700`}
        onClick={handleNext}
        disabled={!selectedOption}
      >
        Next
      </button>
    </div>
  );
};

export default NineQuestion;
