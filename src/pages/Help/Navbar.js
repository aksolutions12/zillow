import React from "react";
import logo from "../../assets/images/zil-logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-6 flex items-center">
                <img src={logo} alt="Zillow logo" className="h-8" />
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="text-zinc-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
