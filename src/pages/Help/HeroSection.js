import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import porch from "../../assets/images/womenonporch.jpg";
const HeroSection = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${porch})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 py-32 relative ">
          <div className="max-w-2xl mx-auto ">
            <div className="flex items-center bg-white  rounded-full overflow-hidden shadow-lg">
              <SearchIcon className="h-6 w-6 text-zinc-700 ml-2" />
              <input
                type="text"
                placeholder="Search"
                className="flex-grow py-2 px-4 text-zinc-700 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
