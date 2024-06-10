import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function BottomProfileNav({ defaultActiveTab }) {
  const [value, setValue] = React.useState(defaultActiveTab || "1"); // Set initial value based on props
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === "1") {
      navigate("/savedHomes");
    } else if (newValue === "2") {
      navigate("/savedSearches");
    } else if (newValue === "5") {
      navigate("/yourteam");
    } else if (newValue === "6") {
      navigate("/yourhome");
    } else if (newValue === "4") {
      navigate("/recentlyViewed");
    } else if (newValue === "3") {
      navigate("/managetours");
    } else if (newValue === "8") {
      navigate("/accountsettings");
    } else if (newValue === "7") {
      navigate("/renterHub");
    } else {
      navigate("*");
    }
  };

  return (
    <div className="bg-white">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                "& .MuiTab-root": {
                  fontSize: "14px", // Decrease font size
                  textTransform: "none", // Keep text in normal case
                },
              }}
              variant="scrollable"
            >
              <Tab label="Saved Homes" value="1" />
              <Tab label="Saved Searches" value="2" />
              <Tab label="Manage Tours" value="3" />
              <Tab label="Recently Viewed" value="4" />
              <Tab label="Your Team" value="5" />
              <Tab label="Your Home" value="6" />
              <Tab label="Renter Hub" value="7" />
              <Tab label="Account Settings" value="8" />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
}
