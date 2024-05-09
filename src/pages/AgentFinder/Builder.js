import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import AboutRecommendations from "../Home/AboutRecommendations";
import FindGuideSection from "./Components/FindGuideSection";
import findstory from "../../assets/images/find agent.png";
import BuilderSearch from "./Components/BuilderSearch";
import logoUrl from "../../assets/images/zil-logo.png";

const Builder = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomNav activeTab="Builders" />
      <BuilderSearch heading="Find Home Builders" placeholder="Enter Name" />
      <FindGuideSection
        imageUrl={findstory}
        title="Find home builders in your area"
        description="To get started, enter your location or search for a specific home builder by name."
        resources={[]}
      />
      <Footer />
    </>
  );
};

export default Builder;
