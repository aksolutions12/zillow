import React from "react";
import CardFeature from "./CardFeature";
import { Link } from "react-router-dom";

function ResourceCards({ heading, cardsData, seealllink }) {
  return (
    <div className="bg-zinc-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold font-serif">{heading}</h2>
        <Link to={seealllink} className="text-blue-600">
          See all →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <CardFeature
            key={index}
            imageUrl={card.imageUrl}
            altText={card.altText}
            isFeatured={card.isFeatured}
            category={card.category}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ResourceCards;
