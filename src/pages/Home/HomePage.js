import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import Widget from "./Widget";
import GetRecommendations from "./GetRecommen";
import CardsRow from "./CardsRow";
import AboutRecommendations from "./AboutRecommendations";
import logoUrl from "../../assets/images/zil-logo.png";

const HomePage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <Widget />
      <GetRecommendations />
      <CardsRow />
      <AboutRecommendations />
      <Footer />
    </>
  );
};

export default HomePage;
