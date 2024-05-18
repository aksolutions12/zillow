import React from "react";
import TopSection from "./Components/TopSection";
import ZillowPremiumFooter from "../components/ZillowPremiumFooter";
import Categories from "./Components/Categories";
import SearchSection from "./Components/SearchSection";
import ListBlogDesign from "./Components/ListBlogDesign";

const BlogHome = () => {
  return (
    <div className="bg-white">
      <div className="px-10 ">
        <TopSection />
        <SearchSection />
        <div className=" lg:flex ">
          <div className=" lg:w-7/12 ">
            <ListBlogDesign />
          </div>
          <div className="  lg:w-5/12 ">
            <Categories />
          </div>
        </div>

        <ZillowPremiumFooter />
      </div>
    </div>
  );
};

export default BlogHome;
