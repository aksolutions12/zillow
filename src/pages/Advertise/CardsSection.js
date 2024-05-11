import React from "react";
import imageURL from "../../assets/images/womenonporch.jpg";
import Card2 from "../../components/Card/Card2";

const CardsSection = () => {
  // Data for the cards
  const cardData = [
    {
      heading: "I’m an agent or broker",
      buttonText: "Get Started",
      link: "/agentPremium",
    },
    {
      heading: "I’m a property manager",
      buttonText: "Get Started",
      link: "/property-management",
    },
    {
      heading: "I’m a landlord",
      buttonText: "Get Started",
      link: "/home-buying-guide",
    },
    {
      heading: "I’m a lender or loan officer",
      buttonText: "Get Started",
      link: "/investment-strategies",
    },
    {
      heading: "I’m a builder",
      buttonText: "Get Started",
      link: "/interior-design-tips",
    },
    {
      heading: "I am a brand or local advertiser",
      buttonText: "Get Started",
      link: "/renting-vs-buying",
    },
  ];

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-4">
        {cardData.map((data, index) => (
          <div key={index} className="flex justify-center">
            <Card2
              imageURL={imageURL}
              title={data.heading}
              buttonText={data.buttonText}
              link={data.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
