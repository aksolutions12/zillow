import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img1 from "../../../../assets/images/eASY.png";
import img2 from "../../../../assets/images/TAILERED.png";
import img3 from "../../../../assets/images/TOOLEXP.png";
import img4 from "../../../../assets/images/tenant-lap.png";
import img5 from "../../../../assets/images/tenant-prof.png";
import img6 from "../../../../assets/images/tenant-prof2.png";
import img7 from "../../../../assets/images/Tenant-feature-block-1-65fcb9.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OnlineLeaseTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      <div className="bg-white dark:bg-zinc-800 p-8">
        {" "}
        <div className="text-center">
          <h2 className="text-center text-2xl font-bold mb-8 text-black dark:text-white">
            Everything you need to manage your lease
          </h2>
          <div className="flex flex-col md:flex-row justify-around items-center mb-8">
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <img
                src={img4}
                alt="Laptop illustration"
                className="mb-4 h-24 w-24"
              />
              <h1 className="font-bold">Your lease, your way</h1>
              <p className="text-black dark:text-white max-w-xs">
                Upload and sign an existing lease or customize a brand new one.
              </p>
            </div>
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <img
                src={img5}
                alt="Application illustration"
                className="mb-4 h-24 w-24"
              />
              <h1 className="font-bold">Sign electronically</h1>
              <p className="text-black dark:text-white max-w-xs">
                Send lease agreements to renters and skip the in-person meeting.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={img6}
                alt="Notification illustration"
                className="mb-4 h-24 w-24"
              />
              <h1 className="font-bold">Simple from start to finish</h1>
              <p className="text-black dark:text-white max-w-xs">
                Creating, customizing, signing — we’ll guide you through
                everything.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center text-2xl font-bold mb-8 text-black dark:text-white pt-8">
            Sign a lease anywhere. Access it anytime.
          </h2>
          <p className="text-base text-center">
            Have an existing lease agreement? Upload, sign and access it
            whenever you need on Zillow Rental Manager.
          </p>
          <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2">
            {/* Image */}
            <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
              <img
                src={img7}
                alt="Image 2"
                className="w-full   object-cover rounded-lg "
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Save time signing
              </h2>
              <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
                It only takes a few seconds to upload your lease, and your
                renter can sign it online — so you don’t have to mail documents
                or meet up
              </p>
              <Button variant="contained">Upload a Lease</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="gap-3 max-w-3xl">
          <h1 className="font-bold text-3xl pb-4">
            Build your own lease with step-by-step help
          </h1>
          <p className="text-base pb-4">
            Looking to start fresh with your rental agreement? Create and
            customize an online lease — it’s as simple as answering a few
            questions
          </p>
          <p className="text-xs pb-4">
            Currently available in Alabama, Alaska, Arizona, California,
            Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho,
            Illinois, Indiana, Iowa, Kansas, Kentucky, Michigan, Minnesota,
            Mississippi, Missouri, Nevada, New Hampshire, New Jersey, New
            Mexico, North Carolina, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode
            Island, South Carolina, Tennessee, Texas, Washington, West Virginia,
            and Wyoming.
          </p>
        </div>
      </div>
      <div className="max-w-5xl py-10">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="Easy to create" {...a11yProps(0)} />
              <Tab label="Tailored for you" {...a11yProps(1)} />
              <Tab label="Tools from experts" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="flex flex-col md:flex-row items-center p-4 gap-2 ">
              {/* Image */}
              <div className="w-full lg:w-1/2">
                {" "}
                <img
                  src={img1}
                  alt="image 1"
                  className="rounded-lg  w-full   mb-4 "
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="sm:text-center lg:text-start">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    No hassle , No guesswork
                  </h2>
                  <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
                    View Your Applicant's credit score, financial background and
                    credit history
                  </p>
                  <Link
                    to="#"
                    className="text-white rounded-md bg-blue-500 px-4 py-3"
                  >
                    Create a Lease
                  </Link>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="flex flex-col md:flex-row items-center p-4 gap-2 ">
              {/* Image */}
              <div className="w-full lg:w-1/2">
                {" "}
                <img
                  src={img2}
                  alt="image 1"
                  className="rounded-lg  w-full   mb-4 "
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="sm:text-center lg:text-start">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Cover Your Needs
                  </h2>
                  <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
                    View Your Applicant's credit score, financial background and
                    credit history
                  </p>
                  <Link
                    to="#"
                    className="text-white rounded-md bg-blue-500 px-4 py-3"
                  >
                    Create a Lease
                  </Link>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="flex flex-col md:flex-row items-center p-4 gap-2 ">
              {/* Image */}
              <div className="w-full lg:w-1/2">
                {" "}
                <img
                  src={img3}
                  alt="image 1"
                  className="rounded-lg  w-full   mb-4 "
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="sm:text-center lg:text-start">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Professional Template
                  </h2>
                  <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
                    View Your Applicant's credit score, financial background and
                    credit history
                  </p>
                  <Link
                    to="#"
                    className="text-white rounded-md bg-blue-500 px-4 py-3"
                  >
                    Create a Lease
                  </Link>
                </div>
              </div>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
