import React, { useState } from "react";
import { Link } from "react-router-dom";

const categoriesData = [
  { name: "ALL POSTS", count: "99+" },
  { name: "PRODUCTIVITY", count: "50+" },
  { name: "TRENDS AND DATA", count: "99+" },
  { name: "LEADERSHIP", count: "50+" },
  { name: "LEAD GENERATION", count: "99+" },
  { name: "LEAD CONVERSION", count: "50+" },
  { name: "MARKETING", count: "99+" },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("ALL POSTS");

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white p-4 font-sans">
      <div className="max-w-sm mx-auto">
        <div className="flex items-center bg-white rounded-lg shadow p-2 mb-4 md:hidden">
          {/* The search bar is hidden on large screens */}
          <input
            type="text"
            placeholder="Search"
            className="flex-grow outline-none text-zinc-700 px-2"
          />
          <button className="text-zinc-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 21.75l-5.596-5.596m1.596-3.154a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow divide-y">
          {categoriesData.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name}`}
              className={`p-4 flex justify-between items-center cursor-pointer ${
                selectedCategory === category.name ? "bg-gray-200" : ""
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="font-semibold">{category.name}</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
