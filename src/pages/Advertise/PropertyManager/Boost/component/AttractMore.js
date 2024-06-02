import React from "react";
import img5 from "../../../../../assets/images/inc2.png";
import RightImageSection from "../../Components/RightImageSection";
const AttractMore = () => {
  return (
    <div className="bg-white py-10">
      <div>
        <h1 className="font-bold text-center text-3xl pb-4">
          Attract renters on social media with Precision Targeting
        </h1>
        <p className="text-base text-center pb-4">
          All the benefits of Zillow Boost, plus targeted ads on Facebook and
          Instagram.
        </p>
      </div>
      {/* Left Image Section */}
      <div className="flex flex-col md:flex-row items-center p-4 gap-2 ">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          {" "}
          <img
            src={img5}
            alt="image 1"
            className="rounded-lg  w-full   mb-4 "
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="sm:text-center lg:text-start">
            <h2 className="text-2xl font-bold mb-2">Create must-click ads</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Advertise with confidence, knowing that your marketing investment
              is producing results. Every dollar spent is attributed to a signed
              lease.
            </p>
          </div>
        </div>
      </div>
      <RightImageSection
        title="Show up at the right time"
        description="Your property ads will appear within a renter’s feed based on their search behavior."
        buttonText="Boost Your Listings"
        buttonLink="#"
        imageUrl={img5}
        imageAlt="Maple Apartments"
      />
    </div>
  );
};

export default AttractMore;
