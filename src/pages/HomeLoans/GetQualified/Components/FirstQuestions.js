import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FirstQuestions = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    if (value === "I've Signed a Purchase Contract") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleNext = () => {
    onNext(); // Call the onNext function passed from the parent component
  };

  return (
    <div className="w-full  bg-white mx-auto p-4">
      <div className="w-full lg:w-3/5 bg-white mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">
          Where are you in your home-buying journey?
        </h1>
        <p className="text-center text-zinc-600">
          We'll work to find you the right mortgage to fit your unique needs.
        </p>
        <div className="mt-4 border rounded-lg overflow-hidden">
          <button
            className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
              selectedOption === "I'm thinking about buying house" &&
              "bg-sky-100"
            }`}
            onClick={() => handleOptionClick("I'm thinking about buying house")}
          >
            I'm thinking about buying house
          </button>
          <button
            className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
              selectedOption === "Touring Open Housed" && "bg-sky-100"
            }`}
            onClick={() => handleOptionClick("Touring Open Housed")}
          >
            Touring Open Housed
          </button>
          <button
            className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
              selectedOption === "Making Offers on a Property" && "bg-sky-100"
            }`}
            onClick={() => handleOptionClick("Making Offers on a Property")}
          >
            Making Offers on a Property
          </button>
          <button
            className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
              selectedOption === "I've Signed a Purchase Contract" &&
              "bg-sky-100"
            }`}
            onClick={() => handleOptionClick("I've Signed a Purchase Contract")}
          >
            I've Signed a Purchase Contract
          </button>
        </div>
      </div>

      {showInput ? (
        <div className="w-full lg:w-3/5 bg-white mx-auto p-4">
          <div className="w-full mx-auto mt-2">
            <label className="block text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              In which zip code or city are you looking to buy?
              <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter a zip code or city name"
                className="w-full py-3 px-4 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-zinc-100"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FaSearch className="h-5 w-5 text-zinc-400" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full lg:w-3/5 bg-white mx-auto p-4">
          <h1 className="text-2xl font-bold text-center">
            When are you looking to buy?
          </h1>

          <div className="mt-4 border rounded-lg overflow-hidden">
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedOption === "0-3 months" && "bg-sky-100"
              }`}
              onClick={() => handleOptionClick("0-3 months")}
            >
              0-3 months
            </button>
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedOption === "4-6 months" && "bg-sky-100"
              }`}
              onClick={() => handleOptionClick("4-6 months")}
            >
              4-6 months
            </button>
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedOption === "7+ months" && "bg-sky-100"
              }`}
              onClick={() => handleOptionClick("7+ months")}
            >
              7+ months
            </button>
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedOption === "Not Sure" && "bg-sky-100"
              }`}
              onClick={() => handleOptionClick("Not Sure")}
            >
              Not Sure
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

export default FirstQuestions;
