import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import HeroAgent from "./Components/HeroAgent";
import FindSection from "./Components/FindSection";
import AboutRecommendations from "../Home/AboutRecommendations";
import FindGuideSection from "./Components/FindGuideSection";
import findstory from "../../assets/images/find agent.png";
import logoUrl from "../../assets/images/zil-logo.png";

const Other = () => {
  const specialties = ["Appraisal", "Commercial", "Escrow"];
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomNav activeTab="Other" />
      <FindSection
        heading="Find a Real Estate Professional"
        placeholder="Professional Name"
        specialties={specialties}
      />
      ;
      <FindGuideSection
        imageUrl={findstory}
        title="Find professionals in your area."
        description="
        To get started, enter your location or search for a specific professional by name."
        resources={[]}
      />
      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default Other;
