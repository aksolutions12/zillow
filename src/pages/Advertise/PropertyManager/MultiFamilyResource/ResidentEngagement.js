import React from "react";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import Footer from "../../../../components/layout/Footer/Footer";
import logoUrl from "../../../../assets/images/zil-logo.png";
import img1 from "../../../../assets/images/realestate.jpg";
import img2 from "../../../../assets/images/family_on_computer.png";
import img3 from "../../../../assets/images/real-estate-agent-3c32cc.png";
import img4 from "../../../../assets/images/RightRail_022824_FINAL.png";
import img5 from "../../../../assets/images/NCRebrandAssets_.png";
import img6 from "../../../../assets/images/NCRebrandAssets_R9.png";
import MultiFamlyBottomNav from "./components/MultiFamlyBottomNav";
import RecentFeatureSection from "../../Builder/NewContruction/components/RecentFeatureSection";
import ResourceCards from "../../Builder/NewContruction/components/ResourceCards";
import HeroText from "../../Builder/NewContruction/components/HeroText";
import AdvertiseWithSection from "./components/AdvertiseWithSection";
import BlogsResourceList from "../../Builder/New and Data/components/BlogsResourceList";

const ResidentEngagement = () => {
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

  const dataList = [
    {
      imageUrl: img2,
      category: "NEWS AND DATA",
      title: "Zillow’s New Construction Consumer Housing Trends Report 2024",
      description: "",
      authorImage: img3,
      author: "Grant Brissey",
      date: "AUG 29 2023",
    },
    {
      imageUrl: img1,
      category: "NEWS AND DATA",
      title: "How to Use Zillow’s New Construction Economic Dashboard",
      description:
        "Crunch the numbers to see undefined visualizations for your market and beyond",
      authorImage: img3,
      author: "Grant Brissey",
      date: "AUG 29 2023",
    },
    {
      imageUrl: img1,
      category: "NEWS AND DATA",
      title: "How to Use Zillow’s New Construction Economic Dashboard",
      description:
        "Crunch the numbers to see undefined visualizations for your market and beyond",
      authorImage: img3,
      author: "Grant Brissey",
      date: "AUG 29 2023",
    },
    // Add more data objects as needed
  ];

  const imageUrls = [
    img4,
    img5,
    img6,
    // Add more image URLs as needed
  ];
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <MultiFamlyBottomNav activeTab={"Property Management"} />
      <HeroText title="Resident Engagement" />
      <BlogsResourceList dataList={dataList} imageUrls={imageUrls} />

      <ResourceCards heading="Read Next" cardsData={cardsData} />

      <RecentFeatureSection />
      <AdvertiseWithSection />
      <Footer />
    </>
  );
};

export default ResidentEngagement;
