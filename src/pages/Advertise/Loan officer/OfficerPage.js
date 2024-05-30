import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import HeroOfficer from "./Component/HeroOfficer";
import HowWork from "./Component/HowWork.js";
import FirstStep from "./Component/FirstStep.js";
import ConversationSection from "./Component/ConversationSection.js";
import FrequentQuestions from "./Component/FrequentQuestions.js";
import TestimonialCard from "./Component/TestimonialCard.js";

const OfficerPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <HeroOfficer />
      <HowWork />
      <FirstStep />
      <ConversationSection />
      <TestimonialCard />
      <FrequentQuestions />
      <Footer />
    </>
  );
};

export default OfficerPage;
