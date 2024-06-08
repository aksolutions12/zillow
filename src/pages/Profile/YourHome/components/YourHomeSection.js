import React from "react";

export default function YourHomeSection() {
  return (
    <div className="bg-zinc-100 w-full mx-auto px-4 py-8 pb-20 ">
      <div className="mb-4">
        <h1 className="font-bold text-3xl font-serif">Your Home</h1>
      </div>

      <div className="flex flex-col items-center bg-white justify-center py-10 dark:bg-zinc-900 gap-2 px-2">
        <div className="text-center">
          <img
            src="https://placehold.co/200x100"
            alt="home illustration"
            className="mx-auto mb-4 h-48 w-48"
          />
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
            Put your home here
          </h1>
          <p className="max-w-3xl text-zinc-600 dark:text-zinc-400 mb-6">
            Keep up-to-date on your home's estimated value so you can track your
            investment, plan your next purchase, view similar homes, and more.
          </p>
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your home address"
              className="w-full p-3 pr-32 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
            />
            <button className="absolute right-0 top-0 mt-2 mr-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Add Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
