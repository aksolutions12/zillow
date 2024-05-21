import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import AboutRecommendations from "../Home/AboutRecommendations";
import FindGuideSection from "./Components/FindGuideSection";
import BuilderSearch from "./Components/BuilderSearch";
import logoUrl from "../../assets/images/zil-logo.png";
import BuilderList from "./Components/BuilderList";

const Builder = () => {
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
      {!isMobile && <BottomNav hideOnMobile activeTab="Builders" />}
      <BuilderSearch heading="Find Home Builders" placeholder="Enter Name" />
      <Footer />
    </>
  );
};

export default Builder;
