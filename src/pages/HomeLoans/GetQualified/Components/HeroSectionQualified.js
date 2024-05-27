import React, { useState } from "react";

export default function HeroSectionQualified({ onNext }) {
  // State to manage button click
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setIsClicked(true); // Set isClicked to true
    onNext(); // Call the onNext function passed from the parent component
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900">
      <div className="flex flex-col items-center justify-center w-4/5 py-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800 dark:text-zinc-100 text-center mb-4">
          Get a clearer picture of your finances
        </h1>
        <p className="text-base w-full lg:w-3/5 text-zinc-600 dark:text-zinc-300 text-center  mb-8">
          Find out if you pre-qualify for a home loan in{" "}
          <span className="font-bold">as little as 3 minutes.</span>*
          Pre-qualification will not impact your credit score.
        </p>
        <div className="w-full lg:w-4/5 p-8 rounded-lg px-10 bg-blue-50">
          <button
            onClick={handleButtonClick} // Call handleButtonClick on button click
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            {isClicked ? "Processing..." : "Get pre-qualified"}
          </button>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mt-4">
            Your information is safe and secure with us.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more about our privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
