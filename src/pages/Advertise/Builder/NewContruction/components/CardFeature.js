import React from "react";

function CardFeature({ imageUrl, altText, isFeatured, category, title }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={altText} className="w-full h-48 object-cover" />
      <div className="p-4">
        {isFeatured && (
          <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">
            FEATURED
          </span>
        )}
        <span className="text-zinc-600 text-xs mb-2 block">{category}</span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </div>
    </div>
  );
}

export default CardFeature;
