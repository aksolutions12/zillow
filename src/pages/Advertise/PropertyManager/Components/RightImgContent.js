import React from "react";

export default function RightImgContent({ imageUrl, title, description }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2 py-16">
      {/* Image */}
      <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
        <img
          src={imageUrl}
          alt="Images"
          className="w-full   object-cover rounded-lg "
        />
      </div>

      {/* Content */}
      <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          {title}
        </h2>
        <p className="mt-4 mb-3 text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      </div>
    </div>
  );
}
