import React from "react";
import { Link } from "react-router-dom";

const BottomNav = ({ activeTab }) => {
  const tabNames = [
    { name: "The Buying Process", link: "/agentFinder/agents" },
    { name: "Affordability Calculator", link: "/agentFinder/homeimprovement" },
    { name: "Loans Options", link: "/agentFinder/builders" },
    { name: "Refinance", link: "/agentFinder/inspectors" },
    { name: "My Dashboard", link: "/agentFinder/photographers" },
  ];

  return (
    <div className="flex flex-wrap justify-start p-4 bg-gray-100">
      {tabNames.map(({ name, link }) => (
        <Link
          key={name}
          to={link}
          className={`tab text-blue-700 w-full sm:w-auto font-bold pl-4 lg:text-base md:text-base md:font-sbold leading-tight md:leading-normal tracking-normal md:tracking-wide ${
            activeTab === name
              ? "font-bold text-blue-800 hover:text-blue-900 hover:underline"
              : "hover:text-blue-900 hover:underline"
          }`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
