import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import porch from "../../../assets/images/womenonporch.jpg";
import img1 from "../../../assets/images/off.jpg";
import img2 from "../../../assets/images/realestate.jpg";
import img3 from "../../../assets/images/targeting-149130.png";
import BrandBelownav from "../Brand Advertising/components/BrandBelownav";
import RightImageSection from "../PropertyManager/Components/RightImageSection";
import LeftImageSection from "../PropertyManager/Components/LeftImageSection";
import HeroBrand from "../Brand Advertising/components/HeroBrand";
import InterestedSection from "../PropertyManager/Components/InterestedSection";
import ControlledCarousel from "./component/ControlledCarousel";

const AdTargetingPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BrandBelownav activeTab="adTargeting" />
      <HeroBrand
        imageUrl={porch}
        title="Ad Targeting"
        description="Reach high-value customers across different stages of the home journey with Zillow’s exclusive first-party audience segments."
      />
      <RightImageSection
        title="Buyers"
        description="Zillow Group not only identifies customers actively looking to purchase a home but also helps them make informed and educated decisions along the way.."
        buttonText="Download Spec Sheet"
        buttonLink="#"
        imageUrl={img2}
        imageAlt="Maple Apartments"
      />

      <LeftImageSection
        title="Renters"
        description="Zillow Group tracks renters as they view rental-related content across its sites, identifying them throughout key stages of the moving process, and helping them find the perfect balance between affordability and their dream home."
        buttonText="Download Spec Sheet"
        buttonLink="#"
        imageUrl={img1}
        imageAlt="Maple Apartments"
      />
      <ControlledCarousel />
      <RightImageSection
        title="Search Targeting"
        description="Target customers across a variety of search preferences. Learn more about our search targeting capabilities by requesting more information from a Zillow Group brand advertising representative.

        "
        imageUrl={img3}
        imageAlt="Maple Apartments"
      />

      <InterestedSection
        title="Interested in advertising with us?"
        description="Determine the right advertising method for you."
        buttonText="Get Started"
      />

      <Footer />
    </>
  );
};

export default AdTargetingPage;
