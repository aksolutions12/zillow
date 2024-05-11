import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import Widget from "./Widget";
import GetRecommendations from "./GetRecommen";
import CardsRow from "./CardsRow";
import AboutRecommendations from "./AboutRecommendations";
import logoUrl from "../../assets/images/zil-logo.png";
import BuyDrop from "../../components/layout/Navbar/BuyDrop";

const HomePage = () => {
  const headings = [
    {
      title: "Homes for sale",
      subpartsClass: "grid grid-cols-2 gap-4",
      subparts: [
        { name: "Homes for sale", link: "#" },
        { name: "New construction", link: "#" },
        { name: "Foreclosures", link: "#" },
        { name: "Coming soon", link: "#" },
        { name: "For sale by owner", link: "#" },
        { name: "Recent home sales", link: "#" },
        { name: "Open houses", link: "#" },
        { name: "All homes", link: "#" },
      ],
    },
    {
      title: "Resources",
      subpartsClass: "flex flex-col gap-2",
      subparts: [
        { name: "Buyer's Guide", link: "#" },
        { name: "Foreclosure Center", link: "#" },
        { name: "Real Estate App", link: "#" },
        { name: "Down Payment Assistance", link: "#" },
      ],
    },
  ];
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
