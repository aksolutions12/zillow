import React from "react";
import in1 from "../../../../../assets/images/inc1.png";
import in3 from "../../../../../assets/images/inc3.png";
import in2 from "../../../../../assets/images/inc2.png";
import in4 from "../../../../../assets/images/inc4.jpg";
import RightImageSection from "../../Components/RightImageSection";
import LeftImageSection from "../../Components/LeftImageSection";

const LearnConnect = () => {
  return (
    <div className="bg-white flex flex-col items-center px-10 py-12 ">
      <div className="flex items-center text-center">
        <h1 className="font-bold text-3xl text-center pb-8">
          Learn more about Zillow Rent Connect
        </h1>
      </div>

      <LeftImageSection
        title="Base package"
        description="Fill vacancies by capturing the attention of high-intent renters across our entire rental network. You’ll be able to customize your listings, which will appear with a verified source badge to improve credibility among renters."
        buttonText="Download the Base package PDF"
        buttonLink="#"
        imageUrl={in2}
        imageAlt="Maple Apartments"
      />

      <RightImageSection
        title="Enhanced package"
        description="Along with everything in the Base package, you’ll receive sponsored ad placement. Listings feature your portfolio of nearby properties, as well as a prominent link to your property website. Stay on top of the market with rent comp and insight reports."
        buttonText="Download the Base package PDF"
        buttonLink="#"
        imageUrl={in1}
        imageAlt="Maple Apartments"
      />

      <LeftImageSection
        title="Premium package"
        description="Give your listings maximum exposure. In addition to all features of the Enhanced package, you’ll also receive targeted Facebook, Instagram and email ad placement. Also included are full-service 3D tours for your properties — captured and uploaded by a real estate photographer."
        buttonText="Download the Base package PDF"
        buttonLink="#"
        imageUrl={in3}
        imageAlt="Maple Apartments"
      />

      <RightImageSection
        title="Flex Portfolio"
        description="Unlock the flexibility to adjust your advertising. Optimize your performance, navigate market seasonality and occupancy fluctuations, and get recommendations for your portfolio – all while keeping your budgeting simple with locked-in rates."
        buttonText="Download the Base package PDF"
        buttonLink="#"
        imageUrl={in4}
        imageAlt="Maple Apartments"
      />
    </div>
  );
};

export default LearnConnect;
