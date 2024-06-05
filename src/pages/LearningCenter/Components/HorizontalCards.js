import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

export default function HorizontalCards({ headname, data }) {
  return (
    <div className="p-6 px-10 bg-white py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
          {headname}
        </h2>
        <Link
          to="/all-blogs"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-x-auto pb-10">
        {/* Render all cards */}
        {data.map((item, index) => (
          <Link
            key={index}
            to={`/blog/${item.id}`}
            className="w-full md:w-600 mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row"
          >
            <img
              className="w-full md:w-2/5 object-cover rounded-lg"
              src={item.imageUrl}
              alt="Article Image"
            />
            <div className="p-4 flex flex-col justify-center">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                {item.duration}
              </span>
              <h2 className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
