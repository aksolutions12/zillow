import { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BottomNavLearning() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      {/* Large screen layout */}
      <div className="hidden md:flex items-center gap-5 p-4 bg-white dark:bg-zinc-800 drop-shadow-xl">
        <Link to="/learn">
          <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Learning Center
          </span>
        </Link>
        <div className="border-l h-6 border-zinc-300 dark:border-zinc-700"></div>
        <nav className="flex gap-4 ">
          <Link to="/buying" className="text-blue-600 dark:text-blue-400">
            Buying
          </Link>
          <Link to="/renting" className="text-blue-600 dark:text-blue-400">
            Renting
          </Link>
          <Link to="/selling" className="text-blue-600 dark:text-blue-400">
            Selling
          </Link>
          <Link to="/financing" className="text-blue-600 dark:text-blue-400">
            Financing
          </Link>
          <Link to="/owning" className="text-blue-600 dark:text-blue-400">
            Owning
          </Link>
        </nav>
        <div className="flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-2 ml-auto">
          <FiSearch className="mr-2 text-blue-600 dark:text-blue-400" />
          <input
            type="text"
            placeholder="Search Learning Center"
            className="bg-transparent text-blue-600 dark:text-blue-400 placeholder-blue-600 dark:placeholder-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Small and medium screen layout */}
      <div className="relative md:hidden">
        <div className="flex items-center justify-between gap-5 p-4 bg-white dark:bg-zinc-800">
          <span
            className={`text-base font-semibold ${
              showLinks ? "text-blue-600" : "text-zinc-900"
            } dark:text-zinc-100 cursor-pointer relative`}
            onClick={toggleLinks}
          >
            Learning Center
            <FiChevronDown className="inline-block ml-1" />
            {showLinks && (
              <div className="absolute top-full left-0 mt-2 p-4 bg-white dark:bg-zinc-800 w-full border-t border-gray-300 dark:border-gray-700 z-50">
                <Link
                  to="/buying"
                  className="block py-2 text-blue-600 dark:text-blue-400"
                >
                  Buying
                </Link>
                <Link
                  to="/renting"
                  className="block py-2 text-blue-600 dark:text-blue-400"
                >
                  Renting
                </Link>
                <Link
                  to="/selling"
                  className="block py-2 text-blue-600 dark:text-blue-400"
                >
                  Selling
                </Link>
                <Link
                  to="/financing"
                  className="block py-2 text-blue-600 dark:text-blue-400"
                >
                  Financing
                </Link>
                <Link
                  to="/owning"
                  className="block py-2 text-blue-600 dark:text-blue-400"
                >
                  Owning
                </Link>
              </div>
            )}
          </span>
          <div className="flex-shrink">
            <div className="flex items-center bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-2">
              <FiSearch className="mr-2 text-blue-600 dark:text-blue-400" />
              <input
                type="text"
                placeholder="Search Learning Center"
                className="bg-transparent text-blue-600 dark:text-blue-400 placeholder-blue-600 dark:placeholder-blue-400 focus:outline-none w-24 md:w-40"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
