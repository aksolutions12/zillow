import React from "react";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import Footer from "../../../../components/layout/Footer/Footer";
import logoUrl from "../../../../assets/images/zil-logo.png";
import NotificaionSection from "./components/NotificaionSection";
const NotificationPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <NotificaionSection />

      <Footer />
    </>
  );
};

export default NotificationPage;
