import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PhotographerListDesign from "./PhotographerListDesign";

const PhotographerList = ({ photographer }) => {
  // State for current page
  const [page, setPage] = useState(1);
  // Number of details to display per page
  const rowsPerPage = 5;

  // Calculate the starting index of details for the current page
  const startIndex = (page - 1) * rowsPerPage;
  // Extract details for the current page
  const currentPageDetails = photographer.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  // Event handler for page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <PhotographerListDesign photographers={currentPageDetails} />
      <Stack spacing={2} justifyContent="center" alignItems="center" mt={5}>
        <Pagination
          count={Math.ceil(photographer.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
          size="large"
        />
      </Stack>
    </>
  );
};

export default PhotographerList;
