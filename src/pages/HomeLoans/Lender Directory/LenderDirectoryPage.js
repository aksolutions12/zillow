import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zil-logo.png";
import Footer from "../../../components/layout/Footer/Footer";
import SearchLender from "./components/SearchLender";
import BrowseLenders from "./components/BrowseLenders";
import WhyLenders from "./components/WhyLenders";
import MoreResources from "./components/MoreResources";
import MortgageStateSection from "../MortgagesCalculators/Components/MortgageStateSection";

const LenderDirectoryPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <SearchLender />
      <BrowseLenders />
      <WhyLenders />
      <MoreResources />
      <MortgageStateSection />
      <Footer />
    </>
  );
};

export default LenderDirectoryPage;
