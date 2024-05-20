import React from "react";

const marketData = [
  {
    market: "Birmingham, AL",
    shareOfIncome: "12.4%",
    homeValueIndex: "$186,523",
  },
  {
    market: "Oklahoma City, OK",
    shareOfIncome: "12.6%",
    homeValueIndex: "$168,880",
  },
  {
    market: "Indianapolis, IN",
    shareOfIncome: "12.7%",
    homeValueIndex: "$202,370",
  },
  {
    market: "Louisville-Jefferson County, KY",
    shareOfIncome: "12.9%",
    homeValueIndex: "$196,330",
  },
  {
    market: "Memphis, TN",
    shareOfIncome: "13.0%",
    homeValueIndex: "$171,488",
  },
  {
    market: "Cincinnati, OH",
    shareOfIncome: "13.2%",
    homeValueIndex: "$205,977",
  },
  {
    market: "Pittsburgh, PA",
    shareOfIncome: "13.2%",
    homeValueIndex: "$175,887",
  },
  {
    market: "St. Louis, MO",
    shareOfIncome: "13.5%",
    homeValueIndex: "$205,977",
  },
];

export default function MarketAffordable() {
  return (
    <div className="w-full bg-white mx-auto px-4 sm:px-6 lg:px-8 py-6 drop-shadow-xl  rounded-md mb-8">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
        Most affordable markets for homebuyers
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-300">
        According to 2020 undefined from Zillow Research, record low mortgage
        rates have helped to boost affordability for potential homeowners. The
        table below shows the top 10 most affordable markets to live in (among
        the nation's 50 largest) for December 2020 and is based on a typical
        home value of no more than $300,000 (the typical U.S. home value is
        about $270,000). The market and share of income spent on a mortgage may
        fluctuate based on the current mortgage rate, the typical local
        homeowner's income and the typical local home value.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="border-b-2 text-sm border-zinc-200 dark:border-zinc-700">
            <tr>
              <th className="text-left p-4 text-zinc-900 dark:text-white">
                Market
              </th>
              <th className="text-left p-4 text-zinc-900 dark:text-white">
                Share of Income Spent on Mortgage
              </th>
              <th className="text-left p-4 text-zinc-900 dark:text-white">
                Zillow Home Value Index (December 2020)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm divide-zinc-200 dark:divide-zinc-700">
            {marketData.map((item, index) => (
              <tr key={index}>
                <td className="p-4 text-blue-700 underline dark:text-zinc-300">
                  {item.market}
                </td>
                <td className="p-4 text-zinc-700 dark:text-zinc-300">
                  {item.shareOfIncome}
                </td>
                <td className="p-4 text-zinc-700 dark:text-zinc-300">
                  {item.homeValueIndex}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
