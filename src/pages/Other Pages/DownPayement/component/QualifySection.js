import React from "react";

const QualifySection = () => {
  return (
    <div className="bg-white mb-10 py-5 shadow-xl  rounded-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            How to qualify for down payment assistance
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
            Program availability varies by area, and several eligibility factors
            are considered:
          </p>
          <ul className="list-disc pl-5 mt-4 text-zinc-600 dark:text-zinc-300">
            <li>Household income</li>
            <li>Household size</li>
            <li>Employment</li>
            <li>Home ownership history</li>
          </ul>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 mt-4 inline-block"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default QualifySection;
