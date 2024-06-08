import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Close } from "@mui/icons-material"; // Import Close icon from MUI

import SignIn from "./SignIn";
import NewAccount from "./NewAccount";

export default function LoginSignUp({ onClose }) {
  const [value, setValue] = useState("signIn");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center pt-8  bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg sm:max-w-md w-full mx-4 p-6 overflow-y-auto max-h-screen">
        <div className="flex justify-end">
          <Close onClick={onClose} className="cursor-pointer" />
        </div>
        <h1 className="text-3xl font-extrabold mb-4 mt-3 pt-10 text-center">
          Welcome to Zillow
        </h1>
        <div className="w-full lg:max-w-md">
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label="Login or Sign Up tabs">
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
    </div>
  );
}
