import React from "react";

export default function PromotedSection() {
  return (
    <div className="bg-blue-100 py-24 px-5">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-blue-800">
          Promoted Communities provides features that help buyers discover your
          homes and connect with you — and tools exclusively for you to manage,
          measure and maximize your marketing with Zillow.
        </h2>
      </div>
      <div className="mt-10 max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold text-zinc-900">Buyer Discovery</h3>
          <p className="mt-4 text-zinc-600">
            Features and services to elevate your homes to buyers
          </p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Learn more
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold text-zinc-900">Builder Tools</h3>
          <p className="mt-4 text-zinc-600">
            Platforms and programs to inform your marketing
          </p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
