import React from "react";
import { MdDone } from "react-icons/md"; // Import done icon from React Icons

const BenefitsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-5 mb-10 bg-white shadow-xl  rounded-md ">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
        Benefits of down payment assistance programs
      </h1>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
        It’s possible to qualify for a home loan with no money down or with a
        down payment amount as low as 3%. Using a program to get down payment
        assistance can provide additional benefits:
      </p>
      <ul className="mt-6 space-y-4 sm:grid sm:grid-cols-2 gap-3 lg:flex lg:flex-wrap lg:grid lg:grid-cols-2 gap-4">
        {" "}
        {/* Apply lg:grid for two columns on large screens */}
        <li className="flex items-center">
          <MdDone className="h-6 w-6 text-green-500 mr-2" />
          <span className="text-base text-zinc-800 dark:text-zinc-200">
            Lower your mortgage payments
          </span>
        </li>
        <li className="flex items-center">
          <MdDone className="h-6 w-6 text-green-500 mr-2" />
          <span className="text-base text-zinc-800 dark:text-zinc-200">
            Increase your home budget
          </span>
        </li>
        <li className="flex items-center">
          <MdDone className="h-6 w-6 text-green-500 mr-2" />
          <span className="text-base text-zinc-800 dark:text-zinc-200">
            Build home equity faster
          </span>
        </li>
        <li className="flex items-center">
          <MdDone className="h-6 w-6 text-green-500 mr-2" />
          <span className="text-base text-zinc-800 dark:text-zinc-200">
            Purchase a home sooner
          </span>
        </li>
      </ul>
    </div>
  );
};

export default BenefitsSection;
