import React from "react";

const RoundedCards = ({ cards }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 bg-zinc-100 p-6">
      {cards.map((card, index) => (
        <div className="flex flex-col items-center" key={index}>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <img
              src={card.imageUrl}
              alt={card.altText}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-center text-zinc-700">{card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RoundedCards;
