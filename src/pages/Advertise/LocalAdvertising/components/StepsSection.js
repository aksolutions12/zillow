import React, { useState, useEffect } from "react";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import SmallScreenSteps from "./SmallScreenSteps";

const StepsSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust the width as needed for your definition of small screens
    };

    // Initial check on mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white px-10 py-16">
      <div>
        <h1 className="font-bold text-4xl text-center">
          5 Easy Steps to Launch a Campaign
        </h1>
      </div>
      {isSmallScreen ? <SmallScreenSteps /> : <HorizontalLinearStepper />}
    </div>
  );
};

export default StepsSection;
