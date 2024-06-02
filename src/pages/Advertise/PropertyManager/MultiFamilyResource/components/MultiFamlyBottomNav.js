import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MultiFamlyBottomNav = ({ activeTab }) => {
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
          to="/newconstructioncenter"
          className={
            isButtonActive("Multifamily Resource Center")
              ? "text-blue-500 underline font-bold"
              : "text-blue-500  font-bold"
          }
          onClick={() => handleButtonClick("Multifamily Resource Center")}
        >
          Multifamily Resource Center
        </Link>

        <div className="relative group">
          <div className="flex items-center">
            <Link to="/rentalMarketing">
              <button
                className={
                  isButtonActive("Rental Marketing")
                    ? "text-blue-500 underline focus:outline-none"
                    : "text-black focus:outline-none"
                }
                onClick={() => handleButtonClick("Rental Marketing")}
              >
                Rental Marketing
              </button>
            </Link>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <Link
              to="/emailMarketing"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Email Marketing
            </Link>
            <Link
              to="/socialMarketing"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Social Marketing
            </Link>
            <Link
              to="/generalMarketing"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              General Marketing
            </Link>
          </div>
        </div>

        <div className="relative group">
          <div className="flex items-center">
            <Link to="/propertyManagement">
              <button
                className={
                  isButtonActive("Property Management")
                    ? "text-blue-500 underline focus:outline-none"
                    : "text-black focus:outline-none"
                }
                onClick={() => handleButtonClick("Property Management")}
              >
                Property Management
              </button>
            </Link>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <Link
              to="/residentEngagement"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Resident Engagement
            </Link>

            <Link
              to="/generalMarketing"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              General Marketing
            </Link>
          </div>
        </div>

        <Link
          to="/trainingandDevelopment"
          className={
            isButtonActive("Training and Development")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick("Training and Development")}
        >
          Training and Development
        </Link>

        <div className="relative group">
          <div className="flex items-center">
            <Link to="/renterInsights">
              <button
                className={
                  isButtonActive("Renter Insights")
                    ? "text-blue-500 underline focus:outline-none"
                    : "text-black focus:outline-none"
                }
                onClick={() => handleButtonClick("Renter Insightss")}
              >
                Renter Insights
              </button>
            </Link>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <Link
              to="/marketTrend"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Market Trend
            </Link>
            <Link
              to="/multifamilySucessStories"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiFamlyBottomNav;
