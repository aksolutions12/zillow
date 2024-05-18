import React from "react";

const CostSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 mb-10 bg-white shadow-xl  rounded-md">
      <h1 className="text-3xl font-bold text-center mb-6">
        Lower your mortgage costs
      </h1>
      <p className="text-lg text-center mb-4">
        Cost of $300,000 home with a 30-year mortgage with 6% APR
      </p>
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {" "}
        {/* Center content horizontally */}
        <div className="flex flex-row bg-orange-500 p-4 text-white gap-4 justify-end w-4/5">
          <div className="text-5xl font-bold">10%</div>
          <span className="text-5xl font-light">|</span>
          <div>
            <div className="text-base mt-2">Down payment</div>
            <div className="text-lg mt-1">$30,000</div>
          </div>
        </div>
        <div className="flex flex-row bg-orange-500 p-4 text-white gap-4 w-1/2">
          <div>
            <div className="text-base mt-2">Down payment</div>
            <div className="text-lg mt-1">$9,000</div>
          </div>
          <span className="text-5xl font-light">|</span>
          <div className="text-5xl font-bold">3%</div>
        </div>
        <div className="flex flex-col bg-blue-500 p-4 text-white justify-center">
          {" "}
          {/* Center content vertically */}
          <div className="text-base">Monthly payment</div>
          <div className="text-lg mt-1">$1,752</div>
        </div>
        <div className="bg-blue-500 p-4 text-white w-8/12">
          <div className="text-base">Monthly payment</div>
          <div className="text-lg mt-1">$2,008</div>
        </div>
        <div className="flex flex-col bg-green-500 p-4 text-white justify-center">
          {" "}
          {/* Center content vertically */}
          <div className="text-base">Total interest over life of loan</div>
          <div className="text-lg mt-1">$353,263</div>
        </div>
        <div className="bg-green-500 p-4 text-white w-9/12">
          <div className="text-lg">Total interest over life of loan</div>
          <div className="text-base mt-1">$380,739</div>
        </div>
      </div>
      <p className="text-sm text-center mt-4">
        Payment information is for illustrative purposes only. Actual available
        rates and monthly payment amounts are subject to market fluctuations and
        will depend on a number of factors, including geography and loan
        characteristics. Estimated monthly payment amounts displayed are based
        upon principal and interest only, and taxes and insurance are not
        included in this estimate; the actual payment obligation may be greater.
      </p>
    </div>
  );
};

export default CostSection;
