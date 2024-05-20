import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import HeroSection from "./components/HeroSection";
import WorthQuestions from "./components/WorthQuestions";

const WorthPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <HeroSection />
      <WorthQuestions />
      <Footer />
    </>
  );
};

export default WorthPage;
