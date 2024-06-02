import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import logoUrl from "../../assets/images/zil-logo.png";
import Footer from "../../components/layout/Footer/Footer";
import ZillowManagerBelowNav from "./components/ZillowManagerBelowNav";
const ZillowManagerPage = () => {
  return (
    <div>
      <Navbar logoUrl={logoUrl} />
      <ZillowManagerBelowNav />
      <Footer />
    </div>
  );
};

export default ZillowManagerPage;
