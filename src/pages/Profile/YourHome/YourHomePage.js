import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import BottomProfileNav from "../components/BottomProfileNav";
import YourHomeSection from "./components/YourHomeSection";

const YourHomePage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomProfileNav defaultActiveTab={"6"} />
      <YourHomeSection />

      <Footer />
    </>
  );
};

export default YourHomePage;
