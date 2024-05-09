import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import FindSection from "./Components/FindSection";
import AboutRecommendations from "../Home/AboutRecommendations";
import FindGuideSection from "./Components/FindGuideSection";
import findstory from "../../assets/images/find agent.png";
import logoUrl from "../../assets/images/zil-logo.png";

const Inspecter = () => {
  const specialties = ["Pest Inspection", "General Inspection"];
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomNav activeTab="Inspectors" />
      <FindSection
        heading="Find home inspectors in your area."
        placeholder="Home Inspector Name"
        specialties={specialties}
      />
      ;
      <FindGuideSection
        imageUrl={findstory}
        title="Find property managers in your area."
        description="To get started, enter your location or search for a specific home inspector by name."
        resources={[
          "Anyone who knows real estate knows that a home can look great on the surface, but...what's lurking inside the walls? Home inspections can be the most nerve-wracking part of the buying process, but they don't have to be. Choosing a licensed inspector with a reputation for honesty and thoroughness can help ensure an inspection report that both buyer and seller can believe in.",
          "There's no better way to find the right certified inspector than with Zillow's directory of home inspectors. We have an extensive listing of home inspectors and home inspection companies, complete with reviews, profiles and contact information. You need home inspectors who understand the unique real estate market and know how to conduct a building inspection that meets the standards local buyers and sellers expect",
          "The real estate experts at Zillow offer powerful tools for finding home inspection companies that can identify potential problems before you proceed with your home purchase. Everyone will breathe easier when that home inspection report is complete, and it all starts right here at Zillow",
          "Zillow is the leading real estate and rental marketplace dedicated to empowering consumers with data, inspiration and knowledge around the place they call home, and connecting them with the best local professionals who can help.",
        ]}
      />
      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default Inspecter;
