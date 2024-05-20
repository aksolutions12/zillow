import React from "react";

export default function SearchSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
        Browse Zillow by State/Province
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-2">
        Find homes in popular cities or search by region, city or neighborhood.
      </p>
      <div className="mt-6 relative w-full lg:w-2/5 ">
        <input
          type="text"
          placeholder="City, State, ZIP, or Neighborhood"
          className="w-full p-2 px-5 border border-black rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400"
        />
        <button className="absolute inset-y-0 right-0 bg-blue-500 hover:bg-blue-600 text-white font-bold px-3 rounded-r-lg border border-black transition-colors">
          Search
        </button>
      </div>
    </div>
  );
}
