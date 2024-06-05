import React from "react";
import Footer from "../../../components/layout/Footer/Footer";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zil-logo.png";
import porch from "../../../assets/images/womenonporch.jpg";
import TenantLastHero from "../Tenantscreening/component/TenantLastHero";
import ToolCarousel from "../../Advertise/Builder/BuilderTool/component/ToolCarousel";
import ZillowManagerBelowNav from "../components/ZillowManagerBelowNav";
import DoMore from "./component/DoMore";
import PostSteps from "./component/PostSteps";
import Postrenters from "./component/Postrenters";
import HeroListing from "./component/HeroListing";

const RentalListings = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />

      <ZillowManagerBelowNav activeTab={"Zillow Rental Manager"} />
      <HeroListing />
      <Postrenters />
      <PostSteps />
      <ToolCarousel />
      <DoMore />
      <TenantLastHero
        imageUrl={porch}
        title={"List your rental property for free"}
        paragraph={
          "Whether you manage one property or many, we have the tools to help you find your next renter."
        }
        btntxt="Get Started"
      />

      <Footer />
    </>
  );
};

export default RentalListings;
