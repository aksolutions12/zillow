import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import BottomProfileNav from "../components/BottomProfileNav";
import AccountSettingsList from "./components/AccountSettingsList";

const AccountsettingsPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomProfileNav defaultActiveTab={"8"} />
      <AccountSettingsList />

      <Footer />
    </>
  );
};

export default AccountsettingsPage;
