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
import SearchPhotographer from "./SearchComponents/SearchPhotographer";

const Photographers = () => {
  const specialties = [
    "Any",
    "Zillow Video Walkthrough",
    "Zillow Selected Photographer",
  ];

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
      {!isMobile && <BottomNav hideOnMobile activeTab="Photographers" />}
      <HeroAgent
        title="Elevate your listings with immersive media"
        subtitle="Listing Media Services empowers agents to capture the true essence of a home with high-quality media. From stunning high-quality photography, virtual tours, and complementary interactive floor plans."
        buttonText="Explore Media plans"
      />
      <SearchPhotographer
        heading="Find a Photographer"
        placeholder=" Photographers Name"
        specialties={specialties}
      />

      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default Photographers;
