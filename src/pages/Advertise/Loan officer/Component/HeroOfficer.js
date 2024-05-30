import React from "react";
import porch from "../../../../assets/images/off.jpg";
import { IoCall } from "react-icons/io5";
const HeroOfficer = () => {
  return (
    <div
      className="flex flex-col md:flex-row bg-cover bg-center px-10 py-32 "
      style={{ backgroundImage: `url(${porch})` }}
    >
      <div className="flex-1 flex flex-col justify-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Grow Your Purchase Pipeline
        </h1>
        <p className="text-lg text-white mt-4">
          Join thousands of loan officers who connect with potential borrowers
          on Zillow and Trulia.
        </p>
      </div>
      <div className="max-w-sm mx-auto bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          Space Is Limited
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          Call to find out if your market is still available
        </p>
        <div className="flex items-center mt-4">
          <IoCall size={25} color="blue" className="mr-1" />
          <span className="text-2xl font-bold text-zinc-900 dark:text-white">
            (877) 661-3172
          </span>
        </div>
        <a href="#" className="text-blue-600 dark:text-blue-400 mt-4 block">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default HeroOfficer;
