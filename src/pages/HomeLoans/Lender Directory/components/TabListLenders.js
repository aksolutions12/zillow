import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LendersListDesign from "./LendersListDesign";
import menport from "../../../../assets/images/men-port.jpg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function TabListLenders() {
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5); // Number of lenders per page

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const lenders = [
    {
      name: "Guaranteed Rate, Inc.",
      imageUrl: menport,
      nmls: "NMLS# 2611",
      rating: "★★★★★",
      averageRating: 4.96,
      reviews: "21386 Reviews (186 Recent | 292 Verified)",
    },
    {
      name: "The Federal Savings Bank",
      imageUrl: menport,
      nmls: "NMLS# 411500",
      rating: "★★★★★",
      averageRating: 4.93,
      reviews: "1855 Reviews (34 Recent | 45 Verified)",
    },
    {
      name: "Guaranteed Rate Affinity, LLC",
      imageUrl: menport,
      nmls: "NMLS# 1598647",
      rating: "★★★★★",
      averageRating: 4.94,
      reviews: "1131 Reviews (25 Recent | 8 Verified)",
    },
    {
      name: "Guaranteed Rate, Inc.",
      imageUrl: menport,
      nmls: "NMLS# 2611",
      rating: "★★★★★",
      averageRating: 4.96,
      reviews: "21386 Reviews (186 Recent | 292 Verified)",
    },
    {
      name: "The Federal Savings Bank",
      imageUrl: menport,
      nmls: "NMLS# 411500",
      rating: "★★★★★",
      averageRating: 4.93,
      reviews: "1855 Reviews (34 Recent | 45 Verified)",
    },
    {
      name: "Fairway Independent Mortgage Corporation",
      imageUrl: menport,
      nmls: "NMLS# 223052",
      rating: "★★★★★",
      averageRating: 4.99,
      reviews: "233 Reviews (0 Recent | 1 Verified)",
    },
  ];

  // Calculate the index range of lenders to display on the current page
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedLenders = lenders.slice(startIndex, endIndex);

  return (
    <div className="mt-5">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Relevance" />
        <Tab label="Distance" />
        <Tab label="Customer Rating" />
      </Tabs>
      <LendersListDesign lenders={paginatedLenders} selectedTab={value} />
      <Stack spacing={2} justifyContent="center" alignItems="center" mt={5}>
        <Pagination
          count={Math.ceil(lenders.length / rowsPerPage)} // Calculate total number of pages
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
          size="large"
        />
      </Stack>
    </div>
  );
}
