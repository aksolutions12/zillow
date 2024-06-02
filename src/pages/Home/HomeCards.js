import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import img1 from "../../assets/images/home.jpg";
import img2 from "../../assets/images/hom2.jpg";

export default function HomeCards({ heading }) {
  const [heartIcons, setHeartIcons] = useState([false, false, false]); // Assuming you have three cards

  const toggleHeartIcon = (index) => {
    const newHeartIcons = [...heartIcons];
    newHeartIcons[index] = !newHeartIcons[index];
    setHeartIcons(newHeartIcons);
  };

  const homes = [
    {
      id: 1,
      image: img1, // Change this to your actual image path
      showcase: true, // Example showcase property
      price: "$500,000",
      beds: 3,
      baths: 2,
      sqft: 2000,
      status: "For Sale",
      location: "1234 Main St, City, Country",
      agency: "XYZ Realty",
    },
    {
      id: 2,
      image: img2, // Change this to your actual image path
      showcase: false, // Example showcase property
      price: "$700,000",
      beds: 4,
      baths: 2,
      sqft: 1500,
      status: "For Sale",
      location: "1234 Main St, City, Country",
      agency: "XYZ Realty",
    },
    {
      id: 3,
      image: img1, // Change this to your actual image path
      showcase: false, // Example showcase property
      price: "$600,000",
      beds: 4,
      baths: 2,
      sqft: 1500,
      status: "For Sale",
      location: "1234 Main St, City, Country",
      agency: "XYZ Realty",
    },
  ];

  return (
    <div className="p-6 bg-white dark:bg-zinc-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          {heading}
        </h2>
        <a href="#" className="text-blue-600 dark:text-blue-400">
          See all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homes.map((home, index) => (
          <div
            key={home.id}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <div className="relative">
              <img
                src={home.image}
                alt={`House ${home.id}`}
                className="w-full h-48 object-cover"
              />
              {home.showcase && (
                <div className="absolute top-2 left-2 bg-zinc-800 text-white text-xs px-2 py-1 rounded">
                  ✨ Showcase
                </div>
              )}
              <div className="absolute bg-transparent top-2 right-2 p-1 rounded-full ">
                <button onClick={() => toggleHeartIcon(index)}>
                  {heartIcons[index] ? (
                    <FaHeart size={30} color="red" />
                  ) : (
                    <FaRegHeart size={30} />
                  )}
                </button>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{home.price}</h2>
              <p className="text-zinc-600">
                {home.beds} bds | {home.baths} ba |{" "}
                <span className="font-bold">{home.sqft}</span> sqft -{" "}
                {home.status}
              </p>
              <p className="text-zinc-600">{home.location}</p>
              <p className="text-blue-500">{home.agency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
