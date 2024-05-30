import React from "react";
import RightImageSection from "./RightImageSection";
import in1 from "../../../../assets/images/inc1.png";
import in3 from "../../../../assets/images/inc3.png";
import in2 from "../../../../assets/images/inc2.png";
import LeftImageSection from "./LeftImageSection";

const IncludedSection = () => {
  return (
    <div className="bg-white flex flex-col items-center px-10 py-12 ">
      <div className="flex items-center text-center">
        <h1 className="font-bold text-3xl text-center pb-8">
          Included with Zillow Rentals
        </h1>
      </div>

      <RightImageSection
        title="Your all-in-one account portal"
        description="Easily manage your Zillow advertising account with 24/7 access to billing, performance analytics and more."
        buttonText="Sign in"
        buttonLink="#"
        imageUrl={in1}
        imageAlt="Maple Apartments"
      />
      <LeftImageSection
        title="Immersive 3D tours"
        description="Help get more eyes on your property — and more renters in the door — with Zillow 3D Home™ tours."
        buttonText="Learn More"
        buttonLink="#"
        imageUrl={in2}
        imageAlt="Maple Apartments"
      />

      <RightImageSection
        title="Insights at your fingertips"
        description="Get more visibility into lead activity, ad performance and market-specific trends with analytics and insights."
        buttonText="Get Insights"
        buttonLink="#"
        imageUrl={in3}
        imageAlt="Maple Apartments"
      />
    </div>
  );
};

export default IncludedSection;
