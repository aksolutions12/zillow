import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import logoUrl from "../../assets/images/zhl-logo-default.png";
import FooterLoans from "./Component/FooterLoans";
import BottomNav from "./Component/BottomNav";
import HeroLoans from "./Component/HeroLoans";
import WhyZillow from "./Component/WhyZillow";
import MeetCards from "./Component/MeetCards";
import Question from "./Component/Question";
import MoreQuestions from "./Component/MoreQuestions";
import LoanOptions from "./Component/LoanOptions";
import ReviewsSection from "./Component/ReviewsSection";
import JourneySection from "./Component/JourneySection";
import CalculateSection from "./Component/CalculateSection";

const HomeLoans = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollToSection = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar logoUrl={logoUrl} />
      {!isMobile && <BottomNav scrollToSection={scrollToSection} />}
      <HeroLoans
        title="Get home on your budget with Zillow Home Loans"
        subtitle="Start your home buying journey with confidence by getting pre-qualified with Zillow Home Loans."
        buttonText="Get-PreQualified"
      />
      <WhyZillow />
      <MeetCards />
      <Question />
      <MoreQuestions />
      <CalculateSection />
      <LoanOptions />
      <ReviewsSection />
      <JourneySection />

      <FooterLoans />
    </>
  );
};

export default HomeLoans;
