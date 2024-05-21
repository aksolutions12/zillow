import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zil-logo.png";
import Footer from "../../../components/layout/Footer/Footer";
import MortgageItems from "../MortgagesCalculators/Components/MortgageItems";
import MortgageStateSection from "../MortgagesCalculators/Components/MortgageStateSection";
import ExploreCalculators from "../MortgagesCalculators/Components/ExploreCalculators";
import ParticipatingContent from "../MortgagesCalculators/Components/ParticipatingContent";
import WhatRefinancing from "./component/WhatRefinancing";
import RefinanceCost from "./component/RefinanceCost";
import RefinaceCalculate from "./component/RefinaceCalculate";
import Reasonrefinance from "./component/Reasonrefinance";
import RefinanceQuestions from "./component/RefinanceQuestions";
import RefinanceArticles from "./component/RefinanceArticles";

const RefinanceCalculatorPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <div className="w-full bg-white p-5">
        <ExploreCalculators />
        <ParticipatingContent />
        <WhatRefinancing />
        <RefinanceCost />
        <RefinaceCalculate />
        <Reasonrefinance />
        <RefinanceQuestions />
        <RefinanceArticles />
      </div>
      <MortgageItems />
      <MortgageStateSection />

      <Footer />
    </>
  );
};

export default RefinanceCalculatorPage;
