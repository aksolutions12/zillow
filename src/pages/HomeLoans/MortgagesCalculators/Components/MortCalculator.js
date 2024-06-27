import React, { useState, useEffect } from "react";
import MortPriceTab from "./MortPriceTab";

const MortCalculator = () => {
  // State variables to hold the input values
  const [homePrice, setHomePrice] = useState(100000);
  const [downPayment, setDownPayment] = useState(20000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanProgram, setLoanProgram] = useState("30 year fixed");
  const [interestRate, setInterestRate] = useState(2.4);

  // State variables for advanced options
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [includePMI, setIncludePMI] = useState(true);
  const [includeTaxesInsurance, setIncludeTaxesInsurance] = useState(true);
  const [propertyTax, setPropertyTax] = useState(1.2);
  const [homeInsurance, setHomeInsurance] = useState(945);
  const [hoaDues, setHoaDues] = useState(0);

  // Function to toggle advanced options visibility
  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  // Calculate mortgage amount
  const mortgageAmount = homePrice - downPayment;

  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const principal = mortgageAmount;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanProgram === "15 year fixed" ? 180 : 360;

    const monthlyPrincipalAndInterest =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const monthlyPropertyTax = (homePrice * propertyTax) / 100 / 12;
    const monthlyHomeInsurance = homeInsurance / 12;

    let monthlyPayment = monthlyPrincipalAndInterest;
    if (includeTaxesInsurance) {
      monthlyPayment += monthlyPropertyTax + monthlyHomeInsurance;
    }

    return monthlyPayment.toFixed(2);
  };

  const monthlyPayment = calculateMonthlyPayment();

  // Sync down payment percentage with value
  useEffect(() => {
    setDownPaymentPercent((downPayment / homePrice) * 100);
  }, [downPayment, homePrice]);

  // Sync down payment value with percentage
  useEffect(() => {
    setDownPayment((downPaymentPercent / 100) * homePrice);
  }, [downPaymentPercent, homePrice]);

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
      <div className="flex flex-col lg:flex-row p-5">
        <div className="w-full lg:w-4/12 p-6 bg-card text-card-foreground space-y-4">
          <div>
            <label
              htmlFor="home-price"
              className="block text-sm font-medium text-muted-foreground"
            >
              Home price <span className="text-destructive">*</span>
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-muted-foreground">$</span>
              </div>
              <input
                type="number"
                id="home-price"
                className="block w-full pl-7 py-2 pr-12 sm:text-sm border border-border rounded-md"
                placeholder="100,000"
                value={homePrice}
                onChange={(e) => setHomePrice(parseFloat(e.target.value))}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="down-payment"
              className="block text-sm font-medium text-muted-foreground"
            >
              Down payment <span className="text-destructive">*</span>
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-muted-foreground">$</span>
                </div>
                <input
                  type="number"
                  id="down-payment"
                  className="block w-full py-2 pl-7 sm:text-sm border border-border rounded-l-md"
                  placeholder="20,000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseFloat(e.target.value))}
                />
              </div>
              <div className="relative flex items-stretch flex-grow-0">
                <input
                  type="number"
                  className="block w-16 py-2 sm:text-sm border-t border-b border-border rounded-r-md text-center"
                  placeholder="30"
                  value={downPaymentPercent}
                  onChange={(e) =>
                    setDownPaymentPercent(parseFloat(e.target.value))
                  }
                />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-border bg-input text-muted-foreground sm:text-sm">
                  %
                </span>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="loan-program"
              className="block text-sm font-medium text-muted-foreground"
            >
              Loan program
            </label>
            <div className="mt-1 relative">
              <select
                id="loan-program"
                className="block w-full pl-3 pr-10 py-2 text-base border border-border rounded-md focus:outline-none sm:text-sm"
                value={loanProgram}
                onChange={(e) => setLoanProgram(e.target.value)}
              >
                <option>15 year fixed</option>
                <option>30 year fixed</option>
                <option>5/1 ARM</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="interest-rate"
              className="block text-sm font-medium text-muted-foreground"
            >
              Interest rate <span className="text-destructive">*</span>
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="number"
                id="interest-rate"
                className="block w-full py-2 px-2 sm:text-sm border border-border rounded-l-md"
                placeholder="2.4"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              />
              <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-border bg-input text-muted-foreground sm:text-sm">
                %
              </span>
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
                        type="number"
                        value={propertyTax}
                        onChange={(e) =>
                          setPropertyTax(parseFloat(e.target.value))
                        }
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
                        type="number"
                        id="home-insurance"
                        value={homeInsurance}
                        onChange={(e) =>
                          setHomeInsurance(parseFloat(e.target.value))
                        }
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
                    type="number"
                    id="hoa_dues"
                    value={hoaDues}
                    onChange={(e) => setHoaDues(parseFloat(e.target.value))}
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
          <MortPriceTab
            mortgageAmount={mortgageAmount}
            monthlyPayment={monthlyPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default MortCalculator;
