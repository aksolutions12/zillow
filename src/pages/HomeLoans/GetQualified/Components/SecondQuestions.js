import React, { useState } from "react";

const SecondQuestions = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setShowInput(true);
  };

  const handleNext = () => {
    onNext(); // Call the onNext function passed from the parent component
  };
  return (
    <div className="w-full  bg-white mx-auto p-4">
      <div className="w-full ] bg-white mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">
          How will you use your new home?
        </h1>
        <p className="text-center text-zinc-600">
          Additional loan options may be available depending on the home's use.
        </p>
        <div className="mt-4 border rounded-lg overflow-hidden">
          <button
            className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
              selectedOption === "Primary Residance" && "bg-sky-100"
            }`}
            onClick={() => handleOptionClick("Primary Residance")}
          >
            Primary Residance
          </button>
          <button
            className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
              selectedOption === "Secondary Residance" && "bg-sky-100"
            }`}
            onClick={() => handleOptionClick("Secondary Residance")}
          >
            Secondary Residance
          </button>
          <button
            className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
              selectedOption === "Investment Property" && "bg-sky-100"
            }`}
            onClick={() => handleOptionClick("Investment Property")}
          >
            Investment Property
          </button>
        </div>
      </div>

      {showInput && (
        <div className="w-full  bg-white mx-auto p-4">
          <h1 className="text-2xl font-bold text-center">
            What kind of home are you looking for?
          </h1>

          <div className="mt-4 border rounded-lg overflow-hidden">
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedOption === "Single Family" && "bg-sky-100"
              }`}
              onClick={() => handleOptionClick("Single Family")}
            >
              Single Family
            </button>
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedOption === "TownHome" && "bg-sky-100"
              }`}
              onClick={() => handleOptionClick("TownHome")}
            >
              TownHome
            </button>
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedOption === "Condominium" && "bg-sky-100"
              }`}
              onClick={() => handleOptionClick("Condominium")}
            >
              Condominium
            </button>
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedOption === "Mobile or Manufactured" && "bg-sky-100"
              }`}
              onClick={() => handleOptionClick("Mobile or Manufactured")}
            >
              Mobile or Manufactured
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleNext} // Call handleNext on button click
          className="px-6 py-3  bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SecondQuestions;
