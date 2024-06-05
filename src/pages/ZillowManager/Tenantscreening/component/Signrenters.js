import React from "react";
import img1 from "../../../../assets/images/Tenant-feature-block-1-65fcb9.png";

const Signrenters = () => {
  return (
    <div className="py-10 lg:px-5 sm:px-2 w-full bg-white">
      <div className="text-center">
        <h1 className="font-bold text-3xl">
          Review tenant applications with ease
        </h1>
        <p className="text-base">
          View renter information, tenant credit checks, background checks,
          eviction history and income verification in one place.
        </p>
      </div>
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
            Drive traffic to the right places
          </h2>
          <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
            Direct renters in pre-selected cities to your website or Zillow
            listing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signrenters;
