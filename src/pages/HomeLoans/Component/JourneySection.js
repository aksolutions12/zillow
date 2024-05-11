import React from "react";
import { FaPhoneAlt, FaQuestion } from "react-icons/fa";

const JourneySection = () => {
  return (
    <div className="relative flex flex-col bg-blue-950 lg:flex-row justify-between items-center px-8 py-28">
      {/* First Div */}
      <div className="lg:w-1/2 mb-5 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-white">
          Your homeownership journey starts here.
        </h2>
        <p className="text-base lg:text-base mb-3 text-white ">
          Understand what you qualify for and shop with confidence by getting
          pre-qualified.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Get Pre-Qualified
        </button>
      </div>
      {/* Second Div */}
      <div className="lg:w-1/2 flex flex-col">
        <h2 className="font-bold text-white ">Have more questions?</h2>
        <div className="flex flex-col mt-2">
          <div className=" flex flex-row">
            <FaPhoneAlt size={20} className=" text-white " />
            <p className="text-white pl-2">Call us at (855) 917-2501</p>
          </div>
          <div className="flex flex-row ">
            <FaQuestion size={20} className=" text-white " />
            <p className="text-white pl-2">
              See our Frequently Asked Questions
            </p>
          </div>
        </div>
      </div>
      {/* Text on bottom right corner */}
      <div className="absolute bottom-0 right-0 italic text-white text-xs p-4">
        *Based on consumer performance across all individuals who completed the
        pre-qualification process. Current as of: 3/20/2024
      </div>
    </div>
  );
};

export default JourneySection;
