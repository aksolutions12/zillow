import React from "react";
import porch from "../../../assets/images/womenonporch.jpg";
import { theme } from "../../../styles/theme/theme";

const HeroAgent = ({ title, subtitle, buttonText }) => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-24 px-4"
      style={{ backgroundImage: `url(${porch})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full pl-8">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full">
          <h1
            className="text-4xl lg:text-5xl font-bold mb-3"
            style={{
              fontFamily: theme.typography.fontFamily2,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow
            }}
          >
            {title}
          </h1>
          <p
            className="text-base lg:text-base mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            {subtitle}
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:w-1/4 md:w-1/4 sm:w-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroAgent;
