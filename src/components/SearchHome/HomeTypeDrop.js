import React, { useState } from "react";

export default function HomeTypeDrop({
  activeButton,
  handleToggle,
  onApplyFilters,
}) {
  const [selectedTypes, setSelectedTypes] = useState({
    houses: false,
    apartments: false,
    townhomes: false,
  });

  const handleSelectAll = () => {
    const newSelectAll = !Object.values(selectedTypes).every((value) => value);
    setSelectedTypes({
      houses: newSelectAll,
      apartments: newSelectAll,
      townhomes: newSelectAll,
    });
  };

  const handleCheckboxChange = (type) => {
    setSelectedTypes((prevTypes) => ({
      ...prevTypes,
      [type]: !prevTypes[type],
    }));
  };

  const selectAll = Object.values(selectedTypes).every((value) => value);

  const handleApply = () => {
    onApplyFilters(selectedTypes);
  };

  return (
    <div
      className={`absolute z-10 ${
        activeButton === "Home Type" ? "block" : "hidden"
      } left-1/2 transform -translate-x-1/4 md:left-auto md:transform-none `}
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
              id="select-all"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <label
              htmlFor="select-all"
              className="ml-2 text-blue-600 dark:text-blue-400 cursor-pointer"
            >
              {selectAll ? "Deselect All" : "Select All"}
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="houses"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={selectedTypes.houses}
              onChange={() => handleCheckboxChange("houses")}
            />
            <label
              htmlFor="houses"
              className="ml-2 text-zinc-700 dark:text-zinc-300 cursor-pointer"
            >
              House
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="apartments"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={selectedTypes.apartments}
              onChange={() => handleCheckboxChange("apartments")}
            />
            <label
              htmlFor="apartments"
              className="ml-2 text-zinc-700 dark:text-zinc-300 cursor-pointer"
            >
              Condo/Apartment
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="townhomes"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={selectedTypes.townhomes}
              onChange={() => handleCheckboxChange("townhomes")}
            />
            <label
              htmlFor="townhomes"
              className="ml-2 text-zinc-700 dark:text-zinc-300 cursor-pointer"
            >
              Town House
            </label>
          </div>
        </div>

        <button
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
