import React from "react";

export default function RightImageSection({ imageUrl, title, description }) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-10 space-x-10 bg-white">
      {/* Image */}
      <div className="w-full lg:w-1/2 md:w-full sm:w-full mb-6 lg:mb-0 md:mb-0 sm:mb-0 order-1 sm:order-2">
        <img
          src={imageUrl}
          alt="Real Estate Interaction"
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* Content */}
      <div className="w-full lg:w-1/2 md:w-full sm:w-full pl-0 lg:pl-12 md:pl-0 sm:pl-0 order-2 sm:order-1 flex items-center">
        <div>
          <div className="mb-4 w-16 h-2 bg-yellow-500"></div>
          <h1 className="text-xl lg:text-3xl font-bold mb-4">{title}</h1>
          <p className="text-base mb-6 lg:w-3/4 md:w-full sm:w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
