import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zil-logo.png";
import FooterLoans from "../Component/FooterLoans";
import HeroSectionQualified from "./Components/HeroSectionQualified";
import WhyQualified from "./Components/WhyQualified";
import FirstQuestions from "./Components/FirstQuestions";
import QuestionQualified from "./Components/QuestionQualified";

const GetQualifiedPage = () => {
  return (
    <div>
      <Navbar logoUrl={logoUrl} />
      <QuestionQualified />
      <WhyQualified />
      <FooterLoans />
    </div>
  );
};

export default GetQualifiedPage;
