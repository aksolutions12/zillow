import React from "react";
import img2 from "../../../../../assets/images/targeting-149130.png";

function PartenerSection() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-blue-600 text-white p-8 md:w-1/2">
        <p className="text-2xl md:text-3xl font-bold mb-4">
          “ We've been looking for a partner to help us with goals Maronda Homes
          wanted to achieve, and Zillow Group has been that partner. The nature
          of our relationship is more of a consultative one than a selling one —
          Zillow Group wants to make you a better builder and marketer. ”
        </p>
        <p className="text-lg font-semibold text-yellow-400">
          Matthew Wilson, Maronda Homes
        </p>
      </div>
      <div className="md:w-1/2">
        <img src={img2} alt="Houses" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default PartenerSection;
