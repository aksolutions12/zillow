import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import PhotoEditSection from "./components/PhotoEditSection";
const EditPhoto = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <PhotoEditSection />

      <Footer />
    </>
  );
};

export default EditPhoto;
