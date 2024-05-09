import React from "react";
import { Link } from "react-router-dom";

const BottomNav = ({ activeTab }) => {
  const tabNames = [
    { name: "The Process", link: "/agentFinder/agents" },
    { name: "Affordability Calculator", link: "/agentFinder/homeimprovement" },
    { name: "Loans Options", link: "/agentFinder/builders" },
    { name: "Inspectors", link: "/agentFinder/inspectors" },
    { name: "Photographers", link: "/agentFinder/photographers" },
    { name: "Other", link: "/agentFinder/other" },
  ];

  return (
    <div className="flex flex-wrap justify-start p-4 bg-gray-100">
      {tabNames.map(({ name, link }) => (
        <Link
          key={name}
          to={link}
          className={`tab text-black w-full sm:w-auto font-normal pl-4 lg:text-base md:text-base md:font-normal leading-tight md:leading-normal tracking-normal md:tracking-wide ${
            activeTab === name ? "underline font-bold text-blue-800 " : ""
          }`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
