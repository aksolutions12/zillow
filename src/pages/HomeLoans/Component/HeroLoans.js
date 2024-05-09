import React from "react";
import porch from "../../../assets/images/womenonporch.jpg";
import { theme } from "../../../styles/theme/theme";
import { MdDone } from "react-icons/md";

const HeroLoans = ({ title, subtitle, buttonText }) => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-24 px-4"
      style={{ backgroundImage: `url(${porch})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full pl-8">
        <div className="lg:w-1/2">
          {" "}
          {/* Set width to capture 33% of the container */}
          <h1
            className="text-4xl lg:text-5xl font-bold mb-3"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
            }}
          >
            {title}
          </h1>
          <p
            className="text-base lg:text-base mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} // Add text shadow
          >
            {subtitle}
          </p>
          <div className="flex flex-col">
            <div className="flex flex-row text-center items-center">
              <MdDone size={30} />
              <p className="font-bold text-base pl-2">
                No impact to your credit
              </p>
            </div>
            <div className="flex flex-row text-center items-center">
              <MdDone size={30} />
              <p className="font-bold text-base pl-2">
                No impact to your credit
              </p>
            </div>
            <div className="flex flex-row text-center items-center">
              <MdDone size={30} />
              <p className="font-bold text-base pl-2">
                No impact to your credit
              </p>
            </div>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:w-72 mt-8">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroLoans;
