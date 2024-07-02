import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import Widget from "./Widget";
import GetRecommendations from "./GetRecommen";
import CardsRow from "./CardsRow";
import AboutRecommendations from "./AboutRecommendations";
import logoUrl from "../../assets/images/zil-logo.png";
import { useAuth } from "../../ContextApi/AuthContext";
import HomeCards from "./HomeCards";

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navbar logoUrl={logoUrl} />

      <Widget />
      {isLoggedIn ? (
        <HomeCards heading="Homes For You" />
      ) : (
        <GetRecommendations />
      )}

      <CardsRow />
      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default HomePage;
