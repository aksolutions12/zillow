import React from "react";

const ListingDetails = () => {
  return (
    <div className="lg:px-16 sm:px-5 mx-auto p-6 bg-white dark:bg-zinc-800">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          How much is the monthly rent?
        </h2>
        <label
          htmlFor="monthly-rent"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
        >
          Monthly rent <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-300">
          <span className="text-zinc-500 dark:text-zinc-400">$</span>
          <input
            type="text"
            id="monthly-rent"
            className="flex-1 border-none focus:ring-0 focus:outline-none bg-transparent mx-2"
            placeholder="0.00"
          />
          <span className="text-zinc-500 dark:text-zinc-400">/month</span>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">
          How much is the security deposit?
        </h2>
        <label
          htmlFor="monthly-rent"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
        >
          Security deposit <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-300">
          <span className="text-zinc-500 dark:text-zinc-400">$</span>
          <input
            type="text"
            id="security-deposit"
            className="flex-1 border-none focus:ring-0 focus:outline-none bg-transparent mx-2"
            placeholder="0.00"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
