import React, { useState } from "react";

const WorthQuestions = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="py-14 bg-gray-50 p-5 flex flex-col items-center">
      {/* Frequently Asked Questions */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      </div>

      {/* Responsive Accordion */}
      <div className="flex flex-col sm:flex-row sm:items-center w-full lg:w-3/5 justify-between gap-4">
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
                    Why use a home value estimator tool?
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
                  Knowing the estimated value of your own home helps you{" "}
                  <a href="#" className="text-blue-600 underline">
                    price your home
                  </a>{" "}
                  for sale, as a precursor to an official home appraisal.
                  Understanding your home’s worth allows you to
                  <a href="#" className="text-blue-600 underline">
                    estimate the proceeds of a future home sale
                  </a>{" "}
                  , so you can get a better estimate your budget for your next
                  home. And, if you’re shopping, it’s also useful to check the
                  value of homes in the area to ensure your offer is
                  competitive.
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
                  <span className="font-bold">What is a Zestimate?</span>
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
                  A <a className="underline text-blue-600"> Zestimate</a> is
                  Zillow’s estimated market value for a home, computed using a
                  proprietary formula including public and user-submitted data,
                  such as details about a home (bedrooms, bathrooms, home age,
                  etc.), location, property tax assessment information and sales
                  histories of the subject home as well as other homes that have
                  recently sold in the area. Updating your home details can help
                  make your Zestimate more accurate. A Zestimate is not an
                  official appraisal, but is a starting point to estimate your
                  home value.
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
                    How accurate is the Zestimate?
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
                  The <a className="underline text-blue-600"> Zestimate’s</a>{" "}
                  accuracy depends on location and the availability of data in
                  an area. The Zestimate’s median error rate for on-market homes
                  nationwide is 3.2%, meaning Zestimates for half of all
                  on-market homes are within 3.2% of the ultimate sale price,
                  and half are not. For off-market homes, the median error rate
                  is 7.52%. Check your home value estimate for free by entering
                  your home address. You can improve the accuracy of your
                  Zestimate by claiming the address as your home and updating
                  the home details.
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
                    How to find the value of your home?
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
                  Begin with your Zestimate, a useful starting point to help you
                  determine an independent and unbiased assessment of what your
                  home might be worth in today’s market. Try comparing your home
                  to recently sold properties in the area to better understand
                  its current value or estimate a possible sale price for your
                  home. Your real estate agent will provide a more robust CMA
                  for you after evaluating the home and taking into account any
                  special features, its location and local market conditions.
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
                  <span className="font-bold">How to increase home value?</span>
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
                  Home values increase when buyer demand increases. Making home
                  improvements can also increase the value of your house.
                  Updating your home’s exterior, including the roof, siding,
                  doors or deck often increase the true value of your home,
                  which is what buyers are willing to pay for the property.
                  Depending on the extent of the change, addition or renovation,
                  and the ability of Zillow to identify it, some changes may be
                  reflected in the Zestimate while others may not. You can help
                  by updating your home facts when changes have happened. Search
                  your home address on Zillow, claim the property as your home
                  and update your home facts to reflect recent improvements.
                </p>
              </div>
            </div>

            {/* Fifth Question */}
            <div>
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => handleAccordionClick(5)}
                  aria-expanded={activeAccordion === 5 ? "true" : "false"}
                  aria-controls={`accordion-collapse-body-4`}
                >
                  <span className="font-bold">
                    How often do home values change?
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 rotate-${
                      activeAccordion === 5 ? "0" : "180"
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
                  activeAccordion === 5 ? "block" : "hidden"
                } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
                aria-labelledby={`accordion-collapse-heading-4`}
              >
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Typically, home values increase over time and grow 3-4% each
                  year in healthy, sustainable markets. However, home values are
                  constantly changing depending on buyer demand and local market
                  factors such as the amount of inventory, bidding wars or
                  economic changes in the area. Local market conditions are the
                  best indicator of projected (short-term) home value
                  appreciation. Your Zestimate is updated regularly to keep up
                  with fluctuating home values, making it an excellent resource
                  for a free home value estimation. Review the history of your
                  Zestimate and/or the Zillow House Value Index (ZHVI) for your
                  neighborhood in order to to examine house value appreciation
                  in your local market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorthQuestions;
