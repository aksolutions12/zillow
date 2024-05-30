import React from "react";

const TypeofLoans = () => {
  return (
    <div className="w-full mx-auto bg-white p-8 py-8 sm:text-center lg:text-left drop-shadow-xl  rounded-md mb-8">
      <h1 className="text-4xl font-bold mb-4">
        Type of home loans to consider
      </h1>
      <p className="mb-6">
        The loan type you select affects your monthly mortgage payment. Explore
        mortgage options to fit your purchasing scenario and save money.
      </p>
      <h2 className="text-2xl font-bold mb-2">
        Conventional loan (conforming loan)
      </h2>
      <p className="mb-6">
        Conventional loans are backed by private lenders, like a bank, rather
        than the federal government and often have strict requirements around
        credit score and debt-to-income ratios. If you have excellent credit
        with a 20% down payment, a conventional loan may be a great option, as
        it usually offers lower interest rates without private mortgage
        insurance (PMI). You can still obtain a conventional loan with less than
        a 20% down payment, but PMI will be required
      </p>
      <h2 className="text-2xl font-bold mb-2">FHA loan (government loan)</h2>
      <p className="mb-6">
        An FHA loan is government-backed, insured by the Federal Housing
        Administration. FHA loans have looser requirements around credit scores
        and allow for low down payments. An FHA loan will come with mandatory
        mortgage insurance for the life of the loan.
      </p>
      <h2 className="text-2xl font-bold mb-2">VA loan (government loan)</h2>
      <p className="mb-6">
        VA loans are partially backed by the Department of Veterans Affairs,
        allowing eligible veterans to purchase homes with zero down payment (in
        most cases) at competitive rates. You won't pay PMI, but VA loans do
        require a funding fee.
      </p>
      <h2 className="text-2xl font-bold mb-2">USDA loan (government loan)</h2>
      <p className="mb-6">
        The United States Department of Agriculture backs USDA loans that
        benefit low-income borrowers purchasing in eligible, rural areas. Credit
        requirements are loose on USDA loans. While an upfront funding fee is
        required on these loans, your down payment can be as little as zero down
        without paying PMI.
      </p>
      <h2 className="text-2xl font-bold mb-2">
        Jumbo mortgages (non-conforming)
      </h2>
      <p className="mb-6">
        Jumbo loans are named based on the size of the loan. When a loan exceeds
        a certain amount (the conforming loan limit), it's not insured by the
        Federal government. Loan limits change annually and are specific to the
        local market. Jumbo loans allow you to purchase more expensive
        properties but often require 20% down, which can cost more than $100,000
        at closing. Rates are competitive.
      </p>
    </div>
  );
};

export default TypeofLoans;
