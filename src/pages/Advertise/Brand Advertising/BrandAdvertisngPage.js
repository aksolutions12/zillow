import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import BrandBelownav from "./components/BrandBelownav";
import HeroBrand from "./components/HeroBrand";
import porch from "../../../assets/images/womenonporch.jpg";
import OurNetwork from "./components/OurNetwork";
import LeftImageSection from "../PropertyManager/Components/LeftImageSection";
import img1 from "../../../assets/images/person_browsing.png";
import img2 from "../../../assets/images/family_on_computer.png";
import RightImageSection from "../PropertyManager/Components/RightImageSection";
import WhyGroup from "./components/WhyGroup";
import RightImgContent from "../PropertyManager/Components/RightImgContent";
import InterestedSection from "../PropertyManager/Components/InterestedSection";

const BrandAdvertisngPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BrandBelownav activeTab="Brand Advertising" />
      <HeroBrand
        imageUrl={porch}
        title="Brand Advertising"
        description="Tell your brand’s story across Zillow Group’s network of real estate sites."
      />
      <OurNetwork />
      <RightImgContent
        imageUrl={img1}
        title="We’re more than just a real estate search engine."
        description="Finding a home is just the beginning of the Zillow Group experience. Whether it’s dreaming of your next rental, securing home financing or selling a home, we provide customers with an end-to-end home journey experience that can include your brand"
      />
      <WhyGroup />
      <LeftImageSection
        title="Media Placements"
        description="Integrate your message into the user experience with media placements that drive high-performing results on Zillow, Trulia, StreetEasy and HotPads."
        buttonText="Find Out How"
        buttonLink="#"
        imageUrl={img1}
        imageAlt="Maple Apartments"
      />
      <RightImageSection
        title="Ad Targeting"
        description="Reach high-value customers across different stages of the home journey with Zillow Group’s exclusive first-party audience segments."
        buttonText="Find Out How"
        buttonLink="#"
        imageUrl={img2}
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

export default BrandAdvertisngPage;
