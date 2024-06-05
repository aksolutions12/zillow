// NeedPricing.js

import React from "react";
import img1 from "../../../../assets/images/local_ads_lp_srp_1-1.png";

export default function NeedPricing() {
  return (
    <div className="py-10 ">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Need help pricing your rental?
        </h1>
        <p className="text-lg mb-6">
          Our landlord tools and resources have you covered.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start p-6">
        <div className="w-full md:w-1/2 p-4">
          <img src={img1} alt="Rental Comparison Tool" />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Start with a free Rent Zestimate<sup>®</sup>
            </h2>
            <p className="mb-4">
              The Rent Zestimate<sup>®</sup> uses millions of undefined points —
              plus local market trends — to give you a starting price point.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Get a pulse on the competition
            </h2>
            <p className="mb-4">
              Sort, filter and analyze a customized list of rental comps for
              your area. Information from similar properties makes it easier to
              set the right price.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Stay on top of market trends
            </h2>
            <p className="mb-4">
              After you receive your Rent Zestimate<sup>®</sup>, we'll send you
              resources to help you learn what renters want in your local
              market.
            </p>
          </div>
          <form className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Street address"
                className="flex-1 p-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Unit"
                className="w-20 p-2 border rounded-lg"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 border rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg"
            >
              Continue
            </button>
            <p className="text-sm text-zinc-500 mt-2">
              By providing your email address, you agree to receive promotional
              and marketing materials from Zillow.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
