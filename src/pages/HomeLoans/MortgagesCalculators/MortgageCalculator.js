import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import ExploreCalculators from "./Components/ExploreCalculators";
import ParticipatingContent from "./Components/ParticipatingContent";
import HowCalculate from "./Components/HowCalculate";
import PaymentEquation from "./Components/PaymentEquation";
import TypeofLoans from "./Components/TypeofLoans";
import MortgageOptionContent from "./Components/MortgageOptionContent";
import StartResearch from "./Components/StartResearch";
import MortgagesQuestions from "./Components/MortgagesQuestions";
import RelatedArticles from "./Components/RelatedArticles";
import MortgageItems from "./Components/MortgageItems";
import MortgageStateSection from "./Components/MortgageStateSection";

const MortgageCalculator = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <div className="w-full bg-white p-5">
        <ExploreCalculators />

        <ParticipatingContent />
        <HowCalculate />
        <PaymentEquation />
        <TypeofLoans />
        <MortgageOptionContent />
        <StartResearch />
        <MortgagesQuestions />

        <RelatedArticles />
      </div>
      <MortgageItems />
      <MortgageStateSection />
      <Footer />
    </>
  );
};

export default MortgageCalculator;
