import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import logoUrl from "../../assets/images/zil-logo.png";
import porch from "../../assets/images/womenonporch.jpg";
import Footer from "../../components/layout/Footer/Footer";
import ZillowManagerBelowNav from "./components/ZillowManagerBelowNav";
import HeroRentalManager from "./components/HeroRentalManager";
import TrustCardRow from "./components/TrustCardRow";
import EasierLanlord from "./components/EasierLanlord";
import ToolCarousel from "../Advertise/Builder/BuilderTool/component/ToolCarousel";
import LastHeroRent from "./components/LastHeroRent";

const ZillowManagerPage = () => {
  return (
    <div>
      <Navbar logoUrl={logoUrl} />
      <ZillowManagerBelowNav activeTab="Zillow Rental Manager" />
      <HeroRentalManager
        imageUrl={porch}
        title={"List your rental. Screen tenants. Sign a lease. Get paid."}
        description={"All in one place with Zillow Rental Manager."}
        btntxt={"List Your Properties for Free"}
      />
      <TrustCardRow />
      <EasierLanlord />
      <ToolCarousel />
      <LastHeroRent />
      <Footer />
    </div>
  );
};

export default ZillowManagerPage;
