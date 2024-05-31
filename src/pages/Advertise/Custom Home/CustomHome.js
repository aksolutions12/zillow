import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import porch from "../../../assets/images/womenonporch.jpg";
import img1 from "../../../assets/images/CHL_traffic_drivers-1-1.png";
import img2 from "../../../assets/images/CHL.png";
import img3 from "../../../assets/images/case-study-stats-1.png";
import BrandBelownav from "../Brand Advertising/components/BrandBelownav";
import RightImageSection from "../PropertyManager/Components/RightImageSection";
import LeftImageSection from "../PropertyManager/Components/LeftImageSection";
import HeroBrand from "../Brand Advertising/components/HeroBrand";
import InterestedSection from "../PropertyManager/Components/InterestedSection";
import StrongResults from "./component/StrongResults.js";

const CustomHome = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BrandBelownav activeTab="Custom Home Listing" />
      <HeroBrand
        imageUrl={porch}
        title="Custom Home Listings"
        description="Transform a Zillow Home Details page into a branded listing to create a unique digital experience and promote your brand."
      />
      <RightImageSection
        title="Create a buzz"
        description="Take control of your media buy by leveraging Zillow Group’s first party audience data and automated media buying technology to reach the right people at the right time."
        buttonText="Download Spec Sheet"
        buttonLink="#"
        imageUrl={img2}
        imageAlt="Maple Apartments"
      />

      <LeftImageSection
        title="Omni-Channel Support"
        description="Not only will Custom Home Listings generate organic publicity, they will also be promoted by Zillow through various channels such as display, email, and social media."
        buttonText="Download Spec Sheet"
        buttonLink="#"
        imageUrl={img1}
        imageAlt="Maple Apartments"
      />
      <RightImageSection
        title="User Engagement"
        description="Zillow users will come for the intrigue but stay for the content. Users will stay on these pages to consume entertainment content and learn more about your brand. Read our case studies on past campaigns to find out how Custom Home Listings help brands achieve their goals."
        buttonText="Find Out How"
        buttonLink="#"
        imageUrl={img3}
        imageAlt="Maple Apartments"
      />
      <StrongResults />
      <InterestedSection
        title="Want to find out more about how you can create your own Custom Home Listing?"
        description="Contact our team and we can help you create a memorable digital experience for your audience."
        buttonText="Get Started"
      />

      <Footer />
    </>
  );
};

export default CustomHome;
