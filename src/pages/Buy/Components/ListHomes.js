import React, { useState, useRef, useEffect } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Footer from "../../../components/layout/Footer/Footer";
import { Link } from "react-router-dom";

export default function ListHomes({ heading, dbData }) {
  const [sortIcon, setSortIcon] = useState("down");
  const [heartIcons, setHeartIcons] = useState(
    Array(dbData.length).fill(false)
  );
  const [selectedSort, setSelectedSort] = useState("Homes for You");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSortIcon = () => {
    setSortIcon((prevIcon) => (prevIcon === "down" ? "up" : "down"));
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortSelection = (option) => {
    setSelectedSort(option);
    setIsDropdownOpen(false);
  };

  const toggleHeartIcon = (index, e) => {
    e.preventDefault(); // Prevent navigation
    setHeartIcons((prevIcons) => {
      const newIcons = [...prevIcons];
      newIcons[index] = !newIcons[index];
      return newIcons;
    });
  };
  return (
    <div className="bg-white p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">{heading}</h1>
          <p className="text-zinc-600">{dbData.length} results</p>
        </div>

        <div className="relative">
          <div
            className="flex items-center pt-8 text-blue-500 cursor-pointer"
            onClick={toggleSortIcon}
          >
            Sort: {selectedSort}{" "}
            {isDropdownOpen ? (
              <FiChevronUp size={25} />
            ) : (
              <FiChevronDown size={25} />
            )}
          </div>
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md z-10"
              ref={dropdownRef}
            >
              <button
                className="block w-full py-2 px-4 text-left hover:bg-gray-100"
                onClick={() => handleSortSelection("Homes for You")}
              >
                Homes for You
              </button>
              <button
                className="block w-full py-2 px-4 text-left hover:bg-gray-100"
                onClick={() => handleSortSelection("Price (Low to High)")}
              >
                Price (Low to High)
              </button>
              <button
                className="block w-full py-2 px-4 text-left hover:bg-gray-100"
                onClick={() => handleSortSelection("Price (High to Low)")}
              >
                Price (High to Low)
              </button>
              <button
                className="block w-full py-2 px-4 text-left hover:bg-gray-100"
                onClick={() => handleSortSelection("Newest")}
              >
                Newest
              </button>
              <button
                className="block w-full py-2 px-4 text-left hover:bg-gray-100"
                onClick={() => handleSortSelection("Bedrooms")}
              >
                Bedrooms
              </button>
              <button
                className="block w-full py-2 px-4 text-left hover:bg-gray-100"
                onClick={() => handleSortSelection("Bathrooms")}
              >
                Bathrooms
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {dbData.map((home, index) => (
          <Link key={home.id} to={`/singlehome/${home.postId}`}>
            <div className="border rounded-lg overflow-hidden shadow-sm  h-full">
              <div className="relative">
                <img
                  src={home.media.selectedFiles[0]}
                  alt={`House ${home.id}`}
                  className="w-full h-48 object-cover"
                />
                {home.showcase && (
                  <div className="absolute top-2 left-2 bg-zinc-800 text-white text-xs px-2 py-1 rounded">
                    ✨ Showcase
                  </div>
                )}
                <div className="absolute bg-transparent top-2 right-2 p-1 rounded-full ">
                  <button onClick={(e) => toggleHeartIcon(index, e)}>
                    {heartIcons[index] ? (
                      <FaHeart size={30} color="red" />
                    ) : (
                      <FaRegHeart size={30} />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">
                  ${home.listingDetails.monthlyRent}
                </h2>
                <p className="text-zinc-600">
                  {home.propertyInfo.totalBedrooms} bds |{" "}
                  {home.propertyInfo.totalBathrooms} ba |{" "}
                  <span className="font-bold">
                    {home.propertyInfo.squareFootage}
                  </span>{" "}
                  sqft - {home.propertyInfo.propertyType}
                </p>
                <p className="text-zinc-600">
                  {home.propertyInfo.streetAddress}
                </p>
                <p className="text-blue-500">{home.finalDetails.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
