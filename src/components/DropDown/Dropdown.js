// Dropdown.js
import React, { useState } from "react";

const Dropdown = ({ mainName, options }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-zinc-800 font-semibold py-4  flex items-center relative"
        style={{ width: "270px", height: "24px" }}
      >
        <span className="flex-1">{mainName}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 ${
            open ? "transform rotate-180" : ""
          } text-blue-500 absolute top-1/2 -translate-y-1/2 right-4`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {open && (
        <div className=" mt-1" style={{ minWidth: "270px" }}>
          <ul className="flex flex-col justify-center items-center text-zinc-700 p-0 m-0">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 text-blue-500 hover:text-blue-700 cursor-pointer underline"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
