import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import HeroAgent from "./Components/HeroAgent";
import FindSection from "./Components/FindSection";
import AboutRecommendations from "../Home/AboutRecommendations";
import FindGuideSection from "./Components/FindGuideSection";
import logoUrl from "../../assets/images/zil-logo.png";
import AgentList from "./Components/AgentList";

const AgentFinder = () => {
  const specialties = ["Buyer's Agent", "Consulting"];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar logoUrl={logoUrl} />
      {!isMobile && <BottomNav hideOnMobile activeTab="Agents" />}
      <HeroAgent
        title="A great agent makes all the difference"
        subtitle="There's a reason 89% of buyers used an agent last year — a local agent has the inside scoop on your market and can guide you through the buying process from start to finish."
        buttonText="Connect with a local agent"
      />
      <FindSection
        heading="Find Agents"
        placeholder="Enter Agent Name"
        specialties={specialties}
      />

      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default AgentFinder;
