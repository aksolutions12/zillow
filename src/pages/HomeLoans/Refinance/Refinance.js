import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zhl-logo-default.png";
import FooterLoans from "../Component/FooterLoans";

const Refinance = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <FooterLoans />
    </>
  );
};

export default Refinance;
