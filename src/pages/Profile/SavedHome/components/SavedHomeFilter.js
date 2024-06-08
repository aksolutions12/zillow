import React, { useState } from "react";
import { FiEyeOff, FiTrash2 } from "react-icons/fi"; // Import React icons
import { IoIosOptions } from "react-icons/io"; // Import React icons
import SavedCardList from "./SavedCardList";

export default function SavedHomeFilter() {
  const [selectedOption, setSelectedOption] = useState("Date added");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-white">
      <div className="p-4 bg-white dark:bg-zinc-800">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Saved homes
          </h1>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-purple-600 dark:text-purple-400">
              <FiEyeOff className="w-5 h-5 mr-1" /> {/* Use FiEyeOff icon */}
              Hidden homes
            </button>
            <button className="flex items-center text-blue-600 dark:text-blue-400">
              <FiTrash2 className="w-5 h-5 mr-1" /> {/* Use FiTrash2 icon */}
              Remove
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-700 p-4 rounded-lg shadow">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Saved homes
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                3 for sale
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <select className="bg-zinc-100 dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 p-2 rounded-lg border border-zinc-300 dark:border-zinc-600 mb-2 sm:mb-0 text-sm">
                <option>Showing all</option>
              </select>
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="bg-zinc-100 dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 p-2 rounded-lg border border-zinc-300 dark:border-zinc-600 mb-2 sm:mb-0 text-sm"
              >
                <option>Date added</option>
                <option>Status</option>
                <option>Price</option>
                <option>Bedrooms</option>
                <option>Bathrooms</option>
                <option>Home size (sq. ft.)</option>
                <option>Lot size (sq. ft.)</option>
                <option>Zestimate</option>
              </select>
              <button className="flex items-center bg-zinc-100 dark:bg-zinc-600 text-zinc-900 dark:text-zinc-100 p-2 px-3 rounded-lg border border-zinc-300 dark:border-zinc-600 text-sm">
                <IoIosOptions size={20} /> {/* Use IoIosOptions icon */}
              </button>
            </div>
          </div>
        </div>
      </div>
      <SavedCardList />
    </div>
  );
}
