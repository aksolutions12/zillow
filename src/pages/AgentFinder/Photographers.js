import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import BottomNav from "./BottomNav/BottomNav";
import HeroAgent from "./Components/HeroAgent";
import FindSection from "./Components/FindSection";
import AboutRecommendations from "../Home/AboutRecommendations";
import FindGuideSection from "./Components/FindGuideSection";
import findstory from "../../assets/images/find agent.png";
import logoUrl from "../../assets/images/zil-logo.png";

const Photographers = () => {
  const specialties = [
    "Any",
    "Zillow Video Walkthrough",
    "Zillow Selected Photographer",
  ];
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomNav activeTab="Photographers" />
      <HeroAgent
        title="Elevate your listings with immersive media"
        subtitle="Listing Media Services empowers agents to capture the true essence of a home with high-quality media. From stunning high-quality photography, virtual tours, and complementary interactive floor plans."
        buttonText="Explore Media plans"
      />
      <FindSection
        heading="Find a Photographer"
        placeholder=" Photographers Name"
        specialties={specialties}
      />
      ;
      <FindGuideSection
        imageUrl={findstory}
        title="Find photographers in your area."
        description="To get started, enter your location or search for a specific photographer by name."
        resources={[
          "Planning to sell or rent your home? Professional photography can make all the difference between a successful listing and one that struggles to attract interest. Fortunately, Zillow's directory of real estate photographers makes it easy to find a photographer with the experience and expertise to present your home in its best possible light.",
          "Zillow's guide to real estate photographers includes portfolio samples to help you connect with a professional who understands your home's unique appeal. If you're putting a home up for sale , your listing needs professional photography services including HDR imaging and video. And most importantly, you need a real estate photographer who can capture the details that make potential buyers say wow! ",
          "So put away your smartphone camera and take a look at Zillow's network of real estate photographers. When you see the pop-off-the-screen effect that a skilled real estate photographer can have on your home listing, it will be a truly eye-opening experience.",
          "Zillow is the leading real estate and rental marketplace dedicated to empowering consumers with data, inspiration and knowledge around the place they call home, and connecting them with the best local professionals who can help.",
        ]}
      />
      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default Photographers;
