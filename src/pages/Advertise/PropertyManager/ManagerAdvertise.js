import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import ManagerBelowNav from "./Components/ManagerBelowNav";
import HeroManager from "./Components/HeroManager";
import ChooseSolution from "./Components/ChooseSolution";
import SingleFamily from "./Components/SingleFamily";
import RowSection from "./Components/RowSection";
import IncludedSection from "./Components/IncludedSection";
import VideoSection from "./Components/VideoSection";
import LastHero from "./Components/LastHero";

const ManagerAdvertise = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <ManagerBelowNav />
      <HeroManager />
      <ChooseSolution />
      <SingleFamily />
      <RowSection />
      <IncludedSection />
      <VideoSection />
      <LastHero
        heading="Zillow Rental Property Advertising"
        paragraph="    It’s easier than ever to get renters in the door. Save time and stress
          — from start to finish — with Zillow Rentals."
      />
      <Footer />
    </>
  );
};

export default ManagerAdvertise;
