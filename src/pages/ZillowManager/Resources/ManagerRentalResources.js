import React from "react";
import Footer from "../../../components/layout/Footer/Footer";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zil-logo.png";
import HeroText from "../../Advertise/Builder/NewContruction/components/HeroText";
import ResourceCards from "../../Advertise/Builder/NewContruction/components/ResourceCards";
import RecentFeatureSection from "../../Advertise/Builder/NewContruction/components/RecentFeatureSection";
import ZillowManagerBelowNav from "../components/ZillowManagerBelowNav";
import img1 from "../../../assets/images/realestate.jpg";
import img2 from "../../../assets/images/family_on_computer.png";

const ManagerRentalResources = () => {
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
      <ZillowManagerBelowNav activeTab={"Resources"} />
      <HeroText title="Rentals Resource Center" />
      <ResourceCards
        heading="Landlording Basics"
        cardsData={cardsData}
        seealllink={"#"}
      />
      <ResourceCards
        heading="Tools & Forms"
        cardsData={cardsData}
        seealllink={"#"}
      />
      <ResourceCards
        heading="Managing Your Rental"
        cardsData={cardsData}
        seealllink={"#"}
      />
      <ResourceCards
        heading="Landlord Laws & Regulations"
        cardsData={cardsData}
        seealllink={"#"}
      />
      <RecentFeatureSection />
      <Footer />
    </>
  );
};

export default ManagerRentalResources;
