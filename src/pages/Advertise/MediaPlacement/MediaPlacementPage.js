import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import porch from "../../../assets/images/womenonporch.jpg";
import BrandBelownav from "../Brand Advertising/components/BrandBelownav";
import HeroBrand from "../Brand Advertising/components/HeroBrand";
import RightImgDb from "./components/RightImgDb";
import img1 from "../../../assets/images/zillow_hdp_.png";
import img2 from "../../../assets/images/native_search_.png";
import img3 from "../../../assets/images/native_search_page_final.png";
import img4 from "../../../assets/images/streeteasy_native.png";
import img5 from "../../../assets/images/home_detaillag_sample_brand_page_final.png";
import LeftImgDb from "./components/LeftImgDb";
import ExpandableAds from "./components/ExpandableAds";
import InterestedSection from "../PropertyManager/Components/InterestedSection";

const MediaPlacementPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BrandBelownav activeTab="mediaPlacements" />
      <HeroBrand
        imageUrl={porch}
        title="Media Placements"
        description="Reach highly engaged customers by featuring your brand in media placements across Zillow, Trulia, StreetEasy and HotPads."
      />

      <RightImgDb
        title="Native Search Ads"
        description="Maximize scale and reach top-funnel audiences by featuring your brand in the Search Results Page across Zillow, Trulia and HotPads."
        button1Text="Download Spec Sheet"
        button1Link="#"
        button2Text="Video Demo"
        button2Link="#"
        imageUrl={img2}
        imageAlt="Maple Apartments"
        paragraph="Available for direct, programmatic, and local advertising campaigns."
      />

      <LeftImgDb
        title="Native Photo Gallery Ad"
        description="Promote your brand within the heart of the Zillow user experience by integrating it within Zillow’s highly-visited property photo galleries. "
        buttonText="Download Spec Sheet"
        buttonLink="#"
        imageUrl={img1}
        imageAlt="Maple Apartments"
        paragraph="Available for direct advertising campaigns."
      />

      <RightImgDb
        title="Native Property Ads"
        description="Drive consideration by showcasing your brand’s offers and services while home seekers plan their move and evaluate their needs."
        button1Text="Download Spec Sheet"
        button1Link="#"
        button2Text="Video Demo"
        button2Link="#"
        imageUrl={img3}
        imageAlt="Maple Apartments"
        paragraph="Available for direct, programmatic, and local advertising campaigns."
      />

      <LeftImgDb
        title="StreetEasy Native Ads"
        description="Promote your brand’s products to a valuable New York City audience as they scroll through StreetEasy’s Search Results, Building Details, and Home Details pages.  "
        buttonText="Download Spec Sheet"
        buttonLink="#"
        imageUrl={img4}
        imageAlt="Maple Apartments"
        paragraph="Available for direct advertising campaigns."
      />

      <RightImgDb
        title="Home Expenses Ad"
        description="Home Expenses Ad"
        button1Text="Download Spec Sheet"
        button1Link="#"
        button2Text="Video Demo"
        button2Link="#"
        imageUrl={img3}
        imageAlt="Maple Apartments"
        paragraph="Available for direct, programmatic, and local advertising campaigns."
      />

      <LeftImgDb
        title="Home Detail Flags"
        description="Gain additional exposure to our low-funnel audiences by featuring your home services brand in the properties that you geographically service on Zillow and Trulia."
        buttonText="Download Spec Sheet"
        buttonLink="#"
        imageUrl={img5}
        imageAlt="Maple Apartments"
        paragraph="Available for direct advertising campaigns."
      />
      <ExpandableAds />
      <InterestedSection
        title="Interested in advertising with us?"
        description="Determine the right advertising method for you."
        buttonText="Get Started"
      />

      <Footer />
    </>
  );
};

export default MediaPlacementPage;
