import React from "react";
import PricingCards from "./PricingCards";
import loanLogo from "../../../assets/images/zhl-logo-default.png";

const LoanOptions = () => (
  <div
    id="loanOptions"
    className="flex flex-col py-10 bg-cyan-50 items-center justify-center min-h-screen bg-F2FAFF"
  >
    <img src={loanLogo} alt="Loan Logo" className="h-8 w-1/3 mb-6" />
    <h1 className="text-3xl font-bold text-center mb-6">
      Explore our variety of loan options
    </h1>
    <PricingCards />
  </div>
);

export default LoanOptions;
