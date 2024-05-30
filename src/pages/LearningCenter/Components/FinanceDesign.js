import React from "react";

const FinanceDesign = ({ headname, leftCardData, rightCardsData }) => {
  return (
    <div className="px-5 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
          {headname}
        </h2>
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          See all
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-4 bg-white">
        {/* Left side card */}
        <div className="w-full md:w-1/2 bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden">
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={leftCardData.imageUrl}
            alt="House"
          />
          <div className="p-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">
              {leftCardData.duration}
            </span>
            <h2 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">
              {leftCardData.title}
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {leftCardData.description}
            </p>
          </div>
        </div>

        {/* Right side cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {rightCardsData.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white dark:bg-zinc-800 rounded-lg shadow-xl overflow-hidden  flex flex-col md:flex-row"
            >
              <img
                className="w-full md:w-2/5 object-cover rounded-lg"
                src={item.imageUrl}
                alt="Article Image"
              />
              <div className="p-4 flex flex-col justify-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  {item.duration}
                </span>
                <h2 className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceDesign;
