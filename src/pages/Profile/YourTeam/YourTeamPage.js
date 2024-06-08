import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import BottomProfileNav from "../components/BottomProfileNav";
import TeamSection from "./component/TeamSection";

const YourTeamPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomProfileNav defaultActiveTab={"5"} />
      <TeamSection />

      <Footer />
    </>
  );
};

export default YourTeamPage;
