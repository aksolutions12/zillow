import React from "react";

const Footerhelp = () => {
  return (
    <footer className="bg-white py-4 relative">
      {/* Horizontal line */}

      <div className="container mx-auto flex justify-between items-center px-4 relative z-10">
        {/* Left section */}
        <div className="text-sm">
          <a href="#" className="text-gray-700 hover:underline">
            Zillow Help Center
          </a>
        </div>

        {/* Center section */}
        <div className="text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Right section */}
        <div className="text-sm">
          <span>English (US)</span>
        </div>
      </div>

      {/* Shadow */}
      <div className="absolute inset-0 bg-black-200 shadow-md opacity-75"></div>
    </footer>
  );
};

export default Footerhelp;
