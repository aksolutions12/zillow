import React from "react";
import { Link } from "react-router-dom";

const BottomNav = ({ activeTab, scrollToSection }) => {
  const tabNames = [
    { name: "The Buying Process", link: "#buyingProcess" },
    { name: "Affordability Calculator", link: "#affordabilityCalculator" },
    { name: "Loan Options", link: "#loanOptions" },
    { name: "Refinance", link: "/homeloans/refinance" },
    { name: "My Dashboard", link: "#dashboard" },
  ];

  const handleClick = (link) => {
    scrollToSection(link);
  };

  return (
    <div className="flex flex-wrap justify-start p-4 bg-white">
      {tabNames.map(({ name, link }) => (
        <Link
          key={name}
          to={link}
          className={`tab text-blue-700 w-full sm:w-auto font-bold pl-4 lg:text-sm md:text-sm md:font-bold leading-tight md:leading-normal tracking-normal md:tracking-wide ${
            activeTab === name
              ? "font-bold text-blue-800 hover:text-blue-900 hover:underline"
              : "hover:text-blue-900 hover:underline"
          }`}
          onClick={() => handleClick(link)}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
