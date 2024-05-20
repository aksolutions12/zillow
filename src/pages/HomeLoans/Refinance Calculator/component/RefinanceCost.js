import React from "react";

const RefinanceCost = () => {
  return (
    <div className="w-full mx-auto bg-white p-8 py-8 text-center md:text-left drop-shadow-xl  rounded-md mb-8">
      <h1 className="text-4xl font-bold mb-4">
        How much does it cost to refinance?
      </h1>
      <p className="mb-6">
        Average refinance closing costs range between 2%-6% of the loan amount.
        Closing fees vary depending on your location, loan type, loan size and
        mortgage lender. Most lenders allow you to roll the closing costs of the
        refinance into the balance of your new loan, increasing the total amount
        borrowed. Apply with at least three lenders and obtain official Loan
        Estimates to compare loan costs and savings. Work with lenders to
        complete a cost-benefit analysis and determine whether refinancing makes
        sense for you.
      </p>
      <h2 className="text-2xl font-bold mb-4">Common refinance fees</h2>
      <p className="mb-3">
        Here is a list of common refinance fees you might see associated with
        your refinance loan:
        <ul className="list-disc p-3 pl-8">
          <li className="mb-3">Lender fees</li>
          <li className="mb-3">Credit report fee</li>

          <li className="mb-3">Appraisal fees</li>
          <li className="mb-3">
            Title search, title report, and title insurance policy
          </li>
          <li className="mb-3">Title/Attorney (at signing)</li>
          <li className="mb-3">Transfer taxes (state specific)</li>
          <li className="mb-3">Escrow fees</li>
          <li className="mb-3">Flood certification</li>
        </ul>
      </p>
    </div>
  );
};

export default RefinanceCost;
