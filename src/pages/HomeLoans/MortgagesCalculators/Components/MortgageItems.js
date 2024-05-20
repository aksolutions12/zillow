import React from "react";

const sections = [
  {
    title: "Mortgage Tools",
    items: [
      "Get Pre-Approved",
      "Get Pre-Qualified",
      "30-Year Mortgage Rates",
      "20-Year Mortgage Rates",
      "15-Year Mortgage Rates",
      "10-Year Mortgage Rates",
      "7-year ARM Rates",
      "5-year ARM Rates",
      "3-year ARM Rates",
      "Mortgage Rates",
      "Refinance Rates",
      "VA Mortgage Rates",
      "VA Refinance Rates",
      "FHA Mortgage Rates",
      "Jumbo Mortgage Rates",
    ],
  },
  {
    title: "Mortgage Topics",
    items: [
      "First-Time Home Buyers",
      "FHA Loans",
      "ARM Loans",
      "VA Home Loans",
      "Homeowners Insurance",
      "Closing Costs",
      "Down Payments",
      "Getting a HELOC",
    ],
  },
  {
    title: "Mortgage Calculators",
    items: [
      "Mortgage Calculators",
      "VA Mortgage Calculator",
      "Refinance Calculator",
      "Affordability Calculator",
      "Debt-to-Income Calculator",
      "Amortization Calculator",
    ],
  },
  {
    title: "Mortgage Learning Center",
    items: [
      "What to Know Before You Buy",
      "How Much Home Can You Afford?",
      "Which Mortgage is Right for You?",
      "How to Get a Mortgage",
      "Purchasing Your New Home",
      "VA Loan Resource Center",
      "Paying Your Mortgage",
      "Refinancing Your Mortgage",
    ],
  },
];

export default function MortgageItems() {
  return (
    <div className="container bg-white py-10 mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg mb-4">{section.title}</h2>
            <ul className="text-sm underline text-blue-500">
              {section.items.map((item, i) => (
                <li key={i} className="mb-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
