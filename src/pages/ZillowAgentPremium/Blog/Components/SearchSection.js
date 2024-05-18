import React from "react";

export default function SearchSection() {
  return (
    <div className="flex flex-col sm:flex-row lg:items-center  justify-between px-10 p-4 gap-4 bg-white ">
      <h1 className="text-lg font-semilight">All Categories</h1>

      <div className="flex items-center border border-gray-200 hover:border-blue-600 rounded-lg px-2  ">
        <input
          type="text"
          placeholder="Search"
          className="p-2 w-full lg:w-64 outline-none rounded-md"
        />
        <button className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-zinc-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
