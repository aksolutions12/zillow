import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import FindSection from "./Components/FindSection";
import AboutRecommendations from "../Home/AboutRecommendations";
import FindGuideSection from "./Components/FindGuideSection";
import findstory from "../../assets/images/find agent.png";
import logoUrl from "../../assets/images/zil-logo.png";

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
      <FindSection
        heading="Find a Home Improvement Professional"
        placeholder="Enter Professional Name"
        specialties={specialties}
      />
      ;
      <FindGuideSection
        imageUrl={findstory}
        title="Find professionals in your area."
        description="To get started, enter your location or search for a specific professional by name."
        resources={[
          "Whether you are looking for an interior designer, general contractor or an architect, our local directory of home improvement experts connects you to professionals who can help complete your project and provide home inspiration along the way.",
          "Finding the right home improvement pro can be a challenge, so it's important to choose someone with local expertise and specific skills to guide you through your project. You may be looking for a highly specialized individual, or someone with a more general suite of home improvement skills. No matter what type of home improvement or design needs you have, finding the professional you want to work with is the first step. The home improvement directory lets you view and compare professionals, read reviews, see completed projects, sort by speciality and contact the experts directly from their profile pages on Zillow.",
          "Zillow is the leading real estate and rental marketplace dedicated to empowering consumers with data, inspiration and knowledge around the place they call home, and connecting them with the best local professionals who can help.",
        ]}
      />
      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default HomeImproment;
