import React, { useState } from "react";

const Question10 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">
        Do you know your credit score?
      </h1>
      <p className="text-center text-zinc-600">It's ok to estimate.</p>
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
          className={`w-full py-2 text-center hover:bg-zinc-100 ${
            selectedOption === "I don't know" && "bg-sky-100"
          }`}
          onClick={() => handleOptionClick("I don't know")}
        >
          I don't know
        </button>
      </div>
    </div>
  );
};

export default Question10;
