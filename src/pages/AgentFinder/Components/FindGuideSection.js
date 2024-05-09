import React from "react";

const FindGuideSection = ({ imageUrl, title, description, resources }) => {
  return (
    <div className="bg-white p-8">
      <div className="flex flex-col items-center space-y-4 md:items-center md:space-y-0 md:flex-row md:space-x-4">
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt="Find Agents"
            className="w-44 h-44 rounded-full"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="mt-6 text-center md:text-left md:mt-0 text-zinc-700">
        {resources.map((resource, index) => (
          <p key={index} className="text-xs pb-5">
            {resource}
          </p>
        ))}{" "}
        <br />
      </div>
    </div>
  );
};

export default FindGuideSection;
