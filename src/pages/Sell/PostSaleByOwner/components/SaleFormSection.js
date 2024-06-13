import React from "react";
import porch from "../../../../assets/images/womenonporch.jpg";
import usStates from "../../../../data/usStates";

const SaleFormSection = () => {
  return (
    <div className="container mx-auto relative">
      {/* Top banner section with house image as background */}
      <div
        className="bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${porch})` }}
      ></div>

      {/* Form section */}
      <div>
        <div className="bg-blue-500 p-4">
          <span className="font-bold text-4xl text-white bg-blue-500  rounded-tr-2xl">
            Post a For Sale by Owner Listing
          </span>
          <hr className="text-gray-100 mt-2" />
          <div className="text-white mb-2">For Sale by Owner</div>
          <form className="flex flex-col md:flex-row md:flex-wrap md:space-x-2">
            <input
              type="text"
              placeholder="Street address"
              className="p-2 mb-2 md:mb-0 rounded border border-zinc-300 flex-1"
            />
            <input
              type="text"
              placeholder="Unit# (Optional)"
              className="p-2 mb-2 md:mb-0 rounded border border-zinc-300 w-full md:w-1/6"
            />
            <input
              type="text"
              placeholder="City"
              className="p-2 mb-2 md:mb-0 rounded border border-zinc-300 w-full md:w-1/6"
            />
            <select className="p-2 mb-2 md:mb-0 rounded border border-zinc-300 w-full md:w-1/6">
              <option value="">Select State</option>
              {usStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Zip"
              className="p-2 mb-2 md:mb-0 rounded border border-zinc-300 w-full md:w-1/6"
            />
            <button className="bg-green-500 text-white p-2 rounded w-full md:w-auto">
              Continue
            </button>
          </form>
        </div>
      </div>

      {/* Sign-in text */}
      <div className="text-center mt-4">
        <p className="text-sm">Sign in to submit this posting.</p>
      </div>
    </div>
  );
};

export default SaleFormSection;
