import React from "react";
import ListFreeCard from "./ListFreeCard";
import porch from "../../../../assets/images/womenonporch.jpg";

const HeroListing = () => {
  return (
    <div
      className="bg-cover bg-center  flex items-center justify-center"
      style={{ backgroundImage: `url(${porch})` }}
    >
      <div className=" p-5">
        <ListFreeCard />
      </div>
    </div>
  );
};

export default HeroListing;
