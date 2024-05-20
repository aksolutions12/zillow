import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zil-logo.png";
import Footer from "../../../components/layout/Footer/Footer";
import SaleFormSection from "./components/SaleFormSection";
import WhyPostZillowSection from "./components/WhyPostZillowSection";

const PostSaleOwnerPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <SaleFormSection />
      <WhyPostZillowSection />
      <Footer />
    </>
  );
};

export default PostSaleOwnerPage;
