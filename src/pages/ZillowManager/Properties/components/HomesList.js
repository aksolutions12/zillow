import React from "react";

const HomesList = ({ home }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-card text-card-foreground">
      <img
        className="w-full"
        src={home.media.selectedFiles[0] || "https://placehold.co/600x400"}
        alt="Beautiful house at sunset"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 font-serif">
          {home.propertyInfo.streetAddress}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-white">
          {home.propertyInfo.propertyType}
        </span>
      </div>
    </div>
  );
};

export default HomesList;
