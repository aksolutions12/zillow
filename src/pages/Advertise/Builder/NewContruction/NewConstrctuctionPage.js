import React from "react";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import Footer from "../../../../components/layout/Footer/Footer";
import logoUrl from "../../../../assets/images/zil-logo.png";
import HeroText from "./components/HeroText";
import BuilderBelownav from "../components/BuilderBelownav";
import ResourceCards from "./components/ResourceCards";
import img1 from "../../../../assets/images/realestate.jpg";
import img2 from "../../../../assets/images/family_on_computer.png";
import PartenerSection from "./components/PartenerSection";
import WebinarCards from "./components/WebinarCards";
import im3e from "../../../../assets/images/targeting-149130.png";
import RecentFeatureSection from "./components/RecentFeatureSection";
import BuilderMeetSection from "./components/BuilderMeetSection";

const NewConstrctuctionPage = () => {
  const cardsData = [
    {
      imageUrl: img1,
      altText: "News Image 1",
      isFeatured: true,
      category: "NEWS AND DATA",
      title: "Zillow’s New Construction Consumer Housing Trends Report 2024",
    },
    {
      imageUrl: img2,
      altText: "News Image 2",
      category: "NEWS AND DATA",
      title:
        "Breaking Ground: Insights From Zillow’s Q3 New Construction Webinar",
    },
    {
      imageUrl: img1,
      altText: "News Image 3",
      isFeatured: true,
      category: "NEWS AND DATA",
      title: "How to Use Zillow’s New Construction Economic Dashboard",
    },
  ];

  const webinarData = [
    {
      imageUrl: im3e,
      status: "ON DEMAND",
      title: "Webinar Recap: Consumer Insights for Builders",
      live: true,
    },
    {
      imageUrl: im3e,
      status: "ON DEMAND",
      title: "Webinar Recap: Economic Trends for New Construction",
      live: false,
    },
    {
      imageUrl: im3e,
      status: "ON DEMAND",
      title: "Webinar Recap: Economic Trends for New Construction",
      live: true,
    },
    // Add more webinar data objects as needed
  ];
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BuilderBelownav activeTab="New Constrcution" />
      <HeroText title="New Construction Resource Center" />
      <ResourceCards heading="New and Data" cardsData={cardsData} />
      <ResourceCards heading="Success Stories" cardsData={cardsData} />
      <PartenerSection />
      <WebinarCards heading="Webinars" webinarData={webinarData} />
      <RecentFeatureSection />
      <BuilderMeetSection />
      <Footer />
    </>
  );
};

export default NewConstrctuctionPage;
