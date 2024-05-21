import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import FindSection from "./Components/FindSection";
import AboutRecommendations from "../Home/AboutRecommendations";
import logoUrl from "../../assets/images/zil-logo.png";
import SearchImprovement from "./SearchComponents/SearchImprovement";

const Inspecter = () => {
  const specialties = ["Pest Inspection", "General Inspection"];
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
      {!isMobile && <BottomNav hideOnMobile activeTab="Inspectors" />}
      <SearchImprovement
        heading="Find home inspectors in your area."
        placeholder="Home Inspector Name"
        specialties={specialties}
      />

      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default Inspecter;
