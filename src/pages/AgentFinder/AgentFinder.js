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

const AgentFinder = () => {
  const specialties = ["Buyer's Agent", "Consulting"];
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomNav activeTab="Agents" />
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
      ;
      <FindGuideSection
        imageUrl={findstory}
        title="Find agents in your area."
        description="To get started, enter your location or search for a specific agent by name."
        resources={[
          "Whether you are looking to rent, buy or sell your home, Zillow's directory of local real estate agents and brokers connects you with professionals who can help meet your needs. Because the real estate market is unique, it's important to choose a real estate agent or broker with local expertise to guide you through the process of renting, buying or selling your next home. Our directory helps you find real estate professionals who specialize in buying, selling, foreclosures, or relocation - among many other options. Alternatively, you could work with a local agent or real estate broker who provides an entire suite of buying and selling services.",
          "No matter what type of real estate needs you have, finding the local real estate professional you want to work with is the first step. The real estate directory lets you view and compare real estate agents, read reviews, see an agent's current listings and past sales, and contact agents directly from their profile pages on Zillow.",
          "Zillow is the leading real estate and rental marketplace dedicated to empowering consumers with data, inspiration and knowledge around the place they call home, and connecting them with the best local professionals who can help.",
        ]}
      />
      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default AgentFinder;
