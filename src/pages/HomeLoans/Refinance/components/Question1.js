import React, { useState } from "react";
import usStates from "../../../../data/usStates";

const Question1 = () => {
  const [selectedState, setSelectedState] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setIsButtonDisabled(event.target.value === "");
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-4">
        Where is your home located?
      </h2>
      <p className="text-center text-zinc-600 dark:text-zinc-400 mb-6">
        Select your state from the locations we serve.
      </p>
      <div className="mb-4">
        <select
          className="block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-zinc-100"
          onChange={handleStateChange}
          value={selectedState}
        >
          <option value="">Select a state</option>
          {usStates.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <button
        className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
          isButtonDisabled && "opacity-50 cursor-not-allowed"
        }`}
        disabled={isButtonDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default Question1;
