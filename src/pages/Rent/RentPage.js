import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import logoUrl from "../../assets/images/zil-logo.png";
import homeData from "../../data/homeData";
import MapSection from "../Buy/Components/MapSection";
import ListHomes from "../Buy/Components/ListHomes";
import HomeSearch from "../Buy/Components/HomeSearch";
const RentPage = () => {
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
            <ListHomes heading="Rental Listing" data={homeData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RentPage;
