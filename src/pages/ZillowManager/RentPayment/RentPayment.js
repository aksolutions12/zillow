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
import PaymentEasy from "./components/PaymentEasy";

const RentPayment = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <ZillowManagerBelowNav activeTab={"Zillow Rental Manager"} />
      <HeroRentalManager
        imageUrl={porch}
        title={"Collect rent online"}
        description={
          "From rent payments to utilities and security deposits, we make getting paid easier."
        }
        btntxt={"Set up a Payment"}
      />
      <PaymentEasy />

      <ToolCarousel />

      <RentalManagerQuestions />

      <TenantLastHero
        imageUrl={porch}
        title={"Collect rent easily – and reliably"}
        btntxt="Start Now"
      />

      <Footer />
    </>
  );
};

export default RentPayment;
