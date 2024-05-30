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

const RentingPage = () => {
  const data = [
    {
      imageUrl: houseimg,
      duration: "13 min read",
      title: "10 Steps to Buying a House",
    },
    {
      imageUrl: house2img,
      duration: "7 min read",
      title:
        "6 Causes of Buyer's Remorse After Buying a House, According to Homeowners",
    },
    {
      imageUrl: houseimg,
      duration: "13 min read",
      title: "10 Steps to Buying a House",
    },
    {
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
      <LearningCarousel heading="Renting Resources " />

      <HorizontalCards headname="Rental Search" data={data} />
      <DownloadSection
        imageUrl={house2img}
        title="Find an apartment you’ll love on Zillow"
        description="With Zillions of up-to-date listings and filters for your must-haves, it's easy to find your perfect apartment on Zillow Rentals"
        buttonText="Search Rental"
      />
      <FinanceDesign
        headname="
        Making it Yours"
        leftCardData={{
          imageUrl: houseimg,
          duration: "9 min read",
          title:
            "How to Afford a House: 17 Ways to Understand and Unlock Your Home Buying Power",
          description: "Resources to help make owning a home a reality.",
        }}
        rightCardsData={[
          {
            imageUrl: house2img,
            duration: "5 min read",
            title: "21 Creative Ways to Save Money for a Home Down Payment",
          },
          {
            imageUrl: houseimg,
            duration: "7 min read",
            title: "How to Qualify for a Mortgage",
          },
          {
            imageUrl: house,
            duration: "8 min read",
            title: "Earn A Higher Credit Score in 8 Steps",
          },
        ]}
      />

      <AboutRecommendations />

      <Footer />
    </>
  );
};

export default RentingPage;
