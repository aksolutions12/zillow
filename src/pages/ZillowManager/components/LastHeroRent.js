import React from "react";
import imageUrl from "../../../assets/images/womenonporch.jpg";

export default function LastHeroRent() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
          <h1 className="text-4xl font-bold mb-4 font-serif max-w-2xl">
            Rent with confidence
          </h1>
          <p className="max-w-xl mb-6">
            Take the hassle out of landlording with Zillow Rental Manager. Post
            a listing, screen tenants, sign a lease and collect payments all in
            one place.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg mb-4">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-blue-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Get the app</h1>
        <p className="text-lg mb-8">
          Use Zillow Rental Manager anywhere, anytime
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <input
            type="text"
            placeholder="Enter phone number"
            className="p-3 rounded-lg text-zinc-700 w-full sm:w-auto"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg w-full sm:w-auto">
            Text me the app
          </button>
        </div>
        <p className="text-sm text-zinc-300 max-w-2xl mx-auto">
          US mobile numbers only. Message and data rates apply. I agree to
          receive a one-time text message containing a link to download the
          Zillow Rental Manager app at the mobile number I provide above, and I
          confirm that the mobile number is mine.
        </p>
      </div>
    </div>
  );
}
