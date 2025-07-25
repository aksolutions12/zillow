import React from "react";

export default function PriceDrop({
  activeButton,
  handleToggle,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onApplyPriceFilter,
}) {
  return (
    <div
      className={`absolute z-10 ${
        activeButton === "Price" ? "block" : "hidden"
      } left-1/2 transform -translate-x-1/4 md:left-auto md:transform-none`}
      style={{
        top: "calc(100% + 10px)",
        left: "calc(40% - 70px)", // Adjust left position to align with the button on larger screens
      }}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto">
        <div className="border-b pb-2 mb-4">
          <h2 className="text-zinc-700 font-semibold">Price Range</h2>
        </div>
        <div className="flex justify-between items-center mb-4 gap-3">
          <div className="flex flex-col items-center">
            <label className="text-zinc-700 font-medium mb-1">Minimum</label>
            <div className="relative">
              <select
                value={minPrice}
                onChange={onMinPriceChange}
                className="appearance-none border border-zinc-300 rounded-lg py-2 px-4 text-zinc-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-32"
              >
                <option>No Min</option>
                <option>$5000</option>
                <option>$10,000</option>
                <option>$50,000</option>
                <option>$100,000</option>
                <option>$200,000</option>
                <option>$300,000</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <label className="text-zinc-700 font-medium mb-1">Maximum</label>
            <div className="relative">
              <select
                value={maxPrice}
                onChange={onMaxPriceChange}
                className="appearance-none border border-zinc-300 rounded-lg py-2 px-4 text-zinc-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-32"
              >
                <option>No Max</option>
                <option>$500,000</option>
                <option>$1,000,000</option>
                <option>$2,000,000</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onApplyPriceFilter}
          className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
