import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import RentCalculator from "./components/RentCalculator";
import FindYourRental from "./components/FindYourRental";
import RentalCities from "./components/RentalCities.js";

const RentAffordability = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <RentCalculator />
      <FindYourRental />
      <RentalCities />

      <Footer />
    </>
  );
};

export default RentAffordability;
