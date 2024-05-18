import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import HeroDownload from "./components/HeroDownload";
import CardSectionDownload from "./components/CardSectionDownload";
import RatingSection from "./components/RatingSection";
import CardSection2 from "./components/CardSection2";
import TextMobileSection from "./components/TextMobileSection";
import EligibleContentSection from "./components/EligibleContentSection";

const AppDownloadHome = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <HeroDownload />
      <CardSectionDownload />
      <RatingSection />
      <CardSection2 />
      <TextMobileSection />
      <EligibleContentSection />
      <Footer />
    </>
  );
};

export default AppDownloadHome;
