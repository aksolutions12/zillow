import React from "react";
import Footer from "../../components/layout/Footer/Footer";
import HeroPremium from "./components/HeroPremium";
import SolutionCardsSection from "./components/SolutionCardsSection";
import SolutionsContent from "./components/SolutionsContent";
import LeftImageComponent from "./components/LeftImageComponent";
import porch from "../../assets/images/womenonporch.jpg";
import RightImageSection from "./components/RightImageSection";

const HomeAgentPremium = () => {
  return (
    <>
      <HeroPremium />
      <SolutionCardsSection />
      <SolutionsContent />
      <LeftImageComponent
        imageUrl={porch}
        title="You are the key to real estate"
        description="Agents unlock life’s next chapter for buyers and sellers. Our mission is to streamline the real estate process for Zillow Premier Agent partners, so agents like you can focus on providing unparalleled service to your clients — and growing your business."
      />
      <RightImageSection
        imageUrl={porch}
        title="You are the key to real estate"
        description="Agents unlock life’s next chapter for buyers and sellers. Our mission is to streamline the real estate process for Zillow Premier Agent partners, so agents like you can focus on providing unparalleled service to your clients — and growing your business."
      />

      <Footer />
    </>
  );
};

export default HomeAgentPremium;
