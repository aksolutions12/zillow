import React from "react";
import { canadianProvinces, usStates } from "../../../data/statesData";

const StatesSection = () => {
  return (
    <div className="bg-white w-full lg:w-1/2 text-zinc-900 px-5 dark:bg-zinc-800 dark:text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-3">United States</h2>
        <div className="grid grid-cols-2 gap-2 text-blue-600">
          {usStates.map((state, index) => (
            <p key={index}>{state}</p>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-3">Canada</h2>
        <div className="grid grid-cols-2 gap-2 text-blue-600">
          {canadianProvinces.map((province, index) => (
            <p key={index}>{province}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatesSection;
