import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import img1 from "../../../../assets/images/credit.png";
import img2 from "../../../../assets/images/BackgroundCheck_4.png";
import { Link } from "react-router-dom";

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

export default function TenantReportTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <div className="text-center">
        <h1 className="font-bold text-3xl">Reports you can rely on</h1>
        <p className="text-base">
          Get the information you need to feel confident about each applicant.
          We’ve partnered with industry leaders to provide tenant background
          checks and credit reports.
        </p>
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
              <Tab label="Credit Report" {...a11yProps(0)} />
              <Tab label="Background Check" {...a11yProps(1)} />
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
                    Credit Report
                  </h2>
                  <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
                    View Your Applicant's credit score, financial background and
                    credit history
                  </p>
                  <Link to="#" className="text-blue-500 underline">
                    See an example credit score
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
                    Background Check
                  </h2>
                  <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
                    View Your Applicant's credit score, financial background and
                    credit history
                  </p>
                  <Link to="#" className="text-blue-500 underline">
                    See an example credit score
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
