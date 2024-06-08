import React, { useState } from "react";
import SavedCard from "./SavedCard";
import properties from "./proppertiesdata";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function SavedCardList() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;
  const pageCount = Math.ceil(properties.length / cardsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4 p-4">
        {properties
          .slice((page - 1) * cardsPerPage, page * cardsPerPage)
          .map((property) => (
            <div key={property.id} className="w-full sm:px-2 lg:px-12 ">
              <SavedCard property={property} />
            </div>
          ))}
      </div>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
}
