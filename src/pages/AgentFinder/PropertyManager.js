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

const PropertyManager = () => {
  const specialties = ["Landlord", "Vacation/Short-term Rentals"];
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomNav activeTab="Property Managers" />
      <FindSection
        heading="Find a Property Manager"
        placeholder="Manager Name"
        specialties={specialties}
      />

      <FindGuideSection
        imageUrl={findstory}
        title="Find property managers in your area."
        description="To get started, enter your location or search for a specific property manager by name."
        resources={[
          "There's no doubt about it: rentals can be a pretty mixed bag. As a renter, you’re never quite sure what you're going to get with a private landlord. And if you own rental property, screening applicants and keeping up with maintenance can feel like a full-time job. So, for both tenants and landlords , property management companies provide a way to make the renting process simpler and less stressful.",
          "Now, finding property managers is simple, too. Zillow's directory includes profiles of property management companies complete with reviews and current listings of vacancies in all their rental properties. If you like a particular complex or a friend had a good experience at a particular rental community, you can contact that property management company directly from Zillow!",
          "When you're searching for your place among the many available rentals, knowing the reputation and track record of the property manager can be the difference between a happy home and a huge headache. Zillow can help you find the property managers who hold the keys to your future domestic bliss.",
          "Zillow is the leading real estate and rental marketplace dedicated to empowering consumers with data, inspiration and knowledge around the place they call home, and connecting them with the best local professionals who can help.",
        ]}
      />
      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default PropertyManager;
