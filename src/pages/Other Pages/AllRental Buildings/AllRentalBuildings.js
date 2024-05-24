import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import StatesSection from "./StatesSection";
import logoUrl from "../../../assets/images/zil-logo.png";

const AllRentalBuildings = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <div className="font-bold text-3xl bg-white p-5">
        {" "}
        <h1>Browse Rental Buildings by State/Province</h1>
      </div>
      <div className="bg-white">
        <StatesSection />
      </div>

      <Footer />
    </>
  );
};

export default AllRentalBuildings;
