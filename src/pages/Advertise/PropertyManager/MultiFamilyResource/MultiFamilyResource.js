import React from "react";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import Footer from "../../../../components/layout/Footer/Footer";
import logoUrl from "../../../../assets/images/zil-logo.png";
import img1 from "../../../../assets/images/realestate.jpg";
import img2 from "../../../../assets/images/family_on_computer.png";
import im3e from "../../../../assets/images/targeting-149130.png";
import MultiFamlyBottomNav from "./components/MultiFamlyBottomNav";
import BuilderMeetSection from "../../Builder/NewContruction/components/BuilderMeetSection";
import RecentFeatureSection from "../../Builder/NewContruction/components/RecentFeatureSection";
import WebinarCards from "../../Builder/NewContruction/components/WebinarCards";
import PartenerSection from "../../Builder/NewContruction/components/PartenerSection";
import ResourceCards from "../../Builder/NewContruction/components/ResourceCards";
import HeroText from "../../Builder/NewContruction/components/HeroText";
import AdvertiseWithSection from "./components/AdvertiseWithSection";

const MultiFamilyResource = () => {
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

  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <MultiFamlyBottomNav activeTab={"Multifamily Resource Center"} />
      <HeroText title="Multifamily Knowledge Center" />
      <ResourceCards
        heading="Property Management"
        cardsData={cardsData}
        seealllink={"/propertyManagement"}
      />
      <ResourceCards
        heading="Rental Marketing"
        cardsData={cardsData}
        seealllink={"/rentalMarketing"}
      />
      <PartenerSection />
      <ResourceCards
        heading="Renter Insights"
        cardsData={cardsData}
        seealllink={"/renterInsights"}
      />
      <ResourceCards
        heading="Training and Development"
        cardsData={cardsData}
        seealllink={"/trainingandDevelopment"}
      />
      <RecentFeatureSection />
      <AdvertiseWithSection />
      <Footer />
    </>
  );
};

export default MultiFamilyResource;
