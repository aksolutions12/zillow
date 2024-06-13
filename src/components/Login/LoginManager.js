import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import img1 from "../../assets/images/easyToBeLandlordBanner.aa6c5646.png";
import logoUrl from "../../assets/images/zil-logo.png";
import SignIn from "./SignIn";
import NewAccount from "./NewAccount";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";

export default function LoginManager({ onClose }) {
  const [value, setValue] = useState("signIn");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Navbar logoUrl={logoUrl} />
      <div className="bg-white">
        {" "}
        <div className="bg-white w-full p-6  lg:flex">
          <div className="lg:w-1/2 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-extrabold mb-4 mt-3 pt-10 text-center">
              Sign up for Zillow Rental Manager
            </h1>
            <div className="w-full lg:max-w-md">
              <TabContext value={value}>
                <TabList
                  onChange={handleChange}
                  aria-label="Login or Sign Up tabs"
                >
                  <Tab label="SignIn" value="signIn" />
                  <Tab label="New Account" value="newAccount" />
                </TabList>
                <TabPanel value="signIn">
                  <SignIn onClose={onClose} />
                </TabPanel>
                <TabPanel value="newAccount">
                  <NewAccount onClose={onClose} />
                </TabPanel>
              </TabContext>
            </div>
          </div>
          <div className="lg:w-1/2 hidden lg:block h-screen bg-cyan-200">
            {/* Place your image here */}
            <div className="p-5">
              <img src={img1} alt="Image" className="w-96 h-full " />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
