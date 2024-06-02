import React from "react";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import Footer from "../../../../components/layout/Footer/Footer";
import logoUrl from "../../../../assets/images/zil-logo.png";
import BuilderBelownav from "../components/BuilderBelownav";
import HeroWithCard from "./component/HeroWithCard";
import ImageWithContent from "./component/ImageWithContent";
import lapimg from "../../../../assets/images/Laptop_2020-cef1de-9e273a.png";
import PromotedSection from "./component/PromotedSection";

const ProductPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BuilderBelownav activeTab="Product" />
      <HeroWithCard
        title={"New Construction Advertising Solutions"}
        subtitle={
          "Zillow Group’s comprehensive product suite helps you efficiently market your home and communities."
        }
        cardheading={"ATTRACT MORE BUYERS"}
      />
      <ImageWithContent
        imageUrl={lapimg}
        title={"Promoted Communities"}
        content={
          "Home shoppers look at new homes alongside resale, but we know marketing new construction is more complex. Promoted Communities is intentionally designed for discoverability.Your new construction homes are displayed alongside resale on Zillow, integrated in the same search list, map and Zillow emails to prospective home buyers. In addition to sharing spec homes, you can display buildable plans so home buyers can consider building a home with you. Your homes will also be automatically syndicated to Trulia and Redfin at no additional cost."
        }
      />

      <PromotedSection />

      <Footer />
    </>
  );
};

export default ProductPage;
