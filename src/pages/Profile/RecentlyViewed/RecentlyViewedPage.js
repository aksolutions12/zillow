import React from "react";
import Navbar from "../../../components/layout/Navbar/Navbar";
import Footer from "../../../components/layout/Footer/Footer";
import logoUrl from "../../../assets/images/zil-logo.png";
import BottomProfileNav from "../components/BottomProfileNav";
import RecentlyViewedList from "./components/RecentlyViewedList";

const RecentlyViewedPage = () => {
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <BottomProfileNav defaultActiveTab={"4"} />
      <RecentlyViewedList />

      <Footer />
    </>
  );
};

export default RecentlyViewedPage;
