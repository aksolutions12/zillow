import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../ContextApi/AuthContext";

const ZillowManagerBelowNav = ({ activeTab }) => {
  const [activeButton, setActiveButton] = useState(activeTab);
  const { isLoggedIn, logout } = useAuth();

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
        <div className="relative group">
          <div className="flex items-center">
            <Link to="/zillowrentalManager">
              <button
                className={
                  isButtonActive("Zillow Rental Manager")
                    ? "text-blue-500 font-bold underline focus:outline-none"
                    : "text-blue-500 font-bold focus:outline-none"
                }
                onClick={() => handleButtonClick("Zillow Rental Manager")}
              >
                Zillow Rental Manager
              </button>
            </Link>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <Link
              to="/rentListings"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Rental Listings
            </Link>
            <Link
              to="/tenantscreening"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Tenant Screening
            </Link>
            <Link
              to="/onlineLease"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Online Leases
            </Link>
            <Link
              to="/rentPayment"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Rent Payments
            </Link>
          </div>
        </div>

        <div className="relative group">
          <div className="flex items-center">
            <Link to="/managerRentalResources">
              <button
                className={
                  isButtonActive("Resources")
                    ? "text-blue-500 underline focus:outline-none"
                    : "text-black focus:outline-none"
                }
                onClick={() => handleButtonClick("Resources")}
              >
                Resources
              </button>
            </Link>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <Link
              to="/landlordingBasics"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Landlording Basics
            </Link>

            <Link
              to="/toolsandForms"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Tools & Forms
            </Link>

            <Link
              to="/managingYourRental"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Managing Your Rental
            </Link>

            <Link
              to="/landlordLawsandRegulations"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Landlord Laws & Regulations
            </Link>

            <Link
              to="/generalMarketing"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Market Trends
            </Link>
          </div>
        </div>

        <Link
          to="/priceMyRental"
          className={
            isButtonActive("Price My Rental")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick("Price My Rental")}
        >
          Price My Rental
        </Link>
        {isLoggedIn ? (
          <Link
            to="/post"
            className={
              isButtonActive("Post a Listing")
                ? "text-blue-500 underline"
                : "text-black"
            }
            onClick={() => handleButtonClick("Post a Listing")}
          >
            Post a Listing
          </Link>
        ) : (
          <Link
            to="/managerlogin"
            className={
              isButtonActive("Post a Listing")
                ? "text-blue-500 underline"
                : "text-black"
            }
            onClick={() => handleButtonClick("Post a Listing")}
          >
            Post a Listing
          </Link>
        )}
      </div>
    </div>
  );
};

export default ZillowManagerBelowNav;
