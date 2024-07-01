import React from "react";
import NavbarRentalManager from "../../../components/layout/Navbar/NavbarRentalManager";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import AddProperty from "./components/AddProperty";
import PropertisListsection from "./components/PropertisListsection";

const ManagerProperties = () => {
  return (
    <>
      <NavbarRentalManager logoUrl={logoUrl} />
      <AddProperty heading={"Properties"} />
      <PropertisListsection />
      <Footer />
    </>
  );
};

export default ManagerProperties;
