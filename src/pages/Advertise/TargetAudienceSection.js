import React from "react";
import com1 from "../../assets/images/trulia.png";
import com2 from "../../assets/images/streeteasy.png";
import com3 from "../../assets/images/hotpads.png";

const TargetAudienceSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 md:px-8 bg-gray-100">
      {/* Text Section */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <p className="text-xl md:text-xl font-semibold text-gray-800">
          Reach your target audience on our network of leading real estate
          sites.
        </p>
      </div>

      {/* Logo Section */}
      <div className="flex flex-wrap flex-row justify-center gap-6 md:gap-12 pt-8">
        {/* Replace the image URLs with your logo images */}
        <img src={com1} alt="Logo 1" className="h-20 w-44 md:h-16" />
        <img src={com2} alt="Logo 2" className="h-20 w-44 md:h-16" />
        <img src={com3} alt="Logo 3" className="h-20 w-44 md:h-16" />
        <img src={com1} alt="Logo 4" className="h-20 w-44  md:h-16" />
      </div>
    </div>
  );
};

export default TargetAudienceSection;
