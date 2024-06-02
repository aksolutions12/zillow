import React from "react";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import logoUrl from "../../../../assets/images/zil-logo.png";
import porch from "../../../../assets/images/womenonporch.jpg";
import Footer from "../../../../components/layout/Footer/Footer";
import in2 from "../../../../assets/images/inc2.png";
import LastHero from "../Components/LastHero";
import HeroReconnect from "../RentReconnect/component/HeroReconnect";
import ManagerBelowNav from "../Components/ManagerBelowNav";
import LeaseAdvertising from "./component/LeaseAdvertising";
import IntegrationRows from "./component/IntegrationRows";
import VideoSection from "../Components/VideoSection";
import LeftImageSection from "../Components/LeftImageSection";
import ReadMoreIncluded from "./component/ReadMoreIncluded";

const LeaseConnect = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <ManagerBelowNav />
      <HeroReconnect
        backgroundImage={porch}
        title="Zillow Lease Connect™"
        description="Pair Zillow’s rental audience with your property management system for results that matter: leases."
        advertiseButtonLabel="Advertise with us"
        playButtonLabel="See how it works"
        signInText="Already listing with us?  Sign in"
      />
      <LeaseAdvertising />
      <IntegrationRows />
      <VideoSection />
      <LeftImageSection
        title="Reach local renters with Zillow Boost"
        description="Give your Zillow Lease Connect ads premium placement and target local renters on social media."
        buttonText="Learn About Zillow boost"
        buttonLink="#"
        imageUrl={in2}
        imageAlt="Maple Apartments"
      />
      <ReadMoreIncluded />

      <LastHero
        heading="Zillow Rent Connect"
        paragraph="Connect with high-intent renters on the most-visited rental network"
      />
      <Footer />
    </>
  );
};

export default LeaseConnect;
