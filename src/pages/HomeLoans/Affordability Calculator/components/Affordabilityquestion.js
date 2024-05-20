import React, { useState } from "react";

const Affordabilityquestion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <div className="py-14 bg-white p-5 drop-shadow-xl  rounded-md mb-8">
      {/* Frequently Asked Questions */}
      <div className="w-full mx-auto text-center lg:text-start mb-8">
        <h2 className="text-4xl font-bold">
          Frequently asked questions about affordability
        </h2>
      </div>

      {/* Responsive Accordion */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="w-full sm:w-10% order-2 sm:order-1">
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="w-full rounded-lg shadow-md overflow-hidden"
          >
            {/* First Question */}
            <div>
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-black rounded-t-lg  dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => handleAccordionClick(0)}
                  aria-expanded={activeAccordion === 0 ? "true" : "false"}
                  aria-controls={`accordion-collapse-body-1`}
                >
                  <span className="font-bold">
                    How much house can I afford?
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-${
                      activeAccordion === 0 ? "0" : "180"
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id={`accordion-collapse-body-1`}
                className={`${
                  activeAccordion === 0 ? "block" : "hidden"
                } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
                aria-labelledby={`accordion-collapse-heading-1`}
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  While you may have heard of using the 28/36 rule to calculate
                  affordability, the correct DTI ratio that lenders will use to
                  assess how much house you can afford is 36/43. This ratio says
                  that your monthly mortgage costs (which includes property
                  taxes and homeowners insurance) should be no more than 36% of
                  your gross monthly income, and your total monthly debt
                  (including your anticipated monthly mortgage payment and other
                  debts such as car or student loan payments) should be no more
                  than 43% of your pre-tax income.
                  <br />
                  <br />
                  For example, if you make $3,000 a month ($36,000 a year), you
                  can afford a mortgage with a monthly payment no higher than
                  $1,080 ($3,000 x 0.36). Your total household expense should
                  not exceed $1,290 a month ($3,000 x 0.43).
                </p>
              </div>
            </div>

            {/* Second Question */}
            <div>
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => handleAccordionClick(1)}
                  aria-expanded={activeAccordion === 1 ? "true" : "false"}
                  aria-controls={`accordion-collapse-body-2`}
                >
                  <span className="font-bold">
                    How much house can I afford with an FHA loan?
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-${
                      activeAccordion === 1 ? "0" : "180"
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id={`accordion-collapse-body-2`}
                className={`${
                  activeAccordion === 1 ? "block" : "hidden"
                } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
                aria-labelledby={`accordion-collapse-heading-2`}
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  With a FHA loan, your debt-to-income (DTI) limits are
                  typically based on a 31/43 rule of affordability. This means
                  your monthly payments should be no more than 31% of your
                  pre-tax income, and your monthly debts should be less than 43%
                  of your pre-tax income. However, these limits can be higher
                  under certain circumstances.
                  <br />
                  <br />
                  If you make $3,000 a month ($36,000 a year), your DTI with an
                  FHA loan should be no more than $1,290 ($3,000 x 0.43) — which
                  means you can afford a house with a monthly payment that is no
                  more than $900 ($3,000 x 0.31).
                  <br />
                  <br />
                  FHA loans typically allow for a lower down payment and credit
                  score if certain requirements are met. The lowest down payment
                  is 3.5% for credit scores that are 580 or higher. If your
                  credit score is between 500-579, you may still qualify for an
                  FHA loan with a 10% down payment. Keep in mind that generally,
                  the lower your credit score, the higher your interest rate
                  will be, which may impact how much house you can afford.
                  <br />
                  <br />
                  FHA loans are restricted to a maximum loan size depending on
                  the location of the property. Additionally, FHA loans require
                  an upfront mortgage insurance premium to be paid as part of
                  closing costs as well as an annual mortgage insurance premium
                  included in your monthly mortgage payment — both of which may
                  impact your affordability.
                </p>
              </div>
            </div>

            {/* Third Question */}
            <div>
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => handleAccordionClick(2)}
                  aria-expanded={activeAccordion === 2 ? "true" : "false"}
                  aria-controls={`accordion-collapse-body-3`}
                >
                  <span className="font-bold">
                    How much house can I afford with a VA loan?
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-${
                      activeAccordion === 2 ? "0" : "180"
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id={`accordion-collapse-body-3`}
                className={`${
                  activeAccordion === 2 ? "block" : "hidden"
                } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
                aria-labelledby={`accordion-collapse-heading-3`}
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Veterans and active military may qualify for a VA loan, if
                  certain criteria is met. While VA loans require a single
                  upfront funding fee as part of the closing costs, the loan
                  program offers attractive and flexible loan benefits, such as
                  no private mortgage insurance (PMI) premiums and no down
                  payment requirements. VA loan benefits are what make house
                  affordability possible for those who might otherwise not be
                  able to afford a mortgage.
                  <br />
                  <br />
                  With VA loans, your monthly mortgage payment and recurring
                  monthly debt combined should not exceed 41%. So if you make
                  $3,000 a month ($36,000 a year), you can afford a house with
                  monthly payments around $1,230 ($3,000 x 0.41).
                  <br />
                  <br />
                  Use our VA home loan calculator to estimate how expensive of a
                  house you can afford.
                </p>
              </div>
            </div>

            {/* Fourth Question */}
            <div>
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => handleAccordionClick(3)}
                  aria-expanded={activeAccordion === 3 ? "true" : "false"}
                  aria-controls={`accordion-collapse-body-4`}
                >
                  <span className="font-bold">
                    How much should I spend on a house?
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-${
                      activeAccordion === 3 ? "0" : "180"
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id={`accordion-collapse-body-4`}
                className={`${
                  activeAccordion === 3 ? "block" : "hidden"
                } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
                aria-labelledby={`accordion-collapse-heading-4`}
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  An affordability calculator is a great first step to determine
                  how much house you can afford, but ultimately you have the
                  final say in what you're comfortable spending on your next
                  home. When deciding how much to spend on a house, take into
                  consideration your monthly spending habits and personal
                  savings goals. You want to have some cash reserved in your
                  savings account after purchasing a home. Typically, a cash
                  reserve should include three month's worth of house payments
                  and enough money to cover other monthly debts. Here are some
                  questions you can ask yourself to start planning out your
                  housing budget:
                  <ul className="list-disc pl-10 mt-2">
                    <li>
                      How much money do I want to save each month for retirement
                      or travel?
                    </li>
                    <li>
                      Do I have enough saved for closing costs or unexpected
                      expenses?
                    </li>
                    <li>
                      How much can I put toward a down payment without emptying
                      my savings account?
                    </li>
                    <li>What is my total monthly debt?</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affordabilityquestion;
