import React from "react";

export default function ForSaleDrop({ activeButton, handleToggle }) {
  return (
    <div
      className={`absolute z-10 ${
        activeButton === "For Sale" ? "block" : "hidden"
      } `}
      style={{
        top: "calc(100% + 10px)",
        left: "calc(30% - 70px)", // Adjust left position to align with the button
      }}
    >
      <div className="p-4 px-8 bg-white  rounded-lg">
        <div className="flex items-center mb-4">
          <input
            id="for-sale"
            type="radio"
            name="status"
            className="w-4 h-4 text-blue-600 border-zinc-300 focus:ring-blue-500"
            defaultChecked
          />
          <label
            htmlFor="for-sale"
            className="ml-2 text-lg font-medium text-zinc-900"
          >
            For Sale
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="for-rent"
            type="radio"
            name="status"
            className="w-4 h-4 text-blue-600 border-zinc-300 focus:ring-blue-500"
          />
          <label
            htmlFor="for-rent"
            className="ml-2 text-lg font-medium text-zinc-900"
          >
            For Rent
          </label>
        </div>
        <div className="flex items-center mb-6">
          <input
            id="sold"
            type="radio"
            name="status"
            className="w-4 h-4 text-blue-600 border-zinc-300 focus:ring-blue-500"
          />
          <label
            htmlFor="sold"
            className="ml-2 text-lg font-medium text-zinc-900"
          >
            Sold
          </label>
        </div>
        <button className="w-full bg-blue-600 text-white text-lg font-medium py-2 rounded">
          Apply
        </button>
      </div>
    </div>
  );
}
