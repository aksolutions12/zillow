import React from "react";
import Footer from "../../../components/layout/Footer/Footer";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zil-logo.png";
import ZillowManagerBelowNav from "../components/ZillowManagerBelowNav";
import PriceMyRentalHero from "./component/PriceMyRentalHero";
import NeedPricing from "./component/NeedPricing";
import CommonRentingQuestions from "./component/CommonRentingQuestions";

const PriceMyRental = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <ZillowManagerBelowNav activeTab={"Price My Rental"} />
      <PriceMyRentalHero />
      <NeedPricing />
      <CommonRentingQuestions />
      <Footer />
    </>
  );
};

export default PriceMyRental;
