import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import BottomProfileNav from "../components/BottomProfileNav";
import TourSection from "./components/TourSection";

const ManagetoursPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomProfileNav defaultActiveTab={"3"} />
      <TourSection />
      <Footer />
    </>
  );
};

export default ManagetoursPage;
