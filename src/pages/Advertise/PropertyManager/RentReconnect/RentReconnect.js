import React from "react";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../../assets/images/zil-logo.png";
import porch from "../../../../assets/images/womenonporch.jpg";
import Footer from "../../../../components/layout/Footer/Footer";
import HeroReconnect from "./component/HeroReconnect";
import ManagerBelowNav from "../Components/ManagerBelowNav";
import SimpleAdvertising from "./component/SimpleAdvertising";
import PerfectCardsSection from "./component/PerfectCardsSection";
import IncludeEvery from "./component/IncludeEvery";
import LearnConnect from "./component/LearnConnect";
import ReadyStarted from "./component/ReadyStarted";
import LeftImageSection from "../Components/LeftImageSection";
import in2 from "../../../../assets/images/inc2.png";
import LastHero from "../Components/LastHero";

const RentReconnect = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <ManagerBelowNav />
      <HeroReconnect
        backgroundImage={porch}
        title="Zillow Rent Connect™"
        description="Connect with high-intent renters, with flexible offerings to support both property and portfolio occupancy goals. Choose from three packages to meet your needs."
        advertiseButtonLabel="Advertise with us"
        playButtonLabel="See how it works"
        signInText="Already advertising with us? Sign in"
      />
      <SimpleAdvertising />
      <PerfectCardsSection />
      <IncludeEvery />
      <LearnConnect />
      <ReadyStarted />

      <LeftImageSection
        title="Interested in pay-per-lease advertising?"
        description="Zillow Lease Connect™ lets you accurately track your cost per lease."
        buttonText="Learn More"
        buttonLink="#"
        imageUrl={in2}
        imageAlt="Maple Apartments"
      />
      <LastHero
        heading="Zillow Rent Connect"
        paragraph="Connect with high-intent renters on the most-visited rental network"
      />
      <Footer />
    </>
  );
};

export default RentReconnect;
