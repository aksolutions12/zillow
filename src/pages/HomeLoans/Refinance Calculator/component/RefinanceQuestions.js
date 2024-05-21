import React, { useState } from "react";

const RefinanceQuestions = () => {
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
                    How often can you refinance your home?
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
                  You can refinance your home countless times, though some
                  lenders have their own limits. Be sure to use a refinance
                  calculator every time to understand the long-term cost or
                  savings of the home loan.
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
                    What credit score is needed to refinance?
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
                  Borrowers with credit scores of 620 or greater may be eligible
                  to refinance their home, but credit scores of 740 or higher
                  receive the most favorable refinance interest rates. The
                  higher your credit score the lower your refinance interest
                  rate, so it's beneficial to have a healthy credit score.
                  Calculate your estimated savings at varying interest rates to
                  see if it's worthwhile to wait and improve your credit score
                  before refinancing.
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
                    How much equity do you need to refinance?
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
                  Expect a minimum requirement of home equity if you hope to
                  cancel mortgage insurance, usually 20%. Otherwise, refinance
                  equity requirements vary by loan program and property type.
                  Typically rate-and-term refinances have fewer restrictions on
                  equity requirements compared to cash-out refinances.
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
                    What is a no closing cost refinance?
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
                  No closing cost refinances are simply mortgage refinances with
                  closing costs rolled into the loan. While you won't pay your
                  closing costs out-of-pocket at the time of closing, doing so
                  will typically increase your total amount borrowed and monthly
                  payments.
                </p>
              </div>
            </div>

            {/* Fourth Question */}
            <div>
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => handleAccordionClick(4)}
                  aria-expanded={activeAccordion === 4 ? "true" : "false"}
                  aria-controls={`accordion-collapse-body-4`}
                >
                  <span className="font-bold">How does refinancing work?</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-${
                      activeAccordion === 4 ? "0" : "180"
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
                  activeAccordion === 4 ? "block" : "hidden"
                } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
                aria-labelledby={`accordion-collapse-heading-4`}
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The process of refinancing will follow these typical steps:
                </p>

                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <strong className="text-black">
                    Select a type of mortgage refinance:{" "}
                  </strong>
                  You have many refinancing options, including refreshing your
                  rate and term (rate-and-term refinance), applying more cash
                  toward your equity (cash-in refinance), pulling money out of
                  your home equity (cash-out refinance), or opting for a
                  streamline refinance to lower your monthly payments.
                </p>

                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <strong className="text-black">Shop refinance rates: </strong>
                  Compare different interest rates using the custom rates tool
                  or refinance calculator above to determine if refinancing at a
                  current rate would accomplish your refinancing goals. Contact
                  the lender, or find a lender to work with in your area.
                </p>

                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <strong className="text-black">
                    Apply for a refinance:{" "}
                  </strong>{" "}
                  Once you apply, your lender will provide you with initial
                  disclosures that outline the terms of the loan. Read and sign.
                </p>

                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <strong className="text-black">
                    Lock your refinance rate:{" "}
                  </strong>{" "}
                  Work with your lender to lock your interest rate when you
                  believe it's the lowest.
                </p>

                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <strong className="text-black">
                    Complete a home appraisal:{" "}
                  </strong>{" "}
                  Most lenders require a home appraisal.
                </p>

                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <strong className="text-black">Close your loan: </strong>{" "}
                  Review the closing documents and disclosures, pay any
                  applicable closing costs, and sign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefinanceQuestions;
