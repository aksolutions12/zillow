import React from "react";
import NavbarRentalManager from "../../../components/layout/Navbar/NavbarRentalManager";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import AddProperty from "./components/AddProperty";
import ALPHomes from "./components/ALPHomes";

const LeaseManage = () => {
  return (
    <>
      <NavbarRentalManager logoUrl={logoUrl} />
      <AddProperty heading={"Select property for managing leases"} />
      <ALPHomes linkname={"leaseDetails"} />
      <Footer />
    </>
  );
};

export default LeaseManage;
