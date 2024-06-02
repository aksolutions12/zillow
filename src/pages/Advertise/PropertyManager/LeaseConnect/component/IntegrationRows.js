import React from "react";
import img1 from "../../../../../assets/images/rentconnect-features-image2x-dfed2f.png";
import img2 from "../../../../../assets/images/inc4.jpg";

const IntegrationRows = () => {
  return (
    <div>
      {/* Right Image Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2">
        {/* Image */}
        <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
          <img
            src={img1}
            alt="Image 2"
            className="w-full   object-cover rounded-lg "
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Simple integration
          </h2>
          <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
            Keep using your current property management software — we’ll push
            guest cards to it through API integration. No new software to learn,
            and no hassle of manual guest-card entries.
          </p>
        </div>
      </div>

      {/* Left Image Section */}
      <div className="flex flex-col md:flex-row items-center p-4 gap-2 ">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          {" "}
          <img
            src={img2}
            alt="image 1"
            className="rounded-lg  w-full   mb-4 "
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="sm:text-center lg:text-start">
            <h2 className="text-2xl font-bold mb-2">Results that matter</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Advertise with confidence, knowing that your marketing investment
              is producing results. Every dollar spent is attributed to a signed
              lease.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2">
        {/* Image */}
        <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
          <img
            src={img1}
            alt="Image 2"
            className="w-full   object-cover rounded-lg "
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Clear attribution
          </h2>
          <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
            Our property management integration allows for transparent
            attribution — you only pay when Zillow is the first source of
            contact, making it easier than ever to track your cost per lease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntegrationRows;
