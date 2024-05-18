import React from "react";
import Card3 from "../../../../components/Card/Card3";
import buyimg from "../../../../assets/images/buyhome.png";
import sellimg from "../../../../assets/images/sellhome.png";
import rentimg from "../../../../assets/images/rent-advertise.png";

const CardSection2 = () => {
  // Sample data for cards
  const cardsData = [
    {
      imageSrc: buyimg,
      title: "Buy a home",
      content:
        "Find your new place with millions of constantly updated listings, robust filters and an immersive photo experience.",
    },
    {
      imageSrc: sellimg,
      title: "Sell a home",
      content:
        "Whether you sell with Zillow Offers or take another approach, we’ll help you navigate the path to a successful sale.",
    },
    {
      imageSrc: rentimg,
      title: "Sell a home",
      content:
        "Tap into a complete online experience — from shopping on the largest rental network to applying and paying rent.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center px-10">
      {cardsData.map((card, index) => (
        <div key={index} className="w-full lg:w-1/3 p-4">
          <Card3
            imageSrc={card.imageSrc}
            title={card.title}
            content={card.content}
          />
        </div>
      ))}
    </div>
  );
};

export default CardSection2;
