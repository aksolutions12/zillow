import React, { useState } from "react";
import { FiEyeOff, FiTrash2 } from "react-icons/fi"; // Import React icons
import { IoIosOptions } from "react-icons/io"; // Import React icons
import SavedCardList from "./SavedCardList";
import { Link } from "react-router-dom";

export default function SavedHomeFilter() {
  const [selectedOption, setSelectedOption] = useState("Date added");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRemoveClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white">
      <div className="p-4 bg-white dark:bg-zinc-800">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Saved homes
          </h1>
          <div className="flex items-center space-x-4">
            <Link to="/hiddenhomes">
              <button className="flex items-center text-purple-600 dark:text-purple-400">
                <FiEyeOff className="w-5 h-5 mr-1" /> {/* Use FiEyeOff icon */}
                Hidden homes
              </button>
            </Link>
            <button
              className="flex items-center text-blue-600 dark:text-blue-400"
              onClick={handleRemoveClick}
            >
              <FiTrash2 className="w-5 h-5 mr-1" /> {/* Use FiTrash2 icon */}
              Remove
            </button>
          </div>
        </div>
        {isDropdownOpen && (
          <div className=" mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 mb-2">
            <div className="flex items-center mb-4">
              <input
                id="option1"
                type="radio"
                name="options"
                className="w-4 h-4 text-blue-600 bg-zinc-100 border-zinc-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600"
                checked
              />
              <label
                htmlFor="option1"
                className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
              >
                Off-market and Recently Sold
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="option2"
                type="radio"
                name="options"
                className="w-4 h-4 text-zinc-600 bg-zinc-100 border-zinc-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600"
              />
              <label
                htmlFor="option2"
                className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
              >
                Remove all
              </label>
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                Apply
              </button>
            </div>
          </div>
        )}
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
