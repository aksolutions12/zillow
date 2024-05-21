import React from "react";
import { FaChevronRight } from "react-icons/fa";

const PhotographerListDesign = ({ photographers }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 p-4">
      {photographers.map((photographer, index) => (
        <div
          key={index}
          className={`flex items-center justify-between py-4 ${
            index < photographers.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src={photographer.image}
              alt="Business Logo"
            />
            <div className="ml-4">
              <h2 className="text-blue-700 dark:text-blue-300 font-bold">
                {photographer.name}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {photographer.phone}
              </p>
              <p className="text-zinc-500 dark:text-zinc-300">
                {photographer.description}
              </p>
            </div>
          </div>
          <div>
            <FaChevronRight className="w-6 h-6 text-blue-700 dark:text-blue-300" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotographerListDesign;
