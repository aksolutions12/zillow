import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import BottomProfileNav from "../components/BottomProfileNav";
import HubNav from "./components/HubNav";
import HubTabs from "./components/HubTabs";
import HubFavourite from "./components/HubFavourite";
import HubProfile from "./components/HubProfile";
import MainComponentHub from "./components/MainComponentHub";

const RenterHubPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomProfileNav defaultActiveTab={"7"} />
      <HubNav />
      <MainComponentHub />

      <Footer />
    </>
  );
};

export default RenterHubPage;
