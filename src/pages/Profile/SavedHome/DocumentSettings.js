import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import PreferenceSection from "./components/PreferenceSection";

const DocumentSettings = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <PreferenceSection />

      <Footer />
    </>
  );
};

export default DocumentSettings;
