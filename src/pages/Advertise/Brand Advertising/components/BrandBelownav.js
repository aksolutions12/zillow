import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BrandBelownav = ({ activeTab }) => {
  const [activeButton, setActiveButton] = useState(activeTab);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // Scroll to the target section
    scrollToSection(buttonName);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isButtonActive = (buttonName) => {
    return activeButton === buttonName;
  };

  return (
    <div className="flex items-center p-4 border-b bg-white">
      <div className="flex flex-wrap items-center gap-4">
        <Link
          to="/brandadvertising"
          className={
            isButtonActive("Brand Advertising")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick("Brand Advertising")}
        >
          Brand Advertising
        </Link>
        <div className="relative group">
          <div className="flex items-center">
            <Link to="/mediaplacement">
              <button
                className={
                  isButtonActive("mediaPlacements")
                    ? "text-blue-500 underline focus:outline-none"
                    : "text-black focus:outline-none"
                }
                onClick={() => handleButtonClick("mediaPlacements")}
              >
                Media Placements
              </button>
            </Link>
            <span className="ml-1 text-blue-500 ">
              <FaChevronDown />
            </span>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <Link
              to="#native-search"
              className={
                isButtonActive("Native Search")
                  ? "block px-4 py-2 text-blue-500 hover:bg-zinc-100"
                  : "block px-4 py-2 text-blue-500 hover:bg-zinc-100"
              }
              onClick={() => handleButtonClick("Native Search")}
            >
              Native Search
            </Link>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Native Photo Gallery
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Native Property
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              StreetEasy Native
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Home Expenses
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Home Detail Flags
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Rich Media
            </a>
          </div>
        </div>
        <Link
          to="/customHome"
          className={
            isButtonActive("Custom Home Listing")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick("Custom Home Listing")}
        >
          Custom Home Listing
        </Link>
        <div className="relative group">
          <div className="flex items-center">
            <Link to="/adtargeting">
              <button
                className={
                  isButtonActive("adTargeting")
                    ? "text-blue-500 underline focus:outline-none"
                    : "text-black focus:outline-none"
                }
                onClick={() => handleButtonClick("adTargeting")}
              >
                Ad Targeting
              </button>
            </Link>
            <span className="ml-1 text-blue-500 ">
              <FaChevronDown />
            </span>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Buyers
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Renters
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Owners
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Sellers
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Speciality Audience
            </a>
          </div>
        </div>
        <div className="relative group">
          <div className="flex items-center">
            <Link to="/localAdvertising">
              <button
                className={
                  isButtonActive("Local Advertising")
                    ? "text-blue-500 underline focus:outline-none"
                    : "text-black focus:outline-none"
                }
                onClick={() => handleButtonClick("Local Advertising")}
              >
                Local Advertising
              </button>
            </Link>
            <span className="ml-1 text-blue-500 ">
              <FaChevronDown />
            </span>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              FAQ
            </a>
          </div>
        </div>
        <Link
          to="/getStarted"
          className={
            isButtonActive("Get Started")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick("Get Started")}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default BrandBelownav;
