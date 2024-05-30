import React from "react";
import { FaMobileButton } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function HowWork() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
        How It Works
      </h2>
      <hr className="my-4 border-zinc-300 dark:border-zinc-700" />
      <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <IoPerson size={30} className="text-blue-700" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-zinc-900 dark:text-zinc-100">
              Connect With Potential Borrowers
            </h3>
            <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
              Fill your pipeline with consumers who have requested a call from a
              lender.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0">
            <FaMobileButton size={30} className="text-blue-700" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-zinc-900 dark:text-zinc-100">
              Get Contacts Instantly
            </h3>
            <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
              You receive contacts based on your location and market
              availability.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0">
            <FaArrowTrendUp size={30} className="text-blue-700" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-zinc-900 dark:text-zinc-100">
              We're Here To Help
            </h3>
            <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
              Our team is always here to help you improve conversions and grow
              your purchase pipeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
