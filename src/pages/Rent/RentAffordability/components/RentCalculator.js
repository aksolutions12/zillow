import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const PrettoSlider = styled(Slider)({
  color: "#17B036",
  height: 16,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,

    width: 82,
    height: 30,
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
  },
});

export default function RentCalculator() {
  const [rentAmount, setRentAmount] = React.useState(3828); // Initial rent amount
  const maxIncome = 15000; // Example maximum income
  const minGrossPercentage = 10; // Minimum percentage of gross income
  const maxGrossPercentage = 40; // Maximum percentage of income for rent

  const handleChange = (event, newValue) => {
    setRentAmount(newValue);
  };

  const formatLabel = (value) => `$${value}/mo`;
  const percentageOfGrossIncome =
    ((rentAmount - 1) /
      (maxIncome * ((maxGrossPercentage - minGrossPercentage) / 100))) *
    100;
  return (
    <div>
      <div className="max-full mx-auto p-6 bg-gray-50 dark:bg-zinc-800 ">
        <h1 className="text-3xl font-bold mb-4">
          Rent Affordability Calculator
        </h1>
        <p className="text-zinc-700 dark:text-zinc-300 mb-6">
          This calculator shows rentals that fit your budget. Savings, debt, and
          other expenses could impact the amount you want to spend on rent each
          month. Input your net (after tax) income and the calculator will
          display rentals up to 40% of your estimated gross income. Property
          managers typically use gross income to qualify applicants, so the tool
          assumes your net income is taxed at 25%. Actual tax rates vary.
        </p>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label
              className="block text-zinc-700 dark:text-zinc-300 font-bold mb-2"
              htmlFor="net-income"
            >
              Monthly net income <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-zinc-300 bg-zinc-50 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
                $
              </span>
              <input
                className="w-full md:w-auto md:w-204 border rounded-r-md border-zinc-300 p-2 dark:bg-zinc-700 dark:text-zinc-300"
                type="number"
                id="net-income"
                placeholder="10000"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label
              className="block text-zinc-700 dark:text-zinc-300 font-bold mb-2"
              htmlFor="debts"
            >
              Monthly debts <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-zinc-300 bg-zinc-50 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
                $
              </span>
              <input
                className="w-full md:w-auto md:w-204 border rounded-r-md border-zinc-300 p-2 dark:bg-zinc-700 dark:text-zinc-300"
                type="number"
                id="debts"
                placeholder="0"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label
              className="block text-zinc-700 dark:text-zinc-300 font-bold mb-2"
              htmlFor="savings"
            >
              Monthly Savings
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-zinc-300 bg-zinc-50 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
                $
              </span>
              <input
                className="w-full md:w-auto md:w-204 border rounded-r-md border-zinc-300 p-2 dark:bg-zinc-700 dark:text-zinc-300"
                type="number"
                id="savings"
                placeholder="0"
              />
            </div>
          </div>
        </div>
        <div className="w-full px-2">
          <label
            className="block text-zinc-700 dark:text-zinc-300 font-bold mb-2"
            htmlFor="expenses"
          >
            Monthly Expenses
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-zinc-300 bg-zinc-50 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
              $
            </span>
            <input
              className=" w-full lg:w-1/6 border rounded-r-md border-zinc-300 p-2 dark:bg-zinc-700 dark:text-zinc-300"
              type="number"
              id="expenses"
              placeholder="0"
            />
          </div>
        </div>
      </div>
      <div className="w-11/12 mt-5 mb-5 mx-auto p-6 py-10 bg-white flex flex-col lg:flex-row dark:bg-zinc-800 rounded-lg shadow-md">
        <div className="w-full lg:w-1/2 ">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
            You can afford <span id="afford-amount">${rentAmount}/mo</span>
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            Based on your income, a rental at this price should fit comfortably
            within your budget.
          </p>
          <p className="mt-4 text-zinc-800 dark:text-zinc-100">
            You will have{" "}
            <span id="left-amount" className="font-bold">
              ${(maxIncome - rentAmount).toFixed(0)}/mo
            </span>{" "}
            left to spend.
          </p>
        </div>
        <div className="mt-6 w-full lg:w-1/2 ">
          <PrettoSlider
            value={rentAmount}
            onChange={handleChange}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={100}
            min={1}
            max={maxIncome * ((maxGrossPercentage - minGrossPercentage) / 100)}
            valueLabelFormat={formatLabel}
          />
          <div className="flex justify-between mt-2 text-zinc-600 dark:text-zinc-400">
            <span>{minGrossPercentage}%</span>
            <div className="text-center mt-1 text-zinc-600 dark:text-zinc-400">
              {percentageOfGrossIncome.toFixed(2)}% of gross income
            </div>
            <span>{maxGrossPercentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
