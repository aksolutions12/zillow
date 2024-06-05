import React from "react";
import Footer from "../../../components/layout/Footer/Footer";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zil-logo.png";
import porch from "../../../assets/images/womenonporch.jpg";
import ZillowManagerBelowNav from "../components/ZillowManagerBelowNav";
import HeroRentalManager from "../components/HeroRentalManager";
import Signrenters from "./component/Signrenters";
import TenantReportTab from "./component/TenantReportTab";
import ApproveSection from "./component/ApproveSection";
import ToolCarousel from "../../Advertise/Builder/BuilderTool/component/ToolCarousel";
import TenantLastHero from "./component/TenantLastHero";
import RentalManagerQuestions from "./component/RentalManagerQuestions";

const Tenantscreening = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <ZillowManagerBelowNav activeTab={"Zillow Rental Manager"} />
      <HeroRentalManager
        imageUrl={porch}
        title={"Save time with online tenant screening."}
        description={
          "Access background checks, credit checks, eviction history and income verification with Zillow’s online applications."
        }
        btntxt={"Screen Tenants"}
      />
      <Signrenters />
      <TenantReportTab />
      <ApproveSection />
      <ToolCarousel />
      <RentalManagerQuestions />
      <TenantLastHero
        imageUrl={porch}
        title={"Feel confident about your next renter"}
        paragraph={
          "And get them in the door quickly with online tenant screening."
        }
        btntxt="Get Started"
      />

      <Footer />
    </>
  );
};

export default Tenantscreening;
