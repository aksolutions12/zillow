import { useState } from "react";
import { FiSearch, FiChevronUp, FiChevronDown } from "react-icons/fi";
import ForSaleDrop from "../../../components/SearchHome/ForSaleDrop";
import PriceDrop from "../../../components/SearchHome/PriceDrop";
import HomeTypeDrop from "../../../components/SearchHome/HomeTypeDrop";
import BedsDrop from "../../../components/SearchHome/BedsDrop";
import MoreDrop from "../../../components/SearchHome/MoreDrop";

export default function HomeSearch() {
  const [activeButton, setActiveButton] = useState(null);

  const handleToggle = (buttonName) => {
    setActiveButton(activeButton === buttonName ? null : buttonName);
  };

  const buttonClasses = (buttonName) =>
    `flex items-center border border-zinc-300 dark:border-zinc-700 rounded-lg  p-2 ${
      activeButton === buttonName
        ? "border-blue-500 bg-blue-50 font-bold text-black"
        : "border-zinc-300 dark:border-zinc-700 bg-white  text-gray-600"
    }`;

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center space-x-2 p-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg gap-3">
        <div
          className="flex items-center border border-zinc-300 dark:border-zinc-700 rounded-lg p-2"
          style={{ minWidth: "300px" }}
        >
          <input
            type="text"
            placeholder="City, Neighborhood, ZIP, Address"
            className="outline-none bg-transparent flex-grow"
          />
          <FiSearch className="ml-2 text-gray-400" />
        </div>
        <button
          className={buttonClasses("For Sale")}
          onClick={() => handleToggle("For Sale")}
        >
          For Sale
          {activeButton === "For Sale" ? (
            <FiChevronUp className="ml-2" />
          ) : (
            <FiChevronDown className="ml-2" />
          )}
        </button>
        {activeButton === "For Sale" && (
          <ForSaleDrop
            activeButton={activeButton}
            handleToggle={handleToggle}
          />
        )}
        <button
          className={buttonClasses("Price")}
          onClick={() => handleToggle("Price")}
        >
          Price
          {activeButton === "Price" ? (
            <FiChevronUp className="ml-2" />
          ) : (
            <FiChevronDown className="ml-2" />
          )}
        </button>
        {activeButton === "Price" && (
          <PriceDrop activeButton={activeButton} handleToggle={handleToggle} />
        )}
        <button
          className={`hidden md:flex ${buttonClasses("Beds & Baths")}`}
          onClick={() => handleToggle("Beds & Baths")}
        >
          Beds & Baths
          {activeButton === "Beds & Baths" ? (
            <FiChevronUp className="ml-2" />
          ) : (
            <FiChevronDown className="ml-2" />
          )}
        </button>
        {activeButton === "Beds & Baths" && (
          <BedsDrop activeButton={activeButton} handleToggle={handleToggle} />
        )}
        <button
          className={`hidden md:flex ${buttonClasses("Home Type")}`}
          onClick={() => handleToggle("Home Type")}
        >
          Home Type
          {activeButton === "Home Type" ? (
            <FiChevronUp className="ml-2" />
          ) : (
            <FiChevronDown className="ml-2" />
          )}
        </button>
        {activeButton === "Home Type" && (
          <HomeTypeDrop
            activeButton={activeButton}
            handleToggle={handleToggle}
          />
        )}
        <button
          className={buttonClasses("More")}
          onClick={() => handleToggle("More")}
        >
          More
          {activeButton === "More" ? (
            <FiChevronUp className="ml-2" />
          ) : (
            <FiChevronDown className="ml-2" />
          )}
        </button>
        {activeButton === "More" && (
          <MoreDrop activeButton={activeButton} handleToggle={handleToggle} />
        )}
        <button className="bg-blue-500 text-white rounded-lg p-2">
          Save search
        </button>
      </div>
    </div>
  );
}
