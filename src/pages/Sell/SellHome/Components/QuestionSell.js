import React, { useState } from "react";

const QuestionSell = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="py-14 bg-gray-50 p-5">
      {/* Frequently Asked Questions */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
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
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => handleAccordionClick(0)}
                  aria-expanded={activeAccordion === 0 ? "true" : "false"}
                  aria-controls={`accordion-collapse-body-1`}
                >
                  <span className="font-bold">
                    When selling my house, where should I begin?
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
                  Start your home selling process by{" "}
                  <a href="#" className="text-blue-500 underline">
                    gathering information
                  </a>{" "}
                  and considering your options. After choosing a selling path
                  that works best for you, take the first step; contact an
                  iBuyer, a real estate agent or begin home prep.
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
                    How long does it take to sell a house?
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
                  On average, homes in the U.S. spend about one month on the
                  market before going under contract, and another month or more
                  to close. In 2020, the{" "}
                  <a href="#" className="text-blue-500 underline">
                    average time to sell a home
                  </a>{" "}
                  was 55-70 days from list to close
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
                    What home seller mistakes should I avoid?
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
                  Common{" "}
                  <a href="#" className="text-blue-500 underline">
                    mistakes when selling a house
                  </a>{" "}
                  include overpricing, poor sale timing, incomplete home
                  repairs, unprofessional marketing photography and forgetting
                  to factor in all of the closing costs as a seller. Learn more
                  about your likely{" "}
                  <a href="#" className="text-blue-500 underline">
                    home sale net proceeds.
                  </a>{" "}
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
                    Where are personalized selling options available?
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
                  Today, you can sell with a Zillow partner agent or get a cash
                  offer in the following markets:
                </p>

                <p className=" text-black font-bold dark:text-gray-400">
                  Midwest
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Detroit, MI; Indianapolis, IN; Kansas City, MO;
                  Minneapolis-St. Paul, MN; Saint Louis, MO
                </p>

                <p className=" text-black font-bold dark:text-gray-400">
                  Northeast
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Boston, MA; Long Island and sections of the Lower Hudson
                  Valley, NY; North and Central New Jersey, NJ; Washington, DC
                </p>

                <p className=" text-black font-bold dark:text-gray-400">
                  Southeast
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Atlanta, GA; Charlotte, NC; Cincinnati, OH; Cleveland, OH;
                  Columbia, SC; Columbus, OH; Daytona Beach, FL; Durham, NC;
                  Fort Myers, FL; Gainesville, FL; Greenville, SC; Jacksonville,
                  FL; Knoxville-Morristown, TN; Lakeland, FL; Miami, FL; Naples,
                  FL; Nashville, TN; Orlando, FL; Raleigh, NC; Sarasota, FL;
                  Tampa, FL.
                </p>

                <p className=" text-black font-bold dark:text-gray-400">
                  Southwest
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Albuquerque, NM; Austin, TX; Dallas-Fort Worth, TX; Houston,
                  TX; Killeen, TX; Las Vegas, NV; Oklahoma, OK; Phoenix, AZ; San
                  Antonio, TX; Tucson, AZ
                </p>

                <p className=" text-black font-bold dark:text-gray-400">West</p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Boulder, CO; Colorado Springs, CO; Denver, CO; Fort Collins,
                  CO; Portland, OR; Salt Lake City, UT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSell;
