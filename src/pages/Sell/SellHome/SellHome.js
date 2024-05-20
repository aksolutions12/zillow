import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import SellHero from "./Components/SellHero";
import Sellpartner from "./Components/Sellpartner";
import Selltraditionally from "./Components/Selltraditionally";
import Sellyourself from "./Components/Sellyourself";
import GoToResource from "./Components/GoToResource";
import ExploreSection from "./Components/ExploreSection";
import QuestionSell from "./Components/QuestionSell";
import TabsSection from "./Components/TabsSection";
import TabsWithHeadings from "./Components/TabsWithHeadings";

const SellHome = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <SellHero />
      <Sellpartner />
      <Selltraditionally />
      <Sellyourself />
      <GoToResource />
      <ExploreSection />
      <TabsWithHeadings />
      <QuestionSell />
      <Footer />
    </>
  );
};

export default SellHome;
