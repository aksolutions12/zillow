import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zil-logo.png";
import FooterLoans from "../Component/FooterLoans";
import WhyQualified from "./Components/WhyQualified";
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
