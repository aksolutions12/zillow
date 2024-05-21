import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import AboutRecommendations from "../Home/AboutRecommendations";
import logoUrl from "../../assets/images/zil-logo.png";
import SearchOther from "./SearchComponents/SearchOther";

const Other = () => {
  const specialties = ["Appraisal", "Commercial", "Escrow"];
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
      <BottomNav activeTab="Other" />
      <SearchOther
        heading="Find a Real Estate Professional"
        placeholder="Professional Name"
        specialties={specialties}
      />

      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default Other;
