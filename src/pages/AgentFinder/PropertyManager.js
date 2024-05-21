import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import HeroAgent from "./Components/HeroAgent";
import FindSection from "./Components/FindSection";
import AboutRecommendations from "../Home/AboutRecommendations";
import FindGuideSection from "./Components/FindGuideSection";
import findstory from "../../assets/images/find agent.png";
import logoUrl from "../../assets/images/zil-logo.png";
import SearchManagers from "./SearchComponents/SearchManagers";

const PropertyManager = () => {
  const specialties = ["Landlord", "Vacation/Short-term Rentals"];

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
      <BottomNav activeTab="Property Managers" />
      <SearchManagers
        heading="Find a Property Manager"
        placeholder="Manager Name"
        specialties={specialties}
      />

      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default PropertyManager;
