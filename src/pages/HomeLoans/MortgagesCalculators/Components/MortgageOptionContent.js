import React from "react";

const MortgageOptionContent = () => {
  return (
    <div className="w-full mx-auto p-8 bg-white  py-8 sm:text-center lg:text-left drop-shadow-xl  rounded-md mb-8">
      <h1 className="text-4xl font-bold mb-4">
        Mortgage options and terminology
      </h1>
      <p className="mb-6">
        In addition to mortgages options (loan types), consider some of these
        program differences and mortgage terminology.
      </p>
      <h2 className="text-2xl font-bold mb-2">Loan term</h2>
      <p className="mb-6">
        A mortgage loan term is the maximum length of time you have to repay the
        loan. Common mortgage terms are 30-year or 15-year. Longer terms usually
        have higher rates but lower monthly payments. Shorter terms help pay off
        loans quickly, saving on interest. It is possible to pay down your loan
        faster than the set term by making additional monthly payments toward
        your principal loan balance.
      </p>
      <h2 className="text-2xl font-bold mb-2">Fixed rate vs adjustable rate</h2>
      <p className="mb-6">
        A fixed rate is when your interest rate remains the same for your entire
        loan term. An adjustable rate stays the same for a predetermined length
        of time and then resets to a new interest rate on scheduled intervals. A
        5-year ARM, for instance, offers a fixed interest rate for 5 years and
        then adjusts each year for the remaining length of the loan. Typically
        the first fixed period offers a low rate, making it beneficial if you
        plan to refinance or move before the first rate adjustment.
      </p>
      <h2 className="text-2xl font-bold mb-2">
        Conforming loans vs non-conforming loans
      </h2>
      <p className="mb-6">
        Conforming loans have maximum loan amounts that are set by the
        government and conform to other rules set by Fannie Mae or Freddie Mac,
        the companies that provide backing for conforming loans. A
        non-conforming loan is less standardized with eligibility and pricing
        varying widely by lender. Non-conforming loans are not limited to the
        size limit of conforming loans, like a jumbo loan, or the guidelines
        like government-backed loans, although lenders will have their own
        criteria.
      </p>
    </div>
  );
};

export default MortgageOptionContent;
