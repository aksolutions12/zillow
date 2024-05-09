import React, { useState } from "react";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const PurchaseSection = ({ cards }) => (
  <div className="flex flex-col">
    <div className="mt-12  space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border bg-white border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200"
        >
          <div className="p-6 flex items-center flex-col text-center">
            <h2 className="text-xl leading-6 font-bold text-slate-900">
              {card.name}
            </h2>
            <p className="mt-2 text-base text-slate-700 leading-tight">
              {card.description}
            </p>
            <hr className="mt-6 mb-4 border-t border-gray-200" />
            <p className="mt-2 text-4xl font-bold text-slate-900">
              {card.percentage}%
            </p>
            <p className="mt-2 text-base text-slate-700">Min. down payment</p>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              Loan highlights:
            </h3>
            <ul className="mt-4 space-y-3">
              {card.highlights.map((highlight, i) => (
                <li key={i} className="flex space-x-3">
                  <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-400" />
                  <div>
                    <p className="text-base text-slate-700 font-bold">
                      {highlight.heading}
                    </p>
                    <p className="text-base text-slate-700">
                      {highlight.details}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-6">
      <Button variant="contained" color="primary" size="large">
        Get Pre-Qualified
      </Button>
    </div>
  </div>
);

const RefinanceSection = ({ cards }) => (
  <div className="flex items-center flex-col">
    <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border bg-white border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200"
        >
          <div className="p-6 flex items-center flex-col text-center">
            <h2 className="text-xl leading-6 font-bold text-slate-900">
              {card.name}
            </h2>
            <hr className=" mb-4 border-t border-gray-200" />
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
              {card.description}
            </h3>
            <ul className="mt-4 space-y-3">
              {card.highlights.map((highlight, i) => (
                <li key={i} className="flex space-x-3">
                  <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-400" />
                  <div>
                    <p className="text-base text-slate-700 font-bold">
                      {highlight.heading}
                    </p>
                    <p className="text-base text-slate-700">
                      {highlight.details}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-6">
      <Button variant="contained" color="primary" size="large">
        Refinance my Home
      </Button>
    </div>
  </div>
);

const PricingCards = () => {
  const [showPurchase, setShowPurchase] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Purchase");

  const togglePricing = (tab) => {
    setShowPurchase(tab === "Purchase");
    setSelectedTab(tab);
  };

  const cardData = [
    {
      tab: "Purchase",
      cards: [
        {
          name: "Conventional loan",
          description: "Wide range of options to suit many unique needs.",
          percentage: 20,
          highlights: [
            {
              heading: "Fixed-rate options",
              details: "15-, 20-, or 30-year terms offered",
            },
            { heading: "PMI required with <20% down", details: "" },
          ],
        },
        {
          name: "FHA loan",
          description:
            "Popular with first-time buyers and flexible credit requirements.",
          percentage: 20,
          highlights: [
            { heading: "Flexible credit requirements", details: "" },
            { heading: "Mortgage insurance required", details: "" },
          ],
        },
        {
          name: "VA loan",
          description: "Competitive interest rates and reduced closing costs.",
          percentage: 10,
          highlights: [
            { heading: "Reduced closing costs", details: "" },
            { heading: "No PMI", details: "" },
          ],
        },
      ],
    },
    {
      tab: "Refinance",
      cards: [
        {
          name: "Rate and term refinance",
          description: "Adjust your loan terms",
          highlights: [
            { heading: "Adjust your loan terms", details: "" },
            {
              heading: "Shorten or extend how long you'll pay on your home",
              details: "",
            },
            {
              heading: "Fixed and adjustable rate options available",
              details: "",
            },
          ],
        },
        {
          name: "Streamline refinance",
          description: "Adjust your loan terms",
          highlights: [
            {
              heading: "Less hassle than traditional refinance processes",
              details: "",
            },
            {
              heading: "Existing government-backed mortgage required",
              details: "",
            },
          ],
        },
        {
          name: "Cash-out refinance",
          description: "Get cash and a new home loan",
          highlights: [
            { heading: "Get up to 80% of home's value", details: "" },
            { heading: "Get up to 80% of home's value", details: "" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="sm:flex sm:flex-col sm:align-center p-10">
      <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
        <Button
          variant={showPurchase ? "contained" : "outlined"}
          className={`relative w-1/2 bg-transparent rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
            selectedTab === "Purchase"
              ? "bg-slate-50 border-slate-50 text-slate-900"
              : ""
          }`}
          onClick={() => togglePricing("Purchase")}
        >
          Purchase
        </Button>
        <Button
          variant={!showPurchase ? "contained" : "outlined"}
          className={`ml-0.5 relative w-1/2  bg-transparent border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
            selectedTab === "Refinance"
              ? "bg-slate-50 border-slate-50 text-slate-900 "
              : ""
          }`}
          onClick={() => togglePricing("Refinance")}
        >
          Refinance
        </Button>
      </div>

      {showPurchase ? (
        <PurchaseSection
          cards={cardData.find((tab) => tab.tab === "Purchase")?.cards}
        />
      ) : (
        <RefinanceSection
          cards={cardData.find((tab) => tab.tab === "Refinance")?.cards}
        />
      )}
    </div>
  );
};

export default PricingCards;
