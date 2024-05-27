import React, { useState } from "react";
import { CgCalendarDates } from "react-icons/cg";

export default function MoreDrop({ activeButton, handleToggle }) {
  const [moveInDate, setMoveInDate] = useState("2024-06-06");
  const [squareFeetMin, setSquareFeetMin] = useState("No Min");
  const [squareFeetMax, setSquareFeetMax] = useState("No Max");
  const [lotSizeMin, setLotSizeMin] = useState("No Min");
  const [lotSizeMax, setLotSizeMax] = useState("No Max");
  const [yearBuiltMin, setYearBuiltMin] = useState("");
  const [yearBuiltMax, setYearBuiltMax] = useState("");
  const [hasBasement, setHasBasement] = useState(false);
  const [singleStoryOnly, setSingleStoryOnly] = useState(false);
  const [mustHave3DTour, setMustHave3DTour] = useState(false);
  const [viewCity, setViewCity] = useState(false);
  const [viewMountain, setViewMountain] = useState(false);
  const [viewPark, setViewPark] = useState(false);
  const [viewWater, setViewWater] = useState(false);
  const [daysOnZillow, setDaysOnZillow] = useState("Any");
  const [keywords, setKeywords] = useState("");

  const handleDateChange = (e) => {
    setMoveInDate(e.target.value);
  };

  const handleSquareFeetMinChange = (e) => {
    setSquareFeetMin(e.target.value);
  };

  const handleSquareFeetMaxChange = (e) => {
    setSquareFeetMax(e.target.value);
  };

  const handleLotSizeMinChange = (e) => {
    setLotSizeMin(e.target.value);
  };

  const handleLotSizeMaxChange = (e) => {
    setLotSizeMax(e.target.value);
  };

  const handleYearBuiltMinChange = (e) => {
    setYearBuiltMin(e.target.value);
  };

  const handleYearBuiltMaxChange = (e) => {
    setYearBuiltMax(e.target.value);
  };

  const handleReset = () => {
    setMoveInDate("2024-06-06");
    setSquareFeetMin("No Min");
    setSquareFeetMax("No Max");
    setLotSizeMin("No Min");
    setLotSizeMax("No Max");
    setYearBuiltMin("");
    setYearBuiltMax("");
    setHasBasement(false);
    setSingleStoryOnly(false);
    setMustHave3DTour(false);
    setViewCity(false);
    setViewMountain(false);
    setViewPark(false);
    setViewWater(false);
    setDaysOnZillow("Any");
    setKeywords("");
  };

  const handleApply = () => {
    // Logic for applying filters
  };

  return (
    <div
      className={`absolute z-10 ${
        activeButton === "More" ? "block" : "hidden"
      } `}
      style={{
        top: "calc(100% + 10px)",
        left: "calc(50% - 70px)", // Adjust left position to align with the button
      }}
    >
      <div className="p-4 bg-white rounded-lg dark:bg-zinc-800 h-96 overflow-auto">
        <button className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
          MORE FILTERS
        </button>
        <div className="mb-4">
          <label
            htmlFor="move-in-date"
            className="block text-zinc-700 dark:text-zinc-300 font-semibold mb-2"
          >
            Move-In Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="move-in-date"
              className="w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
              value={moveInDate}
              onChange={handleDateChange}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <CgCalendarDates />
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
            Square Feet
          </label>
          <div className="flex space-x-2">
            <select
              className="w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
              value={squareFeetMin}
              onChange={handleSquareFeetMinChange}
            >
              <option>No Min</option>
              <option>1000</option>
              <option>2000</option>
              <option>3000</option>
            </select>
            <span className="text-zinc-700 dark:text-zinc-300">-</span>
            <select
              className="w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
              value={squareFeetMax}
              onChange={handleSquareFeetMaxChange}
            >
              <option>No Max</option>
              <option>10000</option>
              <option>20000</option>
              <option>30000</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
            Lot Size
          </label>
          <div className="flex space-x-2">
            <select
              className="w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
              value={lotSizeMin}
              onChange={handleLotSizeMinChange}
            >
              <option>No Min</option>
              <option>1000</option>
              <option>2000</option>
              <option>3000</option>
            </select>
            <span className="text-zinc-700 dark:text-zinc-300">-</span>
            <select
              className="w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
              value={lotSizeMax}
              onChange={handleLotSizeMaxChange}
            >
              <option>No Max</option>
              <option>10000</option>
              <option>20000</option>
              <option>30000</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 dark:text-zinc-300 font-semibold mb-2">
            Year Built
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="No Min"
              className="border border-zinc-300 dark:border-zinc-600 rounded-md p-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={yearBuiltMin}
              onChange={handleYearBuiltMinChange}
            />
            <span className="text-zinc-500 dark:text-zinc-400">-</span>
            <input
              type="text"
              placeholder="No Max"
              className="border border-zinc-300 dark:border-zinc-600 rounded-md p-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={yearBuiltMax}
              onChange={handleYearBuiltMaxChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 dark:text-zinc-300 font-bold mb-2">
            Basement
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="basement"
              className="mr-2"
              checked={hasBasement}
              onChange={(e) => setHasBasement(e.target.checked)}
            />
            <label
              htmlFor="basement"
              className="text-zinc-700 dark:text-zinc-300"
            >
              Has basement
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 dark:text-zinc-300 font-bold mb-2">
            Number Of Stories
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="single-story"
              className="mr-2"
              checked={singleStoryOnly}
              onChange={(e) => setSingleStoryOnly(e.target.checked)}
            />
            <label
              htmlFor="single-story"
              className="text-zinc-700 dark:text-zinc-300"
            >
              Single-story only
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 dark:text-zinc-300 font-bold mb-2">
            Tours
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="3d-tour"
              className="mr-2"
              checked={mustHave3DTour}
              onChange={(e) => setMustHave3DTour(e.target.checked)}
            />
            <label
              htmlFor="3d-tour"
              className="text-zinc-700 dark:text-zinc-300"
            >
              Must have 3D Tour
            </label>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-2">View</h2>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="city"
              className="mr-2"
              checked={viewCity}
              onChange={(e) => setViewCity(e.target.checked)}
            />
            <label htmlFor="city">City</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="mountain"
              className="mr-2"
              checked={viewMountain}
              onChange={(e) => setViewMountain(e.target.checked)}
            />
            <label htmlFor="mountain">Mountain</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="park"
              className="mr-2"
              checked={viewPark}
              onChange={(e) => setViewPark(e.target.checked)}
            />
            <label htmlFor="park">Park</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="water"
              className="mr-2"
              checked={viewWater}
              onChange={(e) => setViewWater(e.target.checked)}
            />
            <label htmlFor="water">Water</label>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold mb-2">Days On Zillow</h2>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-zinc-300 text-zinc-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-zinc-500"
              value={daysOnZillow}
              onChange={(e) => setDaysOnZillow(e.target.value)}
            >
              <option>Any</option>
              <option>1 Day</option>
              <option>7 Days</option>
              <option>30 Days</option>
              <option>90 Days</option>
              <option>6 Months</option>
              <option>1 Year</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Keywords</h2>
          <input
            type="text"
            placeholder="Short term, furnished, etc."
            className="w-full px-3 py-2 border border-zinc-300 rounded focus:outline-none focus:border-zinc-500"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md mr-2"
            onClick={handleReset}
          >
            Reset All
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
