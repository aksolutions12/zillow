import React from "react";
import Card from "../../../components/Card/Card";
import homeimg from "../../../assets/images/home-advertise.png";

const MeetCards = () => {
  const cardsData = [
    {
      imageUrl: homeimg,
      heading: "I’m just researching",
      paragraph:
        "Try an affordability calculator below to see exactly how much home you can afford.",
      buttonText: "Try Affordabilty Calculator",
    },
    {
      imageUrl: homeimg,
      heading: "I’m looking at homes",
      paragraph:
        "Get pre-qualified in as little as 3 minutesHelp, so you’re ready to make a move.",
      buttonText: "Get Pre-qualified",
    },
    {
      imageUrl: homeimg,
      heading: "I’m ready to buy",
      paragraph:
        "Connect with a top-rated loan officerHelp to find the right mortgage for you",
      buttonText: "(855) 917-2501",
    },
  ];

  return (
    <div className=" p-5  text-center bg-blue-950 w-full pb-16">
      <h2 className="text-3xl font-semibold mb-8 text-white pt-7">
        We'll meet you wherever you are
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            heading={card.heading}
            paragraph={card.paragraph}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetCards;
