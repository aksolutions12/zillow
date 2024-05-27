import React, { useState } from "react";

const ThirdQuestions = ({ onNext }) => {
  const [homeCost, setHomeCost] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [upfrontCost, setUpfrontCost] = useState(0);

  const handleHomeCostChange = (event) => {
    setHomeCost(event.target.value);
  };

  const handleMonthlyPaymentChange = (event) => {
    setMonthlyPayment(event.target.value);
  };

  const handleUpfrontCostChange = (event) => {
    setUpfrontCost(event.target.value);
  };

  const isButtonDisabled = () => {
    return homeCost === 0 || monthlyPayment === 0 || upfrontCost === 0;
  };

  const handleNext = () => {
    onNext(); // Call the onNext function passed from the parent component
  };

  return (
    <div className="w-full">
      <div className="p-6 w-full mx-auto">
        <label className="block text-lg font-semibold mb-2">
          How much are you planning to spend on your new home?
          <span className="text-red-500">*</span>
        </label>
        <p className="text-base">If you're not sure, feel free to estimate.</p>
        <div className="relative mb-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
            $
          </span>
          <input
            type="text"
            className="pl-8 pr-3 py-2 w-full border rounded-md bg-zinc-50"
            value={homeCost}
            onChange={handleHomeCostChange}
          />
        </div>
      </div>
      <div className="p-6 w-full mx-auto">
        <label className="block text-lg font-semibold mb-2">
          How much are you willing to pay per month for a mortgage?
          <span className="text-red-500">*</span>
        </label>
        <div className="relative mb-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
            $
          </span>
          <input
            type="text"
            className="pl-8 pr-3 py-2 w-full border rounded-md bg-zinc-50"
            value={monthlyPayment}
            onChange={handleMonthlyPaymentChange}
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-zinc-500">
            /month
          </span>
        </div>
      </div>
      <div className="p-6 w-full mx-auto">
        <label className="block text-lg font-semibold mb-2">
          How much are you willing to spend upfront to cover your down payment
          and closing costs?
          <span className="text-red-500">*</span>
        </label>
        <div className="relative mb-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
            $
          </span>
          <input
            type="text"
            className="pl-8 pr-3 py-2 w-full border rounded-md bg-zinc-50"
            value={upfrontCost}
            onChange={handleUpfrontCostChange}
          />
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

export default ThirdQuestions;
