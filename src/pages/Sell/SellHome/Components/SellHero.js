import React from "react";
import porch from "../../../../assets/images/womenonporch.jpg";
import { theme } from "../../../../styles/theme/theme";

export default function SellHero() {
  return (
    <div className="relative  h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${porch})`,
          filter:
            "brightness(50%)" /* Reduced brightness for dark shadow effect */,
          boxShadow:
            "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)" /* Dark shadow effect */,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-center text-white p-8 shadow-lg">
          {" "}
          {/* Added shadow-lg class for text shadow */}
          <h1
            className="text-6xl font-bold mb-4"
            style={{ fontFamily: theme.typography.fontFamily2 }}
          >
            Sell your home with confidence
          </h1>
          <p className="text-xl max-w-4xl">
            Zillow is making it simpler to sell your home and move forward.
          </p>
        </div>
      </div>
    </div>
  );
}
