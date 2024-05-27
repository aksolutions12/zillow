import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import logoUrl from "../../assets/images/zil-logo.png";
import HomeSearch from "./Components/HomeSearch";
import ListHomes from "./Components/ListHomes";
import MapSection from "./Components/MapSection";
import homeData from "../../data/homeData";

const Newconstruction = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <HomeSearch />
      <div className="flex w-full bg-white p-2">
        <div className="w-full lg:w-2/5 sticky top-0 h-screen overflow-y-auto lg:block hidden">
          <MapSection />
        </div>
        <div className="w-full lg:w-3/5 overflow-y-auto">
          <div className="h-screen overflow-y-auto">
            <ListHomes heading="New Construction" data={homeData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Newconstruction;
