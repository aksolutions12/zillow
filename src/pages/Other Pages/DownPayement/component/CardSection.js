import React from "react";
import {
  MdQuestionAnswer,
  MdExplore,
  MdChat,
  MdAssignment,
} from "react-icons/md";

const CardSection = () => {
  const cards = [
    {
      icon: <MdQuestionAnswer size={50} />,
      title: "1. Do I qualify for down payment assistance?",
      content:
        "With Zillow’s easy questionnaire, see if you may qualify for down payment assistance.",
    },
    {
      icon: <MdExplore size={50} />,
      title: "2. Explore programs",
      content:
        "We’ll point you to the information you need to pick the program that could work best for you.",
    },
    {
      icon: <MdChat size={50} />,
      title: "3. Talk to your lender",
      content:
        "Share the programs you’re interested in and discuss whether your lender supports them.",
    },
    {
      icon: <MdAssignment size={50} />,
      title: "4. Complete requirements",
      content:
        "Programs vary, but many require submitting an application or taking a home-buying class.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-10 py-8 mb-10 bg-white shadow-xl  rounded-md">
      <h1 className="text-3xl font-bold text-center mb-6">
        How to qualify for down payment assistance
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {" "}
        {/* Center cards on all screens */}
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-56 h-56 gap-3"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 text-blue-500 rounded-full bg-blue-100">
              {card.icon}
            </div>
            <h3 className="font-semibold">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
