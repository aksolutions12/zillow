import React from "react";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../../assets/images/zil-logo.png";
import porch from "../../../../assets/images/womenonporch.jpg";
import Footer from "../../../../components/layout/Footer/Footer";
import OtherWay from "./component/OtherWay";
import LastHero from "../Components/LastHero";
import HeroReconnect from "../RentReconnect/component/HeroReconnect";
import ManagerBelowNav from "../Components/ManagerBelowNav";
import GetMoreSection from "./component/GetMoreSection";
import AttractMore from "./component/AttractMore";
import ToolCarousel from "../../Builder/BuilderTool/component/ToolCarousel";
const BoostPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <ManagerBelowNav />
      <HeroReconnect
        backgroundImage={porch}
        title="Reach local renters with Zillow Boost™"
        description="Give your Zillow Lease Connect ads premium placement and target local renters on social media."
        advertiseButtonLabel="Advertise with us"
        playButtonLabel="See how it works"
        signInText="Already Advertise with us?  Sign in"
      />
      <GetMoreSection />
      <AttractMore />
      <ToolCarousel />

      <OtherWay />
      <LastHero
        heading="Find your next renter today"
        paragraph="Attract renters, drive traffic and fill vacancies with Zillow Boost."
      />
      <Footer />
    </>
  );
};

export default BoostPage;
