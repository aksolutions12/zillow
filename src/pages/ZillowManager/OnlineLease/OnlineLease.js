import React from "react";
import Footer from "../../../components/layout/Footer/Footer";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zil-logo.png";
import porch from "../../../assets/images/womenonporch.jpg";
import ZillowManagerBelowNav from "../components/ZillowManagerBelowNav";
import HeroRentalManager from "../components/HeroRentalManager";
import TenantLastHero from "../Tenantscreening/component/TenantLastHero";
import RentalManagerQuestions from "../Tenantscreening/component/RentalManagerQuestions";
import ToolCarousel from "../../Advertise/Builder/BuilderTool/component/ToolCarousel";
import OnlineLeaseTabs from "./components/OnlineLeaseTabs";

const OnlineLease = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <ZillowManagerBelowNav activeTab={"Zillow Rental Manager"} />
      <HeroRentalManager
        imageUrl={porch}
        title={"Create and sign a lease agreement with confidence"}
        description={
          "Upload and sign a lease online — or build and customize your own. Our lease tools make it simple."
        }
        btntxt={"Get Started"}
      />
      <OnlineLeaseTabs />
      <ToolCarousel />
      <RentalManagerQuestions />

      <TenantLastHero
        imageUrl={porch}
        title={"Skip the hassle. Sign online."}
        paragraph={
          "Make signing a lease easier for everyone with Zillow Rental Manager."
        }
        btntxt="Get Started"
      />

      <Footer />
    </>
  );
};

export default OnlineLease;
