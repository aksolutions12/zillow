import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import logoUrl from "../../assets/images/zil-logo.png";
import BottomNavLearning from "./Components/BottomNavLearning";
import HorizontalCards from "./Components/HorizontalCards";
import LearningCarousel from "./Components/LearningCarousel";
import FinanceDesign from "./Components/FinanceDesign";
import houseimg from "../../assets/images/hom2.jpg";
import house2img from "../../assets/images/home.jpg";
import house from "../../assets/images/womenonporch.jpg";
import DownloadSection from "./Components/DownloadSection";
import ThreeCards from "./Components/ThreeCards";
import AboutRecommendations from "../Home/AboutRecommendations";

const FinancingPage = () => {
  const data = [
    {
      id: 1,
      imageUrl: houseimg,
      duration: "13 min read",
      title: "10 Steps to Buying a House",
    },
    {
      id: 2,
      imageUrl: house2img,
      duration: "7 min read",
      title:
        "6 Causes of Buyer's Remorse After Buying a House, According to Homeowners",
    },
    {
      id: 3,
      imageUrl: houseimg,
      duration: "13 min read",
      title: "10 Steps to Buying a House",
    },
    {
      id: 4,
      imageUrl: house2img,
      duration: "7 min read",
      title:
        "6 Causes of Buyer's Remorse After Buying a House, According to Homeowners",
    },
    // Add more data objects as needed
  ];
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomNavLearning />
      <LearningCarousel heading="Financing Resources " />
      <ThreeCards heading="Financing Options" />

      <DownloadSection
        imageUrl={house2img}
        title="How much home can you afford?"
        description="With Zillions of up-to-date listings and filters for your must-haves, it's easy to find your perfect apartment on Zillow Rentals"
        buttonText="Get Pre-Qualified"
      />
      <HorizontalCards headname="Credit and Debt" data={data} />

      <ThreeCards heading="Mortgages 101" />

      <AboutRecommendations />

      <Footer />
    </>
  );
};

export default FinancingPage;
