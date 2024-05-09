// AboutRecommendations.js
import React, { useState } from "react";
import RentData from "../../data/RentData";
import Dropdown from "../../components/DropDown/Dropdown";

const dropdownData = [
  { mainName: "Real Estate", options: RentData.map((data) => data.name) },
  { mainName: "Rentals", options: RentData.map((data) => data.name) },
  { mainName: "Mortgage Rates", options: RentData.map((data) => data.name) },
  { mainName: "Browse Home", options: RentData.map((data) => data.name) },
];

const AboutRecommendations = () => {
  const [dropdownHeight, setDropdownHeight] = useState(0);
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 text-center">
      <div className="mb-8">
        <h2 className="text-sm md:text-sm lg:text-base font-bold mb-4">
          About Zillow's Recommendations
        </h2>
        <p className="text-sm md:text-sm lg:text-sm font-normal">
          Recommendations are based on your location and search activity, such
          as the homes you've viewed and saved and the filters you've used. We
          use this information to bring similar homes to your attention, so you
          don't miss out.
        </p>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dropdownData.map((data, index) => (
          <div key={index} className="relative">
            <Dropdown mainName={data.mainName} options={data.options} />
          </div>
        ))}
      </div>
      <div style={{ marginBottom: dropdownHeight }} />{" "}
      {/* Adjusts spacing based on dropdown height */}
    </div>
  );
};

export default AboutRecommendations;
