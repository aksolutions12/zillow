import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import Card3 from "../../../components/Card/Card3";
import whyimg from "../../../assets/images/whyzillow.jpg";

const WhyZillow = () => {
  const cardData = [
    {
      imageSrc: whyimg,
      title: "41% to buy or sell",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus in ante tincidunt lobortis. Integer nec velit nec purus aliquam fermentum.",
    },
    {
      imageSrc: whyimg,
      title: "194 million",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus in ante tincidunt lobortis. Integer nec velit nec purus aliquam fermentum.",
    },
    {
      imageSrc: whyimg,
      title: "Most visited rental network",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus in ante tincidunt lobortis. Integer nec velit nec purus aliquam fermentum.",
    },
  ];

  return (
    <div className="bg-white py-10 flex flex-col items-center">
      {/* First Div */}
      <div className="max-w-3xl text-center mb-8">
        <h2 className="text-3xl font-bold">Why Zillow Home Loans?</h2>
        <p className="text-lg mt-2">
          Getting home is a journey. Our loan officers are here to help you stay
          on budget and on schedule.
        </p>
      </div>

      {/* Second Div */}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-4">
        {cardData.map((card, index) => (
          <Card3
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>

      {/* Third Div */}
      <div className="flex items-center">
        <button className="bg-transparent text-blue-600 border border-white hover:bg-sky-100 hover:rounded-xl py-2 px-4 flex items-center hover:text-blue-900">
          <IoIosArrowRoundDown className="ml-2" size={25} />
          See All Loan Offerings
        </button>
      </div>
    </div>
  );
};

export default WhyZillow;
