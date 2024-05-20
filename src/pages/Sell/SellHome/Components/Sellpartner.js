import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons/fa
import React from "react";
import sellpartimg from "../../../../assets/images/sellpartener.png";
import { theme } from "../../../../styles/theme/theme";

export default function Sellpartner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-cyan-50 p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <div>
          <img
            src={sellpartimg}
            alt="Real Estate Options Illustration"
            className="w-full md:hidden mb-8"
          />
          <h1
            className="text-5xl font-bold t mb-4"
            style={{ fontFamily: theme.typography.fontFamily2 }}
          >
            Sell with a partner agent or get a cash offer
          </h1>
          <p className="text-base text-zinc-700 mb-4">
            Zillow helps you sell your home, your way. Easily explore your
            selling options below and get personalized market value estimates —
            we can even help you choose the best option when you’re ready.
          </p>
          <p className="text-base text-zinc-600 mb-4">
            This experience is currently available in 45 markets across
            <b>
              {" "}
              Arizona, Colorado, Florida, Georgia, Indiana, Kansas,
              Massachusetts, Michigan, Minnesota, Missouri, Nevada, New Jersey,
              New Mexico, New York, North Carolina, Ohio, Oklahoma, Oregon,
              South Carolina, Tennessee, Texas, Utah, and Washington DC.
            </b>{" "}
            <a href="#" className="text-blue-600 underline">
              Click here
            </a>{" "}
            to see if it's available in your city.
          </p>
          <h2 className="text-xl font-bold  mb-3">
            Compare personalized options, no commitment required
          </h2>
          <div className="flex mb-8">
            <input
              type="text"
              placeholder="Enter your address"
              className="border border-zinc-300 p-2 rounded-l-lg flex-1"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
              <FaSearch /> {/* Render the search icon */}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold pb-4 text-zinc-800">
                Sell directly to Opendoor
              </h3>
              <p className="text-zinc-600">
                Get an all-cash offer from our trusted partner, Opendoor, to
                sell your home faster and avoid the hassle of showings.*
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold pb-4 text-zinc-800">
                Sell with a Zillow partner agent
              </h3>
              <p className="text-zinc-600 ">
                List your home with a Zillow Premier Agent partner to get local
                expertise and potentially maximize your sales price.
              </p>
              <p className="text-xs mt-4 italic font-light">
                *Offer eligibility and purchase price vary.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={sellpartimg}
            alt="Real Estate Options Illustration"
            className="w-4/5 hidden md:block"
          />{" "}
          {/* Hidden on mobile, shown on desktop */}
        </div>
      </div>
    </div>
  );
}
