import React from "react";
import bardimg from "../../assets/images/board-advertise.png";
import homeing from "../../assets/images/home-advertise.png";
import rentimg from "../../assets/images/rent-advertise.png";
import Card3 from "../../components/Card/Card3";

const AudienceCustomer = () => {
  const cardsData = [
    {
      imageSrc: bardimg,
      title: "41% to buy or sell",
      content:
        "Nearly 41% of people who visited Zillow and/or Trulia in the past 12 months are planning to buy and/or sell a home in the next 12 months.",
    },
    {
      imageSrc: homeing,
      title: "194 million",
      content:
        "More than 194 million average monthly unique users visited Zillow Group brands’ mobile apps and websites in Q2 2019.",
    },
    {
      imageSrc: rentimg,
      title: "Most visited rental network",
      content: "Zillow Rentals is the most visited rental network.",
    },
  ];

  return (
    <div className="bg-indigo-950 text-white py-10">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Zillow Group Audience</h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <Card3
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>

        {/* Paragraph Section */}
        <div className="text-center mt-8 px-32">
          <p className="text-xs font-light">
            Source: 41% stat: Zillow Group Tracking Survey, Q2 2019. 194 million
            stat: Google Analytics and Adobe Analytics. Rental network claim:
            Comscore Media Metrix® Multi-Platform, Key Measures, Custom-defined
            list including: Zillow Rentals, Apartments.com Network, RentPath
            Network, ForRent.com & Homes.com Network, Total Visits, July 2020,
            United States. Zillow Rentals is the deduplicated reach of
            Zillow.com Rentals, Trulia.com Rentals and HotPads.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudienceCustomer;
