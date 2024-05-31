import React from "react";

export default function InterestedSection({ title, description, buttonText }) {
  return (
    <div className="flex items-center justify-center h-96 bg-blue-900 text-center">
      <div className="w-full lg:w-3/4">
        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-4 ">
          {title}
        </h1>
        <p className="text-base  text-white mb-6">{description}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
