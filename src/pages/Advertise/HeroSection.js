import React from "react";
import { theme } from "../../styles/theme/theme";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
      <h1
        className="text-5xl font-bold text-center mb-4 pt-8"
        style={{ fontFamily: theme.typography.fontFamily2 }}
      >
        Let Zillow Build Your Business
      </h1>
      <p className="text-center text-lg mb-6">
        Reach millions of buyers, sellers and renters on the largest real estate
        network on the web.
      </p>
      <div className="flex justify-center">
        {/* Updated width and color */}
        <div className="w-1/2 h-1 bg-yellow-500"></div>
      </div>
      <p className="text-center text-2xl mt-6 font-semibold">
        Select your industry to get started
      </p>
    </div>
  );
}
