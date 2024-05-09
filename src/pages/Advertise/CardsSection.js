import React from "react";
import imageURL from "../../assets/images/womenonporch.jpg";
import Card2 from "../../components/Card/Card2";

const CardsSection = () => {
  // Data for the cards
  const cardData = [
    { heading: "Real Estate Trends", buttonText: "Get Started" },
    { heading: "Property Management", buttonText: "Get Started" },
    { heading: "Home Buying Guide", buttonText: "Get Started" },
    { heading: "Investment Strategies", buttonText: "Get Started" },
    { heading: "Interior Design Tips", buttonText: "Get Started" },
    { heading: "Renting vs Buying", buttonText: "Get Started" },
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
