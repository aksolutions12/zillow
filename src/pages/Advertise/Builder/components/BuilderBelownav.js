import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BuilderBelownav = ({ activeTab }) => {
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
            isButtonActive("New Constrcution")
              ? "text-blue-500 underline font-bold"
              : "text-blue-500  font-bold"
          }
          onClick={() => handleButtonClick("New Constrcution")}
        >
          New Constrcution Resource Center
        </Link>

        <Link
          to="/newconstructionadvertising"
          className={
            isButtonActive("Advertising")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick("Advertising")}
        >
          Advertising
        </Link>

        <Link
          to="/newsanddata"
          className={
            isButtonActive("News and Data")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick("News and Data")}
        >
          News and Data
        </Link>

        <Link
          to="/marketingtips"
          className={
            isButtonActive("Marketing Tips")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick("Marketing Tips")}
        >
          Marketing Tips
        </Link>

        <Link
          to="/successStories"
          className={
            isButtonActive("Success Stories")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick("Success Stories")}
        >
          Success Stories
        </Link>

        <Link
          to="/training"
          className={
            isButtonActive("Training")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick("Training")}
        >
          Training
        </Link>

        <Link
          to="/webinars"
          className={
            isButtonActive(" Webinars")
              ? "text-blue-500 underline"
              : "text-black"
          }
          onClick={() => handleButtonClick(" Webinars")}
        >
          Webinars
        </Link>

        <div className="relative group">
          <div className="flex items-center">
            <Link to="/productadvertising">
              <button
                className={
                  isButtonActive("Product")
                    ? "text-blue-500 underline focus:outline-none"
                    : "text-black focus:outline-none"
                }
                onClick={() => handleButtonClick("Product")}
              >
                Product
              </button>
            </Link>
            <span className="ml-1 text-blue-500 ">
              <FaChevronDown />
            </span>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <Link
              to="/builderTool"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Builder Tools
            </Link>
            <Link
              to="/builderDiscovery"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Buyer Discovery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderBelownav;
