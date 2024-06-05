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

const BuyingPage = () => {
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
      <LearningCarousel heading="Buying Resources " />

      <HorizontalCards headname="Market Trends" data={data} />
      <FinanceDesign
        headname="Buyer Stories"
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
      <DownloadSection
        imageUrl={house2img}
        title="A local agent can help you stay competitive on a budget."
        description="They’ll help you get an edge without stretching your finances."
        buttonText="Talk to an Local Agent"
      />

      <HorizontalCards headname="Buying Advice" data={data} />
      <ThreeCards heading="The Closing Process" />
      <FinanceDesign
        headname="Types of Homes"
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
      <ThreeCards heading="Search Tips" />
      <ThreeCards heading="First-Time Home Buyer Guide" />
      <HorizontalCards headname="Most Recent" data={data} />
      <AboutRecommendations />

      <Footer />
    </>
  );
};

export default BuyingPage;
