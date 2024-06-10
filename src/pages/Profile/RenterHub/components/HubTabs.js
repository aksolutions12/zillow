import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { GoFileDirectory } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { FaWalking } from "react-icons/fa";

export default function HubTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white py-10 mx-4 my-2">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Contacted rentals</h1>
        <a href="#" className="text-blue-600 hover:underline">
          Archived messages
        </a>
      </div>
      <div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="All" value="1" />
                <Tab label="Tours" value="2" />
                <Tab label="Applications" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="flex flex-col items-center justify-center">
                <FaRegMessage color="blue" size={25} className="mb-2" />
                <p>You don't have any contacted rentals right now. </p>
              </div>
            </TabPanel>
            <TabPanel value="2">
              {" "}
              <div className="flex flex-col items-center justify-center">
                <FaWalking color="blue" size={25} className="mb-2" />
                <p>
                  You don't have any requested or scheduled tours right now.{" "}
                </p>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="flex flex-col items-center justify-center">
                <GoFileDirectory color="blue" size={25} className="mb-2" />
                <p>You don't have any active applications right now. </p>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
