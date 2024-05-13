import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./widget.css";
import { theme, media } from "../../styles/theme/theme";

const Widget = () => {
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
              fontFamily: theme.typography.fontFamily2,
              textShadow: "2px 2px 4px black",
            }}
          >
            Agents. Tours. Loans. Homes.
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="relative w-full max-w-xl ">
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
                    height: "73px",
                    [media.md]: {
                      minWidth: "300px", // Adjust width for medium screens
                    },
                    [media.sm]: {
                      minWidth: "250px", // Adjust width for small screens
                    },
                  },
                  endAdornment: (
                    <IconButton
                      aria-label="search"
                      className="search-icon"
                      sx={{
                        "&:hover": {
                          backgroundColor: "#F2FAFF", // Set the background color to transparent when hovered
                          borderRadius: "10%", // Set the border radius to make it rounded
                        },
                      }}
                    >
                      <SearchIcon sx={{ fontSize: "30px", color: "#3f51b5" }} />
                    </IconButton>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
