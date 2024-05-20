import React from "react";
import usStates from "../../../../data/usStates";

export default function MortgageStateSection() {
  return (
    <div className="w-full bg-white mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-center lg:text-start mb-6">
        Current Mortgage Rates by State
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm underline text-blue-500">
        {usStates.map((state, index) => (
          <div key={index}>{state}</div>
        ))}
      </div>
    </div>
  );
}
