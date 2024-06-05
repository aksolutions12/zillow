import React from "react";
import img1 from "../../../../assets/images/Tenant-feature-block-1-65fcb9.png";
import img2 from "../../../../assets/images/inc4.jpg";
import img3 from "../../../../assets/images/family_on_computer.png";
import { Link } from "react-router-dom";

const Postrenters = () => {
  return (
    <div className="py-10 lg:px-5 sm:px-2 w-full bg-white">
      <div>
        <div className="text-center">
          <h1 className="font-bold text-3xl pb-2">
            Post where renters are searching
          </h1>
          <p className="text-base">
            Access the network with over 30 million visitors each month1 to help
            you find your perfect renter.
          </p>
        </div>

        {/* Right Image */}
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
              Find renters with less hassle
            </h2>
            <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
              List your house, townhome, condo, apartment or room for rent on
              Zillow Rental Manager and it will appear on the most visited
              rental network.2
            </p>
          </div>
        </div>

        {/* Left Image */}

        <div className="flex flex-col md:flex-row items-center p-4 px-10 bg-white">
          <img
            src={img2}
            alt="Property Management"
            className="rounded-lg w-full md:w-1/2"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Listing made simple
            </h2>
            <p className="font-bold text-base mt-2 mb-2">
              Create your rental listings
            </p>
            <p className="mt-2 mb-2 text-zinc-600 dark:text-zinc-300">
              It takes just minutes to create a listing — simply add property
              details, upload photos and publish.
            </p>
            <p className="font-bold text-base mt-2 mb-2">
              Message interested renters
            </p>
            <p className="mt-2 mb-2 text-zinc-600 dark:text-zinc-300">
              Communicate with renters using Zillow Rental Manager to stay
              organized during the tenant search process.
            </p>
            <p className="font-bold text-base mt-2 mb-2">
              Reuse your rental posting
            </p>
            <p className="mt-2 mb-2 text-zinc-600 dark:text-zinc-300">
              Time for new renters? We save your listings so you can republish
              them with the click of a button.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2">
          {/* Image */}
          <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
            <img
              src={img3}
              alt="Image 2"
              className="w-full   object-cover rounded-lg "
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Price your rental
            </h2>
            <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
              Feel confident when you list your property — we'll help you price
              it by integrating your Rent Zestimate into the listing and giving
              you tools to review comparable properties.
            </p>
            <Link tp="#">
              <p className="text-base text-blue-800 hover:underline font-bold">
                Get your Rent Zestimate
              </p>
            </Link>
          </div>
        </div>

        {/* Left Image */}

        <div className="flex flex-col md:flex-row items-center p-4 px-10 bg-white">
          <img
            src={img2}
            alt="Property Management"
            className="rounded-lg w-full md:w-1/2"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Built-in tenant screening
            </h2>

            <p className="mt-2 mb-2 text-zinc-600 dark:text-zinc-300">
              When you list your property with Zillow Rental Manager, you can
              accept rental applications for free to quickly screen prospective
              tenants with background checks, credit reports and eviction
              history.
            </p>
            <Link tp="#">
              <p className="text-base text-blue-800 hover:underline font-bold">
                Learn More
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postrenters;
