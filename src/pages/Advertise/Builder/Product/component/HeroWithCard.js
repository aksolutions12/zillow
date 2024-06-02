import React from "react";
import AttractForm from "../../components/AttractForm";
import img from "../../../../../assets/images/marketingtuig-87223.jpg";

const HeroWithCard = ({ title, subtitle, cardheading }) => {
  return (
    <div
      className="bg-gray-100 py-8 px-4 lg:flex justify-center items-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 pl-5">
          {title}
        </h1>
        <p className="text-base text-white mb-8 pl-5">{subtitle}</p>
      </div>

      <div className="lg:w-1/2">
        <AttractForm heading={cardheading} />
      </div>
    </div>
  );
};

export default HeroWithCard;
