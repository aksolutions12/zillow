import React, { useState } from "react";
import ChartsRef from "./ChartsRef";

const RefCalculatorSection = () => {
  // State variables for input values
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [currentLoanAmount, setCurrentLoanAmount] = useState("20000");
  const [interestRate, setInterestRate] = useState("5");
  const [currentTerm, setCurrentTerm] = useState("12");
  const [originationYear, setOriginationYear] = useState("12");
  const [newLoanAmount, setNewLoanAmount] = useState("20000");
  const [newInterestRate, setNewInterestRate] = useState("12");
  const [newTerm, setNewTerm] = useState("12");
  const [refinanceFees, setRefinanceFees] = useState("20000");
  const [cashOut, setCashOut] = useState("20000");
  const [rollFees, setRollFees] = useState(true);

  // Function to toggle advanced options visibility
  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  return (
    <>
      <div className="w-full bg-white">
        <div className="p-5">
          <h1 className="text-5xl font-bold mb-2">Refinance Calculator</h1>
          <p className="mb-4">
            Use Zillow's refinance calculator to determine if refinancing may be
            worth it. Enter the details of your existing and future loans to
            estimate your potential refinance savings. This free refinance
            calculator can help you evaluate the benefits of refinancing to help
            you meet your financial goals such as lowering monthly payments,
            changing the length of your loan, cancelling your mortgage
            insurance, updating your loan program or reducing your interest
            rate.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row p-5 ">
          <div className="p-4 w-full lg:w-2/6 mx-auto">
            {/* Current loan amount */}
            <div className="mb-4">
              <label className="block font-bold mb-1">
                Current loan amount
              </label>
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
                <span className="mr-2">$</span>
                <input
                  type="text"
                  value={currentLoanAmount}
                  onChange={(e) => setCurrentLoanAmount(e.target.value)}
                  className="bg-transparent focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Interest rate */}
            <div className="mb-4">
              <label className="block  text-zinc-700 dark:text-zinc-300 font-bold mb-1">
                Interest rate
              </label>
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md p-2">
                <input
                  type="text"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="bg-transparent flex-1 text-zinc-700 dark:text-zinc-300 outline-none"
                />
                <span className="text-zinc-500 dark:text-zinc-400">%</span>
              </div>
            </div>

            {/* Current term */}
            <div className="mb-4">
              <label className="block  text-zinc-700 dark:text-zinc-300 font-bold mb-1">
                Current term
              </label>
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md p-2">
                <input
                  type="text"
                  value={currentTerm}
                  onChange={(e) => setCurrentTerm(e.target.value)}
                  className="bg-transparent flex-1 text-zinc-700 dark:text-zinc-300 outline-none"
                />
                <span className="text-zinc-500 dark:text-zinc-400">months</span>
              </div>
            </div>

            {/* Origination year */}
            <div className="mb-4">
              <label className="block  text-zinc-700 dark:text-zinc-300 font-bold mb-1">
                Origination year
              </label>
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md p-2">
                <input
                  type="text"
                  value={originationYear}
                  onChange={(e) => setOriginationYear(e.target.value)}
                  className="bg-transparent flex-1 text-zinc-700 dark:text-zinc-300 outline-none"
                />
              </div>
            </div>

            {/* New loan amount */}
            <div className="mb-4">
              <label className="block font-bold mb-1">New loan amount</label>
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
                <span className="mr-2">$</span>
                <input
                  type="text"
                  value={newLoanAmount}
                  onChange={(e) => setNewLoanAmount(e.target.value)}
                  className="bg-transparent focus:outline-none w-full"
                />
              </div>
            </div>

            {/* New interest rate */}
            <div className="mb-4">
              <label className="block  text-zinc-700 dark:text-zinc-300 font-bold mb-1">
                New interest rate
              </label>
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md p-2">
                <input
                  type="text"
                  value={newInterestRate}
                  onChange={(e) => setNewInterestRate(e.target.value)}
                  className="bg-transparent flex-1 text-zinc-700 dark:text-zinc-300 outline-none"
                />
                <span className="text-zinc-500 dark:text-zinc-400">%</span>
              </div>
            </div>

            {/* New term */}
            <div className="mb-4">
              <label className="block  text-zinc-700 dark:text-zinc-300 font-bold mb-1">
                New term
              </label>
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md p-2">
                <input
                  type="text"
                  value={newTerm}
                  onChange={(e) => setNewTerm(e.target.value)}
                  className="bg-transparent flex-1 text-zinc-700 dark:text-zinc-300 outline-none"
                />
                <span className="text-zinc-500 dark:text-zinc-400">months</span>
              </div>
            </div>

            {/* Refinance fees */}
            <div className="mb-4">
              <label className="block font-bold mb-1">Refinance fees</label>
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
                <span className="mr-2">$</span>
                <input
                  type="text"
                  value={refinanceFees}
                  onChange={(e) => setRefinanceFees(e.target.value)}
                  className="bg-transparent focus:outline-none w-full"
                />
              </div>
            </div>

            {/* Advanced options */}
            {showAdvancedOptions && (
              <div>
                <div className="mb-4">
                  <label className="block font-bold mb-1">Cash out</label>
                  <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
                    <span className="mr-2">$</span>
                    <input
                      type="text"
                      value={cashOut}
                      onChange={(e) => setCashOut(e.target.value)}
                      className="bg-transparent focus:outline-none w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="include-pmi"
                    className="mr-2 w-5 h-5 rounded-lg"
                    checked={rollFees}
                    onChange={() => setRollFees(!rollFees)}
                  />
                  <label
                    htmlFor="include-pmi"
                    className="flex text-lg items-center"
                  >
                    Roll fees into new one
                  </label>
                </div>
              </div>
            )}

            {/* Toggle between "Advanced" and "Simple" */}
            <div className="mb-4">
              <a
                href="#"
                className="text-blue-700 dark:text-blue-500 font-bold"
                onClick={toggleAdvancedOptions}
              >
                {showAdvancedOptions ? "Simple" : "Advanced"}
              </a>
            </div>

            {/* Calculator disclaimer */}
            <div>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Calculator disclaimer
              </a>
            </div>
          </div>
          <div className="w-full lg:w-8/12 ">
            <ChartsRef />
          </div>
        </div>
      </div>
    </>
  );
};

export default RefCalculatorSection;
