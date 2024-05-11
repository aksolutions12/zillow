import React, { useState } from "react";

const NavbarAgent = () => {
  const [openSolution, setOpenSolution] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openTraining, setOpenTraining] = useState(false);

  const handleSolutionHover = () => {
    setOpenSolution(true);
  };

  const handleSolutionLeave = () => {
    setOpenSolution(false);
  };

  const handleResourcesHover = () => {
    setOpenResources(true);
  };

  const handleResourcesLeave = () => {
    setOpenResources(false);
  };

  const handleTrainingHover = () => {
    setOpenTraining(true);
  };

  const handleTrainingLeave = () => {
    setOpenTraining(false);
  };

  return (
    <nav className="bg-transparent text-white p-4 flex justify-between pt-8 items-center relative">
      <div className="text-xl font-bold">Zillow PREMIER AGENT</div>
      <div className="flex gap-8">
        <div
          className="group relative"
          onMouseEnter={handleSolutionHover}
          onMouseLeave={handleSolutionLeave}
        >
          <button className="py-2 px-4 hover:bg-white rounded-lg text-white hover:text-blue-800 flex items-center">
            Solutions{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-4 h-4 ml-1 ${
                openSolution ? "transform rotate-180" : ""
              } `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            className={`absolute ${
              openSolution ? "block" : "hidden"
            } bg-white text-blue-800 mt-1 p-2 w-44 rounded-lg`}
          >
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Agent Solution
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Team Solution
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Broker Solution
            </a>
          </div>
        </div>
        <div
          className="group relative"
          onMouseEnter={handleResourcesHover}
          onMouseLeave={handleResourcesLeave}
        >
          <button className="py-2 px-4 hover:bg-white rounded-lg text-white hover:text-blue-800 flex items-center">
            Resources{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-4 h-4 ml-1 ${
                openResources ? "transform rotate-180" : ""
              } `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            className={`absolute ${
              openResources ? "block" : "hidden"
            } bg-white text-blue-800 mt-1 p-2 w-44 rounded-lg`}
          >
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Blog
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Agent Toolkit
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              All Resources
            </a>
          </div>
        </div>
        <div
          className="group relative"
          onMouseEnter={handleTrainingHover}
          onMouseLeave={handleTrainingLeave}
        >
          <button className="py-2 px-4 hover:bg-white rounded-lg text-white hover:text-blue-800 flex items-center">
            Training{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-4 h-4 ml-1 ${
                openTraining ? "transform rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            className={`absolute ${
              openTraining ? "block" : "hidden"
            } bg-white text-blue-800 mt-1 p-2 w-44 rounded-lg`}
          >
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Webinars
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Courses
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Events
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 flex items-center space-x-4 mr-8">
        <a href="#" className="text-white text-sm hover:text-blue-800">
          Sign In
        </a>
        <span className="text-white text-xs">|</span>
        <a href="#" className="text-white  text-sm hover:text-blue-800">
          Join Now
        </a>
      </div>
      <button className="bg-blue-700 py-2 px-6 rounded-lg hover:bg-blue-800">
        Contact us
      </button>
    </nav>
  );
};

export default NavbarAgent;
