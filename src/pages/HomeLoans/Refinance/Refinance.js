import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../assets/images/zhl-logo-default.png";
import FooterLoans from "../Component/FooterLoans";
import QuestionRefinance from "./components/QuestionRefinance";

const Refinance = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <QuestionRefinance />
      <FooterLoans />
    </>
  );
};

export default Refinance;
