import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./widget.css";
import { theme, media } from "../../../../styles/theme/theme";

const ExploreSection = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={isFocused ? "focused" : ""}>
      <div className="relative bg-cover bg-center text-white py-32 px-4 widgetBackground">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-4xl font-bold mb-6 text-center widget-text"
            style={{
              textShadow: "2px 2px 4px black",
            }}
          >
            Explore your home's value
          </div>
          <div
            className="text-lg font-bold mb-6 text-center widget-text"
            style={{
              textShadow: "2px 2px 4px black",
            }}
          >
            Explore your home's value
          </div>
          <div className="flex justify-center items-center w-full p-4">
            <div className="relative w-full max-w-xl flex">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                onFocus={handleFocus}
                onBlur={handleBlur}
                InputProps={{
                  style: {
                    backgroundColor: "white",
                    borderRadius: "4px",
                    height: "63px",
                    paddingRight: "120px", // Adjust padding for button
                    [media.md]: {
                      minWidth: "300px", // Adjust width for medium screens
                    },
                    [media.sm]: {
                      minWidth: "250px", // Adjust width for small screens
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  right: 10, // Adjust button position from right edge
                  top: 10, // Adjust button position from top edge
                  height: "40px", // Adjust button height
                  borderRadius: "4px",
                  padding: "8px 16px", // Adjust button padding
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
