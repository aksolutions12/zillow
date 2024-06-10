import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import HiddenSection from "./components/HiddenSection";

const HiddenhomesPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <HiddenSection />

      <Footer />
    </>
  );
};

export default HiddenhomesPage;
