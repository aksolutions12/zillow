import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import RespNav from "./RespNav";

const NavbarAgent = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSolution, setOpenSolution] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openTraining, setOpenTraining] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setMobileMenuOpen(false);
    };

    // Initial check
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-transparent text-white p-4 flex justify-between pt-8 items-center relative">
      <div className="text-xl font-bold">Zillow PREMIER AGENT</div>
      <div className="lg:hidden">
        {openMenu ? (
          <RiCloseLine
            className="text-white text-2xl cursor-pointer"
            onClick={handleMenuToggle}
          />
        ) : (
          <AiOutlineMenu
            className="text-white text-2xl cursor-pointer"
            onClick={handleMenuToggle}
          />
        )}
      </div>

      {isMobile && openMenu && <RespNav closeMenu={handleMenuToggle} />}

      <div className="hidden lg:flex gap-8">
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
            <Link
              to="/agentPremium/agentSolution" // Specify the desired route
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Agent Solution
            </Link>
            <Link
              to="/agentPremium/teamSolution" // Specify the desired route
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Team Solution
            </Link>
            <Link
              to="/agentPremium/brokerSolution" // Specify the desired route
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Broker Solution
            </Link>
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
            <Link
              to="/agentResources/blog" // Specify the desired route
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Blog
            </Link>
            <Link
              to="/agentPremium/agentToolkit" // Specify the desired route
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Agent Toolkit
            </Link>
            <Link
              to="/agentPremium/allResources" // Specify the desired route
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              All Resources
            </Link>
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
            <Link
              to="/agentPremium/webinars" // Specify the desired route
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Webinars
            </Link>
            <Link
              to="/agentPremium/courses" // Specify the desired route
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Courses
            </Link>
            <Link
              to="/agentPremium/events" // Specify the desired route
              className="block px-4 py-2 hover:bg-blue-100 hover:rounded-lg"
            >
              Events
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        <Link
          to="/agentPremium/signin"
          className="text-white text-sm hover:text-blue-800"
        >
          Sign In
        </Link>
        <span className="text-white text-xs">|</span>
        <Link
          to="/agentPremium/joinnow"
          className="text-white  text-sm hover:text-blue-800"
        >
          Join Now
        </Link>
      </div>
      <Link
        to="/agentPremium/contactus" // Specify the desired route
        className="hidden lg:block bg-blue-700 py-2 px-6 rounded-lg hover:bg-blue-800"
      >
        Contact us
      </Link>
    </nav>
  );
};

export default NavbarAgent;
