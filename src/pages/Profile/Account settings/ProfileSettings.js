import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import ProfileSettingsSection from "./components/ProfileSettingsSection";

const ProfileSettings = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <ProfileSettingsSection />

      <Footer />
    </>
  );
};

export default ProfileSettings;
