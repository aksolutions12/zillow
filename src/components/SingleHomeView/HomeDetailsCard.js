import React from "react";
import {
  FiHome,
  FiCalendar,
  FiMapPin,
  FiDollarSign,
  FiSquare,
  FiMap,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function HomeDetailsCard({ data }) {
  const navigate = useNavigate();

  const handleRequestTour = () => {
    const userId = data.userId; // Replace with the actual user ID from the data
    navigate(`/chat/${userId}`);
  };

  return (
    <div className="p-4 w-full mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            ${data.listingDetails.monthlyRent}
          </h1>
          <p className="text-zinc-700 dark:text-zinc-300">
            {data.propertyInfo.streetAddress}
          </p>
          <div className="mt-2 flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
              Est.: ${data.listingDetails.monthlyRent}/mo
            </span>
            <a href="#" className="text-blue-700 font-semibold">
              Get pre-qualified
            </a>
          </div>
        </div>
        <div className="flex space-x-4 text-center">
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">
              {data.propertyInfo.totalBedrooms}
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">beds</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">
              {data.propertyInfo.totalBathrooms}
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">baths</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-white">
              {data.propertyInfo.squareFootage}
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">sqft</p>
          </div>
        </div>
      </div>
      <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
          <FiHome />
          <p className="text-zinc-700 dark:text-zinc-300">
            Single Family Residence, Residential
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
          <FiCalendar />
          <p className="text-zinc-700 dark:text-zinc-300">Built in 1993</p>
        </div>
        <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
          <FiMapPin />
          <p className="text-zinc-700 dark:text-zinc-300">
            {(data.propertyInfo.squareFootage / 43560).toFixed(2)} Acres lot
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
          <FiDollarSign />
          <p className="text-zinc-700 dark:text-zinc-300">
            $889,900 Zestimate®
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
          <FiSquare />
          <p className="text-zinc-700 dark:text-zinc-300">
            $ {data.propertyInfo.squareFootage}/sqft
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
          <FiMap />
          <p className="text-zinc-700 dark:text-zinc-300">$63/mo HOA</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col space-y-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          onClick={handleRequestTour}
        >
          Request a tour
        </button>
        <a
          href="#"
          className="text-blue-700 text-center py-3 rounded-lg font-semibold border border-blue-700"
        >
          Contact agent
        </a>
      </div>
    </div>
  );
}
