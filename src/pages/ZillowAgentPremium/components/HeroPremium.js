import React from "react";
import NavbarAgent from "./NavbarAgent";
import { theme } from "../../../styles/theme/theme";
import porch from "../../../assets/images/womenonporch.jpg";

const HeroPremium = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center  text-white px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${porch})`,
          height: "600px", // Increase height here
        }}
      >
        <NavbarAgent />
        <div className="max-w-7xl mx-auto flex flex-col justify-center pt-10 h-full pl-8">
          <div className="lg:w-1/2">
            {" "}
            {/* Set width to capture 33% of the container */}
            <h1 className="font-bold text-xs pb-2">
              SOLUTIONS FOR THE ALWAYS-GROWING-MY-BUSINESS AGENT
            </h1>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-3"
              style={{ fontFamily: theme.typography.fontFamily2 }}
            >
              Unlock possibilities with Zillow Premier Agent
            </h1>
            <p className="text-base lg:text-base mb-6">
              Get connections, insightful data and refreshingly simple solutions
              with our real estate platform.
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:w-72">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPremium;
