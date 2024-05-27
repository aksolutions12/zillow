import React, { useState } from "react";
import MortPriceTab from "./MortPriceTab";

const MortCalculator = () => {
  // State variables to hold the input values
  const [annualIncome, setAnnualIncome] = useState("70,000");
  const [monthlyDebts, setMonthlyDebts] = useState("250");
  const [downPayment, setDownPayment] = useState("20,000");

  // State variables for advanced options
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [includePMI, setIncludePMI] = useState(true);
  const [includeTaxesInsurance, setIncludeTaxesInsurance] = useState(true);
  const [propertyTax, setPropertyTax] = useState("1.2");
  const [homeInsurance, setHomeInsurance] = useState("945");
  const [hoaDues, setHoaDues] = useState("0");

  // Function to toggle advanced options visibility
  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  return (
    <div className="w-full bg-white">
      <div className="p-5">
        <h1 className="text-5xl font-bold mb-2">Mortgage Calculator</h1>
        <p className="mb-4">
          Use Zillow's affordability calculator to estimate a comfortable
          mortgage amount based on your current budget. Enter details about your
          income, down payment and monthly debts to determine how much to spend
          on a house.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row p-5 ">
        <div className="p-4 w-full lg:w-2/6 mx-auto">
          <div className="mb-4">
            <label className="block font-bold mb-1">Annual income</label>
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
              <span className="mr-2">$</span>
              <input
                type="text"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(e.target.value)}
                className="bg-transparent focus:outline-none w-full"
              />
            </div>
            <a
              href="#"
              className="text-blue-600 font-bold dark:text-blue-400 text-xs mt-1 inline-block"
            >
              Calculate by payment
            </a>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Monthly debts</label>
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
              <span className="mr-2">$</span>
              <input
                type="text"
                value={monthlyDebts}
                onChange={(e) => setMonthlyDebts(e.target.value)}
                className="bg-transparent focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Down payment</label>
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
              <span className="mr-2">$</span>
              <input
                type="text"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="bg-transparent focus:outline-none w-full"
              />
            </div>
          </div>
          {showAdvancedOptions && (
            <div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="include-pmi"
                  className="mr-2 w-5 h-5 rounded-lg"
                  checked={includePMI}
                  onChange={() => setIncludePMI(!includePMI)}
                />
                <label
                  htmlFor="include-pmi"
                  className="flex text-lg items-center"
                >
                  Include PMI
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="taxes/insurance"
                  className="mr-2 w-5 h-5 rounded-lg"
                  checked={includeTaxesInsurance}
                  onChange={() =>
                    setIncludeTaxesInsurance(!includeTaxesInsurance)
                  }
                />
                <label
                  htmlFor="taxes/insurance"
                  className="flex text-lg  items-center"
                >
                  Include taxes/insurance
                </label>
              </div>

              {includeTaxesInsurance && (
                <div>
                  <div className="mb-4">
                    <label className="block  text-zinc-700 dark:text-zinc-300 font-bold mb-1">
                      Property tax
                    </label>
                    <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md p-2">
                      <input
                        type="text"
                        value={propertyTax}
                        onChange={(e) => setPropertyTax(e.target.value)}
                        className="bg-transparent flex-1 text-zinc-700 dark:text-zinc-300 outline-none"
                      />
                      <span className="text-zinc-500 dark:text-zinc-400">
                        %
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="home-insurance"
                      className="flex font-bold items-center mb-1"
                    >
                      Home insurance
                    </label>
                    <div className="flex items-center border bg-zinc-100 rounded px-3 py-2">
                      <span className="mr-2">$</span>
                      <input
                        type="text"
                        id="home-insurance"
                        value={homeInsurance}
                        onChange={(e) => setHomeInsurance(e.target.value)}
                        className="w-full  text-zinc-700 bg-zinc-100  dark:text-zinc-300 outline-none"
                      />
                      <span className="ml-2">/yr</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="hoa_dues"
                  className="flex font-bold items-center mb-1"
                >
                  HOA Dues
                </label>
                <div className="flex items-center border bg-zinc-100 rounded px-3 py-2">
                  <span className="mr-2">$</span>
                  <input
                    type="text"
                    id="hoa_dues"
                    value={hoaDues}
                    onChange={(e) => setHoaDues(e.target.value)}
                    className="w-full  text-zinc-700 bg-zinc-100  dark:text-zinc-300 outline-none"
                  />
                  <span className="ml-2">/mo</span>
                </div>
              </div>
            </div>
          )}
          <div className="mb-4">
            {/* Toggle between "Advanced" and "Simple" */}
            <a
              href="#"
              className="text-blue-700 dark:text-blue-500 font-bold"
              onClick={toggleAdvancedOptions}
            >
              {showAdvancedOptions ? "Simple" : "Advanced"}
            </a>
          </div>
          <div>
            <a href="#" className="text-blue-600 dark:text-blue-400 underline">
              Calculator disclaimer
            </a>
          </div>
        </div>
        <div className="w-full lg:w-8/12 ">
          <MortPriceTab />
        </div>
      </div>
    </div>
  );
};

export default MortCalculator;
