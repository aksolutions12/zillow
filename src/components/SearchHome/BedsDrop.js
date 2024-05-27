import React, { useState } from "react";

export default function BedsDrop({ activeButton, handleToggle }) {
  const [selectedBedrooms, setSelectedBedrooms] = useState("Any");
  const [selectedBathrooms, setSelectedBathrooms] = useState("Any");

  // Function to handle bedroom selection
  const handleBedroomSelect = (value) => {
    setSelectedBedrooms(value);
  };

  // Function to handle bathroom selection
  const handleBathroomSelect = (value) => {
    setSelectedBathrooms(value);
  };

  return (
    <div
      className={`absolute z-10 ${
        activeButton === "Beds & Baths" ? "block" : "hidden"
      } `}
      style={{
        top: "calc(100% + 10px)",
        left: "calc(40% - 70px)", // Adjust left position to align with the button
      }}
    >
      <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <h2 className="text-zinc-700 font-semibold mb-2">
            Number of Bedrooms
          </h2>
          <div>
            <p className="text-zinc-800 font-medium mb-2">Bedrooms</p>
            <div className="flex space-x-2 mb-4">
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBedrooms === "Any" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBedroomSelect("Any")}
              >
                Any
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBedrooms === "1+" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBedroomSelect("1+")}
              >
                1+
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBedrooms === "2+" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBedroomSelect("2+")}
              >
                2+
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBedrooms === "3+" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBedroomSelect("3+")}
              >
                3+
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBedrooms === "4+" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBedroomSelect("4+")}
              >
                4+
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBedrooms === "5+" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBedroomSelect("5+")}
              >
                5+
              </button>
            </div>
            <div className="flex items-center mb-4">
              <input id="exact-match" type="checkbox" className="mr-2" />
              <label htmlFor="exact-match" className="text-zinc-700">
                Use exact match
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-zinc-700 font-semibold mb-2">
            Number of Bathrooms
          </h2>
          <div>
            <p className="text-zinc-800 font-medium mb-2">Bathrooms</p>
            <div className="flex space-x-2 mb-4">
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBathrooms === "Any" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBathroomSelect("Any")}
              >
                Any
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBathrooms === "1+" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBathroomSelect("1+")}
              >
                1+
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBathrooms === "1.5+" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBathroomSelect("1.5+")}
              >
                1.5+
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBathrooms === "2+" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBathroomSelect("2+")}
              >
                2+
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBathrooms === "3+" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBathroomSelect("3+")}
              >
                3+
              </button>
              <button
                className={`px-4 py-2 border rounded-md ${
                  selectedBathrooms === "4+" ? "bg-blue-100" : ""
                }`}
                onClick={() => handleBathroomSelect("4+")}
              >
                4+
              </button>
            </div>
          </div>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-md">
          Apply
        </button>
      </div>
    </div>
  );
}
