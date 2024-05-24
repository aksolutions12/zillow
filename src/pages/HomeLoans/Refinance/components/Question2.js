import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { PiBuildingApartment } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { PiBuildingsThin } from "react-icons/pi";

const Question2 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="text-center py-10 bg-white">
      <h2 className="text-2xl font-bold mb-4">
        What kind of home do you currently own?
      </h2>
      <p className="text-zinc-600 mb-8">
        It can make a difference in the type of loan you can get.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <div
          className="flex flex-col items-center"
          onClick={() => handleOptionSelect("Single family")}
        >
          <div
            className={`w-24 h-24 flex items-center justify-center border hover:bg-sky-100 border-blue-500 rounded-full mb-2 ${
              selectedOption === "Single family" ? "bg-sky-100" : ""
            }`}
          >
            <GoHome size={50} color="blue" />
          </div>
          <span className="text-blue-500">Single family</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-24 h-24 flex items-center justify-center border hover:bg-sky-100 border-blue-500 rounded-full mb-2 ${
              selectedOption === "Townhome" ? "bg-sky-100" : ""
            }`}
            onClick={() => handleOptionSelect("Townhome")}
          >
            <PiBuildingApartment size={50} color="blue" />
          </div>
          <span className="text-blue-500">Townhome</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-24 h-24 flex items-center justify-center hover:bg-sky-100 border border-blue-500 rounded-full mb-2 ${
              selectedOption === "Condominium" ? "bg-sky-100" : ""
            }`}
            onCli
            onClick={() => handleOptionSelect("Condominium")}
          >
            <BsBuildings size={50} color="blue" />
          </div>
          <span className="text-blue-500">Condominium</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            className={`w-24 h-24 flex items-center justify-center hover:bg-sky-100 border border-blue-500 rounded-full mb-2 ${
              selectedOption === "Mobile or manufactured" ? "bg-sky-100" : ""
            }`}
            onClick={() => handleOptionSelect("Mobile or manufactured")}
          >
            <PiBuildingsThin size={50} color="blue" />
          </div>
          <span className="text-blue-500">Mobile or manufactured</span>
        </div>
      </div>
    </div>
  );
};

export default Question2;
