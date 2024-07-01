import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function AddProperty({ heading }) {
  return (
    <div className="flex flex-col lg:flex-row  justify-between  p-4 bg-white">
      <h1 className="text-2xl font-bold text-foreground mb-2 font-serif">
        {heading}
      </h1>
      <div className="flex space-x-4">
        <Link to={"/postalisting"}>
          <button className="flex items-center font-semibold text-blue-700  text-primary-foreground px-3 py-1 rounded">
            <AiFillPlusCircle className="mr-2" size={25} />
            Add a property
          </button>
        </Link>
        <Link to={"/postalisting"}>
          <button className="flex items-center font-semibold text-blue-700  text-primary-foreground px-3 py-1 rounded">
            <AiFillPlusCircle className="mr-2" size={25} />
            Add feed
          </button>
        </Link>
      </div>
    </div>
  );
}
