import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import HeroPayment from "./component/HeroPayment";
import logoUrl from "../../../assets/images/zil-logo.png";
import BenefitsSection from "./component/BenefitsSection";
import CostSection from "./component/CostSection";
import CardSection from "./component/CardSection";
import QualifySection from "./component/QualifySection";
import ButtonSection from "./component/ButtonSection";

const DownPayementHome = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <HeroPayment />
      <div className=" bg-zinc-100 p-8">
        {" "}
        <BenefitsSection />
        <CostSection />
        <CardSection />
        <QualifySection />
        <ButtonSection />
      </div>

      <Footer />
    </>
  );
};

export default DownPayementHome;
