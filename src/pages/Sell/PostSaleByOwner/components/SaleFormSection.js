// Import React and necessary hooks
import React from "react";
import porch from "../../../../assets/images/womenonporch.jpg";

const SaleFormSection = () => {
  return (
    <div className="container mx-auto">
      {/* Top banner section with house image */}
      <div className="bg-blue-500">
        <img src={porch} alt="House" className="w-full object-cover h-64" />
      </div>

      {/* Form section */}
      <div className="mt-4 p-4">
        <form>
          <div className="mb-2">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium text-gray-700"
            >
              Street address
            </label>
            <input
              type="text"
              id="street-address"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Optional unit input */}
          <div className="mb-2">
            <label
              htmlFor="unit"
              className="block text-sm font-medium text-gray-700"
            >
              Unit (optional)
            </label>
            <input
              type="text"
              id="unit"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* City input */}
          <div className="mb-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Zip input */}
          <div className="mb-4">
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700"
            >
              Zip
            </label>
            <input
              type="text"
              id="zip"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Continue button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Continue
          </button>
        </form>
      </div>

      {/* Sign-in text */}
      <div className="text-center mt-4">
        <p className="text-sm">Sign in to submit this posting.</p>
      </div>
    </div>
  );
};

export default SaleFormSection;
