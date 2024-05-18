import React from "react";
import rating1 from "../../../../assets/images/Rating_Apple-.png";
import rating2 from "../../../../assets/images/Rating_Google-.png";

const RatingSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-10 bg-cyan-100 gap-2 lg:gap-10 py-16 ">
      {/* Image 1 */}
      <div className="w-full lg:w-1/3 p-2">
        <img
          src={rating1}
          alt="Rating Image 1"
          className="w-full h-auto lg:h-auto"
        />
      </div>

      {/* Image 2 */}
      <div className="w-full lg:w-1/3 p-2">
        <img
          src={rating2}
          alt="Rating Image 2"
          className="w-full h-auto lg:h-auto"
        />
      </div>
    </div>
  );
};

export default RatingSection;
