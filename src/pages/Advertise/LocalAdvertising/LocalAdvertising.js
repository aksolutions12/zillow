import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import porch from "../../../assets/images/womenonporch.jpg";
import img1 from "../../../assets/images/local_ads_lp_srp_mocks.png";
import img2 from "../../../assets/images/local_ads_lp_srp_1-1.png";
import img3 from "../../../assets/images/inc3.png";
import BrandBelownav from "../Brand Advertising/components/BrandBelownav";
import RightImageSection from "../PropertyManager/Components/RightImageSection";
import LeftImageSection from "../PropertyManager/Components/LeftImageSection";
import HeroBrand from "../Brand Advertising/components/HeroBrand";
import LeftImgDb from "../MediaPlacement/components/LeftImgDb";
import MoreFAQ from "./components/MoreFAQ.js";
import HorizontalLinearStepper from "./components/HorizontalLinearStepper.js";
import StepsSection from "./components/StepsSection.js";

const LocalAdvertising = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BrandBelownav activeTab="Local Advertising" />
      <HeroBrand
        imageUrl={porch}
        title="Local Advertising"
        description="Use Zillow Group Media Manager to launch and manage your local ads. Local ad campaigns can help you reach customers on Zillow, Trulia, and HotPads."
      />
      <RightImageSection
        title="Promote Your Local Business"
        description="Zillow Group Media Manager is a self-service platform that offers you more flexibility and control in managing your ad campaigns. Whether you’re a local business, home repair service, or moving company, you can start promoting your services across our real estate network.."
        buttonText="Start Now"
        buttonLink="#"
        imageUrl={img2}
        imageAlt="Maple Apartments"
      />

      <LeftImgDb
        title="Reach More Customers Near You"
        description="Your ad campaigns will run on Zillow, Trulia, and HotPads in local markets where your services are available."
        buttonText="Start Now"
        buttonLink="#"
        imageUrl={img1}
        imageAlt="Maple Apartments"
      />

      <StepsSection />
      <MoreFAQ title="Have more questions?" linkText="FAQ" linkUrl="#" />

      <LeftImgDb
        title="Measure Campaign Results"
        description="Zillow Group Media Manager grants you 24/7 access to the dashboard to review all of your ongoing campaigns. Other benefits include:
        
        • Simple tools to build and manage your ad campaign
        • Automated campaign reporting
        • Easy billing options"
        buttonText="Start Now"
        buttonLink="#"
        imageUrl={img3}
        imageAlt="Maple Apartments"
      />

      <Footer />
    </>
  );
};

export default LocalAdvertising;
