import React, { useState } from "react";
import img1 from "../../../../assets/images/tenant-lap.png";
import img2 from "../../../../assets/images/tenant-prof.png";
import img3 from "../../../../assets/images/tenant-prof2.png";

const RentalManagerQuestions = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="py-10 bg-gray-100 p-5">
      {/* First Div */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Frequently asked questions</h2>
      </div>

      {/* Second Div - Responsive Accordion */}
      <div className="flex flex-col  sm:items-center justify-between gap-4">
        <div className="w-full ">
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="w-full rounded-lg shadow-md overflow-hidden"
          >
            {accordionData.map((accordion, index) => (
              <div key={index}>
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                    onClick={() => handleAccordionClick(index)}
                    aria-expanded={activeAccordion === index ? "true" : "false"}
                    aria-controls={`accordion-collapse-body-${index + 1}`}
                  >
                    <span>{`${index + 1}. ${accordion.question}`}</span>
                    <svg
                      data-accordion-icon
                      className={`w-3 h-3 rotate-${
                        activeAccordion === index ? "0" : "180"
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
                  id={`accordion-collapse-body-${index + 1}`}
                  className={`${
                    activeAccordion === index ? "block" : "hidden"
                  } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
                  aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                >
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {accordion.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-zinc-100 p-8 py-8">
        <h2 className="text-center text-2xl font-bold mb-8">
          You can do more with Zillow Rental Manager
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={img1}
              alt="Post a listing"
              className="mx-auto mb-4 h-24 w-24"
            />
            <a href="#" className="text-blue-600 hover:underline">
              Post a listing
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={img2}
              alt="Sign a lease"
              className="mx-auto mb-4 h-24 w-24"
            />
            <a href="#" className="text-blue-600 hover:underline">
              Sign a lease
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={img3}
              alt="Collect rent"
              className="mx-auto mb-4 h-24 w-24"
            />
            <a href="#" className="text-blue-600 hover:underline">
              Collect rent
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-blue-600 hover:underline">
            Learn about Zillow Rental Manager
          </a>
        </div>
      </div>
    </div>
  );
};
const accordionData = [
  {
    question: "How does online tenant screening work?",
    answer:
      "All applicants fill out an online rental application with information about their current household makeup, prior residences, contact information and income. We then pull their tenant credit report history through a third-party provider known as Experian™ and run a tenant background check using CIC. Once everything is complete, we will compile everything into a rental application summary for you to review within your Zillow Rental Manager account.",
  },
  {
    question: "How do I start screening tenants online?",
    answer:
      "First, enable the Apply now button on your property by going to the Applications tab for that property in Zillow Rental Manager. Once enabled, all renters can apply directly from your Zillow, Trulia and HotPads listing by clicking the Apply now button.When a renter applies to one of your properties that are enabled, we will send you an email notification. All completed applications, which includes a detailed tenant screening report, will appear under the Applications tab for that property. You can also invite renters to apply using a shareable link.",
  },
  {
    question: " How much does it cost to screen a tenant?",
    answer:
      "Tenant screening reports are free for landlords. Renters pay a $35 tenant screening and application fee, which allows them to apply to your listing and an unlimited number of participating rentals for 30 days.",
  },
  {
    question: "How long do tenant credit and background checks take?",
    answer:
      "Most tenant credit and background checks will be returned within minutes. On rare occasions, tenant background check requests require a manual review that can take up to 24 hours. We will let you know if a manual review is required.",
  },
  {
    question: "What does a tenant background and credit check show?",
    answer:
      " A tenant background check typically includes a national criminal search, sex offender search and eviction history. You can view a sample of our CIC tenant background check here.A tenant credit check typically includes a credit score alongside a comprehensive overview of the applicant’s credit history. You can view a sample of our Experian™ credit report here. In some cases, credit and background checks are modified to comply with state and local legal requirements.",
  },
];

export default RentalManagerQuestions;
