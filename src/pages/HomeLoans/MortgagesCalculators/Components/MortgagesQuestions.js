import React, { useState } from "react";

const MortgagesQuestions = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="py-14 bg-white p-5 drop-shadow-xl  rounded-md mb-8">
      {/* Frequently Asked Questions */}
      <div className="w-full mx-auto text-center lg:text-start mb-8">
        <h2 className="text-4xl font-bold">
          Frequently asked questions about mortgages
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
                    What is the principal of a loan?
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
                  The{" "}
                  <a href="#" className="text-blue-500 underline">
                    principal
                  </a>{" "}
                  of a loan is the remaining balance of the money you borrowed.
                  Principal does not include interest, which is the cost of the
                  loan.
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
                  <span className="font-bold">What is a down payment?</span>
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
                  The down payment is the money you pay upfront to purchase a
                  home. The down payment plus the loan amount should add up to
                  the cost of the home. You can use Zillow's down payment
                  assistance page and questionnaire tool tool to surface
                  assistance funds and programs you may qualify for.
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
                  <span className="font-bold">APR vs interest rate?</span>
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
                  Interest rate is the base fee for borrowing money, while the
                  annual percentage rate (APR) is the interest rate plus the
                  lender fees. APR gives you an accurate idea of the cost of a
                  financing offer, highlighting the relationship between rate
                  and fees.
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
                    How much is private mortgage insurance?
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
                  The cost of private mortgage insurance varies based on factors
                  such as credit score, down payment and loan type.
                </p>
              </div>
            </div>

            {/* Fifth Question */}
            <div>
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => handleAccordionClick(4)}
                  aria-expanded={activeAccordion === 4 ? "true" : "false"}
                  aria-controls={`accordion-collapse-body-4`}
                >
                  <span className="font-bold">
                    How much is homeowner's insurance?
                  </span>
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
                  You should consult with your insurance carrier, but the
                  general thought is that homeowner's insurance costs roughly
                  $35 per month for every $100,000 of the home value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgagesQuestions;
