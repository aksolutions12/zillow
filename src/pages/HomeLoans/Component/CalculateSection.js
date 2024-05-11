import React, { useState } from "react";
import Calculteimg from "../../../assets/images/Calculator-rafiki.png";

const CalculateSection = () => {
  const [showResult, setShowResult] = useState(false);
  const [annualIncome, setAnnualIncome] = useState("");
  const [monthlyDebts, setMonthlyDebts] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    // Logic to calculate the estimated budget
    setShowResult(true);
  };

  return (
    <div id="affordabilityCalculator" className=" flex-col py-4 bg-white ">
      <div className="flex items-center flex-col">
        <div className="pt-10">
          <h1 className="font-bold text-3xl">
            Take the next step with an Affordability Calculator
          </h1>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div>
          <img src={Calculteimg} className="w-28 h-28" alt="Calculteimg" />
        </div>
        <div>
          <h1 className="font-bold text-base">Calculate your budget</h1>
          <p className="font-light text-base">
            Deciding how much you can comfortably spend on a home will help you
            prepare for your search.
          </p>
        </div>
      </div>
      <hr className="my-4 w-full" />
      <div className="flex flex-col md:flex-row space-x-8  md:items-start justify-center md:justify-between space-y-6 md:space-y-0 p-8 gap-16">
        {/* User Input Section */}
        <div className="w-full md:w-1/3">
          <form
            className="max-w-md mx-auto md:mx-0"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {/* Annual income */}
            <div className="mb-4">
              <label
                htmlFor="annualIncome"
                className="block text-sm font-bold mb-2"
              >
                Annual income
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                  $
                </span>
                <input
                  type="text"
                  id="annualIncome"
                  className="flex-1 min-w-0 block w-full px-3 py-2 border text-gray-900 bg-white border-gray-300 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="/year"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                />
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Include pre-tax income from full-time or part-time work,
                self-employment, tips, commissions, overtime, bonuses, etc.
              </p>
            </div>
            {/* Monthly debts */}
            <div className="mb-4">
              <label
                htmlFor="monthlyDebts"
                className="block text-sm font-bold mb-2"
              >
                Monthly debts
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                  $
                </span>
                <input
                  type="text"
                  id="monthlyDebts"
                  className="flex-1 min-w-0 block border w-full px-3 py-2 text-gray-900 bg-white border-gray-300 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="/month"
                  value={monthlyDebts}
                  onChange={(e) => setMonthlyDebts(e.target.value)}
                />
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Include minimum payments for car or student loans, credit cards,
                child support and alimony. Exclude current rent or mortgage.
              </p>
            </div>
            {/* Down payment */}
            <div className="mb-4">
              <label
                htmlFor="downPayment"
                className="block text-sm font-bold mb-2"
              >
                Down payment
              </label>
              <div className="flex">
                <span className="inline-flex  items-center px-3 text-sm text-gray-700 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                  $
                </span>
                <input
                  type="text"
                  id="downPayment"
                  className="flex-1 min-w-0 border block w-full px-3 py-2 text-gray-900 bg-white border-gray-300 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                />
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Most home loans require at least 3% down.
              </p>
            </div>
            {/* Credit score */}
            <div className="mb-4">
              <label
                htmlFor="creditScore"
                className="block text-sm font-bold mb-2"
              >
                Credit score
              </label>
              <select
                id="creditScore"
                className="block w-full  px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setCreditScore(e.target.value)}
              >
                <option>Select option</option>
                <option>Excellent (720+)</option>
                <option>Good (680-719)</option>
                <option>Average (620-679)</option>
                <option>Poor (below 620)</option>
              </select>
              <p className="mt-2 text-sm text-gray-600">
                It's okay to estimate.
              </p>
            </div>
            {/* Location */}
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-sm font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="block w-full px-3 py-2 border text-gray-900 bg-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the city or zip code ."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {/* Submit button */}
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Calculate now
            </button>
          </form>
        </div>
        {/* Result Section */}
        {showResult ? (
          <div className="w-full md:w-2/3 mt-6 md:mt-0">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
              {/* Result Widget Content */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold">
                  You can afford a home between
                </h2>
                <p className="text-3xl font-bold">$1,900 - $2,100</p>
                <hr className="my-4" />
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">
                  Average monthly payment
                </h3>
                <p className="text-3xl font-bold">$17</p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold flex items-center">
                  Payment breakdown
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </h3>
                <div className="mt-2">
                  <div className="flex justify-between py-2">
                    <span>Principal + interest</span>
                    <span>$0</span>
                  </div>
                  <div className="flex justify-between py-2 bg-gray-100">
                    <span>Property taxes</span>
                    <span>$3</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Homeowner's insurance</span>
                    <span>$14</span>
                  </div>
                  <div className="flex justify-between py-2 bg-gray-100">
                    <span>Private mortgage insurance</span>
                    <span>$0</span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">What's next?</h3>
                <p className="mt-2">
                  Building your credit score could help you qualify for a loan.
                </p>
              </div>
              <div>
                <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center h-96 border w-3/4 justify-center  border-slate-200 p-14">
            <div className="flex flex-col items-center">
              <img src={Calculteimg} className="w-28 h-28" alt="Calculteimg" />
              <h1>Enter your information to calculate an estimated budget.</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculateSection;
