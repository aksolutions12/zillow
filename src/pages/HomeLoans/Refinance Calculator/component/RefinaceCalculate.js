import React from "react";

const RefinaceCalculate = () => {
  return (
    <div className="w-full mx-auto bg-white p-8 py-8 text-center md:text-left drop-shadow-xl  rounded-md mb-8">
      <h1 className="text-4xl font-bold mb-4">
        How to calculate refinance savings
      </h1>
      <p className="mb-6">
        To calculate the value of refinancing your home, compare the monthly
        payment of your current loan to the proposed payment on the new loan.
        Then use an amortization schedule to compare the principal balance on
        your proposed loan after making the same number of payments you’ve
        currently made on your existing loan. Both the monthly payment and
        principal balance of the new loan should be lower. Enter your specific
        details into the refinance calculator above for a detailed savings
        breakdown.
      </p>
      <h2 className="text-2xl font-bold mb-2">Is refinancing worth it?</h2>
      <p className="mb-6">
        Typically, it is worthwhile to refinance if the reduction in total
        interest expected to be paid over the life of the loan is greater than
        the cost of acquiring the loan.
        <br />
        <br />
        Monitor refinance rates regularly and use Zillow’s free refinance
        calculator to make sure a refinance is worth it for your financial
        circumstances.
      </p>
      <h2 className="text-2xl font-bold mb-2">Calculate the breakeven point</h2>
      <p className="mb-6">
        Use a mortgage refinance calculator to determine the breakeven point,
        which is the number of months it takes for the savings to outweigh the
        cost of refinancing. Divide the breakeven timeframe (months) by 12 to
        calculate the number of years you need to make payments on the loan
        before realizing any savings from the refinance. If you plan to sell
        before the breakeven point, it is probably not financially worth it to
        refinance.
      </p>
      <h2 className="text-2xl font-bold mb-2">
        Calculate refinance amortization
      </h2>
      <p className="mb-6">
        Mortgage payments are amortized, meaning your mortgage total remains the
        same each month, but the amount of principal and interest varies with
        each payment. Amortization ensures you pay more interest than principal
        during the first half of your loan term. Refinancing restarts your
        mortgage amortization schedule with the new loan, reducing the amount of
        principal you’re paying each month. If you plan to sell your home soon
        or if you’ve been paying your mortgage for more than half of the term,
        be sure to use a loan refinance calculator.
      </p>
    </div>
  );
};

export default RefinaceCalculate;
