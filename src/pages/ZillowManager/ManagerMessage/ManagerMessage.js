import React from "react";
import NavbarRentalManager from "../../../components/layout/Navbar/NavbarRentalManager";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import FilterSection from "./components/FilterSection";

const ManagerMessage = () => {
  return (
    <>
      <NavbarRentalManager logoUrl={logoUrl} />
      <FilterSection />
    </>
  );
};

export default ManagerMessage;
