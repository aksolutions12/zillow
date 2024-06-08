import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import BottomProfileNav from "../components/BottomProfileNav";
import SavedHomeFilter from "./components/SavedHomeFilter";

const SavedHomesPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomProfileNav defaultActiveTab={"1"} />
      <SavedHomeFilter />

      <Footer />
    </>
  );
};

export default SavedHomesPage;
