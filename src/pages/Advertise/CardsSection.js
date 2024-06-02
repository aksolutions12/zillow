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
      link: "/advertiseManager",
    },
    {
      heading: "I’m a landlord",
      buttonText: "Get Started",
      link: "/home-buying-guide",
    },
    {
      heading: "I’m a lender or loan officer",
      buttonText: "Get Started",
      link: "/loanorLenderOfficer",
    },
    {
      heading: "I’m a builder",
      buttonText: "Get Started",
      link: "/newconstructionadvertising",
    },
    {
      heading: "I am a brand or local advertiser",
      buttonText: "Get Started",
      link: "/brandadvertising",
    },
  ];

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-4">
        {cardData.map((data, index) => (
          <div key={index} className="flex justify-center p-2">
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
