import React, { useState } from "react";

const Question6 = ({ onNext }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNext = () => {
    onNext(); // Call the onNext function passed from the parent component
  };

  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg  w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-2">
        What's your current home loan balance?
      </h1>
      <p className="text-center text-zinc-600 dark:text-zinc-400 mb-6">
        It's ok to estimate.
      </p>
      <div className="flex items-center border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden mb-6">
        <span className="px-3 text-zinc-500 dark:text-zinc-400">$</span>
        <input
          type="text"
          className="flex-1 py-2 px-3 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none"
          placeholder="Enter value"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={handleNext}
        className={`w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none ${
          !inputValue && "opacity-50 cursor-not-allowed"
        }`}
        disabled={!inputValue}
      >
        Next
      </button>
    </div>
  );
};

export default Question6;
