import React from "react";
import Footer from "../../components/layout/Footer/Footer";
import HeroPremium from "./components/HeroPremium";
import SolutionCardsSection from "./components/SolutionCardsSection";
import SolutionsContent from "./components/SolutionsContent";
import LeftImageComponent from "./components/LeftImageComponent";
import porch from "../../assets/images/womenonporch.jpg";
import RightImageSection from "./components/RightImageSection";
import LightContent from "./components/LightContent";
import ZillowPremiumFooter from "./components/ZillowPremiumFooter";

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
        title="Use our real estate network to grow your own"
        description="Connect with interested buyers on Zillow and Trulia as soon as they begin their home search. Our real estate platform helps clients find marketing-savvy agents like you, so you can help them find home."
      />
      <LeftImageComponent
        imageUrl={porch}
        title="Tools for top-performing agents"
        description="Get more than just leads — get the real estate tools and data to succeed. Zillow Premier Agent helps the get-it-done agent win all of the small home-buying moments that lead to the big one."
      />
      <RightImageSection
        imageUrl={porch}
        title="You help them find it.
        We help them fund it."
        description="Zillow Home Loans can help you close 13 days faster than other financing competitors on average*. Connect with a preferred loan officer through the Premier Agent app, then track the financing progress every step of the way."
      />
      <LightContent />

      <ZillowPremiumFooter />
    </>
  );
};

export default HomeAgentPremium;
