import React from "react";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import Footer from "../../../../components/layout/Footer/Footer";
import logoUrl from "../../../../assets/images/zil-logo.png";
import BuilderBelownav from "../components/BuilderBelownav";
import HeroWithCard from "../Product/component/HeroWithCard";
import CommunityRows from "./component/CommunityRows";
import ToolCarousel from "./component/ToolCarousel";
import BoostSection from "./component/BoostSection";

const BuilderDisoveryPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BuilderBelownav activeTab="Product" />
      <HeroWithCard
        title={"Buyer Discovery"}
        subtitle={
          "These tools help you reach high-intent buyers at the right time."
        }
        cardheading={"CONTACT US"}
      />
      <CommunityRows />
      <ToolCarousel />
      <CommunityRows />
      <BoostSection />
      <Footer />
    </>
  );
};

export default BuilderDisoveryPage;
