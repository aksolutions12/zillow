import React from "react";

export default function DownloadSection({
  imageUrl,
  title,
  description,
  buttonText,
}) {
  return (
    <div className="bg-blue-100 p-8 rounded-2xl mx-5 mt-10 mb-3 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
          {title}
        </h2>
        <p className="mt-4 text-zinc-700">{description}</p>
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg">
          {buttonText}
        </button>
      </div>
      <div className="flex-1">
        <img
          className="rounded-lg"
          src={imageUrl}
          alt="Person using mobile app"
        />
      </div>
    </div>
  );
}
