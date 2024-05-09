import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import HeroSection from "./HeroSection";
import Card2 from "../../components/Card/Card2";
import CardsSection from "./CardsSection";
import TargetAudienceSection from "./TargetAudienceSection";
import AudiencCustomer from "./AudiencCustomer";
import logoUrl from "../../assets/images/zil-logo.png";
const Advertise = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <HeroSection />
      <CardsSection />
      <TargetAudienceSection />
      <AudiencCustomer />
      <Footer />
    </>
  );
};

export default Advertise;
