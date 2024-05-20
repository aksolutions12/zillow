import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import ExploreMore from "./components/ExploreMore";
import ParticipatingContent from "../MortgagesCalculators/Components/ParticipatingContent";
import FactorsImpactSection from "./components/FactorsImpactSection";
import AffordabilityCalculate from "./components/AffordabilityCalculate";
import QualifyAffordability from "./components/QualifyAffordability";
import MarketAffordable from "./components/MarketAffordable";
import Affordabilityquestion from "./components/Affordabilityquestion";
import AffordabilityArticles from "./components/AffordabilityArticles";
import MortgageItems from "../MortgagesCalculators/Components/MortgageItems";
import MortgageStateSection from "../MortgagesCalculators/Components/MortgageStateSection";

const AffordabilityCalculatorPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <div className="w-full bg-white p-5">
        <ExploreMore />
        <ParticipatingContent />
        <FactorsImpactSection />
        <AffordabilityCalculate />
        <QualifyAffordability />
        <MarketAffordable />
        <Affordabilityquestion />
        <AffordabilityArticles />
        <div className="drop-shadow-xl rounded-md mb-8">
          <MortgageItems />
          <MortgageStateSection />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AffordabilityCalculatorPage;
