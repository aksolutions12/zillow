import React, { useState } from "react";
export default function HomeTypeDrop({ activeButton, handleToggle }) {
  const [selectAll, setSelectAll] = useState(true); // State to track select all status

  // Function to handle select all/deselect all click
  const handleSelectAll = () => {
    setSelectAll(!selectAll); // Toggle select all status
  };
  return (
    <div
      className={`absolute z-10 ${
        activeButton === "Home Type" ? "block" : "hidden"
      } `}
      style={{
        top: "calc(100% + 10px)",
        left: "calc(60% - 70px)", // Adjust left position to align with the button
      }}
    >
      <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md w-64">
        <div className="mb-4">
          <h2 className="text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
            Home Type
          </h2>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="deselect-all"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked // Invert checked status based on selectAll
              onChange={handleSelectAll}
            />
            <label
              htmlFor="deselect-all"
              className="ml-2 text-blue-600 dark:text-blue-400 cursor-pointer"
            >
              {selectAll ? "Select All" : "Deselect All"}
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="houses"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={!selectAll}
            />
            <label
              htmlFor="houses"
              className="ml-2 text-zinc-700 dark:text-zinc-300 cursor-pointer"
            >
              Houses
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="apartments"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={!selectAll}
            />
            <label
              htmlFor="apartments"
              className="ml-2 text-zinc-700 dark:text-zinc-300 cursor-pointer"
            >
              Apartments/Condos/Co-ops
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="townhomes"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={!selectAll}
            />
            <label
              htmlFor="townhomes"
              className="ml-2 text-zinc-700 dark:text-zinc-300 cursor-pointer"
            >
              Townhomes
            </label>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
            Space
          </h2>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="entire-place"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={!selectAll}
            />
            <label
              htmlFor="entire-place"
              className="ml-2 text-zinc-700 dark:text-zinc-300 cursor-pointer"
            >
              Entire place
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="private-room"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label
              htmlFor="private-room"
              className="ml-2 text-zinc-700 dark:text-zinc-300 cursor-pointer"
            >
              Room
            </label>
          </div>
        </div>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full">
          Apply
        </button>
      </div>
    </div>
  );
}
