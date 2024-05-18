import React from "react";
import NavbarBlog from "./NavbarBlog";

const TopSection = () => {
  return (
    <>
      <div className="bg-white flex flex-col  ">
        <NavbarBlog />

        <h1 className="text-black pl-5 mt-8">Zillow Premier Agent Blog</h1>
      </div>
      <hr className="border mt-6" />
    </>
  );
};

export default TopSection;
