import React from "react";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import Footer from "../../../../components/layout/Footer/Footer";
import logoUrl from "../../../../assets/images/zil-logo.png";
import BuilderBelownav from "../components/BuilderBelownav";
import HeroWithCard from "../Product/component/HeroWithCard";
import BuilderDashboard from "./component/BuilderDashboard";

const BuilderToolPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BuilderBelownav activeTab="Product" />
      <HeroWithCard
        title={"Builder Tools"}
        subtitle={
          "Platforms and programs to support and inform your Zillow marketing."
        }
        cardheading={"CONTACT US"}
      />
      <BuilderDashboard />

      <Footer />
    </>
  );
};

export default BuilderToolPage;
