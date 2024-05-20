import React from "react";
import { MdDone } from "react-icons/md";
import selltradimg from "../../../../assets/images/selltradion.png";
import { theme } from "../../../../styles/theme/theme";

export default function Selltraditionally() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 px-10 bg-white dark:bg-zinc-800 gap-5">
      <div className="md:w-1/3 md:order-2">
        <img
          src={selltradimg}
          alt="Real Estate Interaction Illustration"
          className="max-w-full h-auto"
        />
      </div>
      <div className="md:w-4/6 md:order-1 space-y-6">
        <h1
          className="text-5xl font-bold t mb-4"
          style={{ fontFamily: theme.typography.fontFamily2 }}
        >
          Sell traditionally with an agent
        </h1>
        <p className="text-base text-zinc-700 dark:text-zinc-300">
          Not in a market with Zillow's new selling experience? Work with a real
          estate agent for selling support at every step, including prepping,
          listing and marketing your home.
        </p>
        <div className="flex flex-col">
          <button className="bg-blue-500 w-full lg:w-1/3 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
            Find an agent
          </button>
          <p className="mt-2">
            {" "}
            <a
              href="#"
              className=" text-sm
               font-bold text-blue-900 hover:underline dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              Learn how to choose an agent
            </a>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/2 ">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Why sell traditionally
            </h2>
            <ul className="list-none pt-2 text-base  space-y-2 text-zinc-700 dark:text-zinc-300 ">
              <li>
                <MdDone className="inline mr-2 text-blue-500" size={25} />
                Potential for bidding wars
              </li>
              <li>
                <MdDone className="inline mr-2 text-blue-500" size={25} />
                Access to local market expertise
              </li>
              <li>
                <MdDone className="inline mr-2 text-blue-500" size={25} />
                Get help negotiating and reviewing offers
              </li>
              <li>
                <MdDone className="inline mr-2 text-blue-500" size={25} />
                Navigate a stressful process with a dedicated guide
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white ">
              How to sell traditionally
            </h2>
            <p className=" text-base text-zinc-700 dark:text-zinc-300">
              Learn more about the process of selling your house with a listing
              agent. If this is the best route for you, interview agents and
              select a professional who will meet your expectations. Your agent
              will then guide you through the steps of selling your home.
            </p>
          </div>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Agents listed in the directory under 'Find an agent' are not licensed
          with Zillow, Inc. or any of our affiliated entities.
        </p>
      </div>
    </div>
  );
}
