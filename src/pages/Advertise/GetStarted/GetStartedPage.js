import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import BrandBelownav from "../Brand Advertising/components/BrandBelownav";
import HeroGetStarted from "./components/HeroGetStarted";

const GetStartedPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BrandBelownav activeTab="Get Started" />
      <HeroGetStarted />

      <Footer />
    </>
  );
};

export default GetStartedPage;
