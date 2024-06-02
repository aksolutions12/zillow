import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import BuilderBelownav from "./components/BuilderBelownav";
import HeroNewConstruction from "./components/HeroNewConstruction";
import LaptopSection from "./components/LaptopSection";
import ConnectionCard from "./components/ConnectionCard";
import VideoSection from "./components/VideoSection";
import BuilderCarousel from "./components/BuilderCarousel";
import VideoCarSection from "./components/VideoCarSection";

const BuilderPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BuilderBelownav activeTab="Advertising" />
      <HeroNewConstruction />
      <LaptopSection />
      <ConnectionCard />
      <VideoSection />
      <BuilderCarousel />
      <VideoCarSection />
      <Footer />
    </>
  );
};

export default BuilderPage;
