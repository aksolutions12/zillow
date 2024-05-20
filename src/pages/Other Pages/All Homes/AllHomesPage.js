import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import SearchSection from "./components/SearchSection";
import CitiesSection from "./components/CitiesSection";
import PopularCitiesSection from "./components/PopularCitiesSection";

const AllHomesPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <SearchSection />
      <div className="flex flex-col lg:flex-row p-2 px-5 bg-white ">
        <div className="w-full lg:w-1/2">
          <CitiesSection />
        </div>
        <div className="w-full lg:w-1/2">
          <PopularCitiesSection />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllHomesPage;
