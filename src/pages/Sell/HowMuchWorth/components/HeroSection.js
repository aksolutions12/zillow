import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./widget.css";
import { media, theme } from "../../../../styles/theme/theme";

const HeroSection = () => {
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
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div
            className="text-5xl font-bold mb-6 text-center widget-text"
            style={{
              textShadow: "2px 2px 4px black",
              fontFamily: theme.typography.fontFamily2,
            }}
          >
            How much is my home worth?
          </div>
          <div
            className="flex items-center justify-center text-base font-bold mb-6 text-center w-full lg:w-1/2"
            style={{
              textShadow: "2px 2px 4px black",
            }}
          >
            Enter your address to get your free Zestimate instantly and claim
            your home, or request a no‑obligation market value offer from
            Zillow.
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

export default HeroSection;
