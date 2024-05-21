import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import AboutRecommendations from "../Home/AboutRecommendations";
import logoUrl from "../../assets/images/zil-logo.png";
import SearchImprovement from "./SearchComponents/SearchImprovement";

const HomeImproment = () => {
  const [isMobile, setIsMobile] = useState(false);
  const specialties = ["Engineering", "Carpentry"];

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
      {!isMobile && <BottomNav hideOnMobile activeTab="Home Improvement" />}
      <SearchImprovement
        heading="Find a Home Improvement Professional"
        placeholder="Enter Professional Name"
        specialties={specialties}
      />

      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default HomeImproment;
