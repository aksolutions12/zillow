import React, { useState } from "react";
import questionomg from "../../../assets/images/Frame 371 (2) 1@2x.jpg";

const Question = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="py-10 bg-white p-5">
      {/* First Div */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">
          How to finance with Zillow Home Loans
        </h2>
        <p className="mt-4 text-lg">
          Not sure where to begin on your home buying journey? Here's a quick
          guide to help you get started.
        </p>
      </div>

      {/* Second Div */}
      <div className="flex flex-row item-center gap-4 ">
        <div className="w-1/2 flex items-center">
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="w-full "
          >
            {accordionData.map((accordion, index) => (
              <div key={index}>
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
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
                  }`}
                  aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                >
                  <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {accordion.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <img src={questionomg} alt="Questionsimg" />
        </div>
      </div>
    </div>
  );
};

const accordionData = [
  {
    question: "Prepare your finances",
    answer:
      "Take some time to review your credit score and income. Avoid taking out loans, opening credit cards or making large purchases for six months. Then, get a quick estimate of what you can afford with our Affordability Calculator.",
  },
  {
    question: "Get pre-qualified",
    answer:
      "Get an estimate for the amount you'll be able to borrow, so you can confidently search for homes within your budget. With Zillow Home Loans, you can get pre-qualified in as little as three minutesHelpwith no impact to your credit score",
  },
  {
    question: "Get a verified pre-approval",
    answer:
      "Getting pre-approved by a lender helps you make a strong and competitive offer. A loan officer will verify your income and assets, so you'll want to prepare documents such as pay stubs, W-2's and bank statements.",
  },
  {
    question: "Apply For Mortgage",
    answer:
      "After the seller accepts your offer, it's time to begin the formal mortgage application for your new home. Our loan officers will be available to provide expert guidance for your unique situation, every step of the way.",
  },
  {
    question: "Close on your new home",
    answer:
      "In most states, you'll close your loan with an escrow company. Once your loan is approved, the lender sets a date to finalize the sale and check your credit one last time.",
  },
];

export default Question;
