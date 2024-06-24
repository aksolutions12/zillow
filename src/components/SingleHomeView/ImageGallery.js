import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ImageGallery = ({ dataimg }) => {
  if (!dataimg) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  const featuredImage = dataimg.media.selectedFiles[0];
  const galleryImages = dataimg.media.selectedFiles.slice(1);

  return (
    <div className="flex flex-col md:flex-row gap-2">
      {/* Image Gallery Section */}
      <div className="w-full md:w-3/4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={featuredImage}
              alt="Featured"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image}
                  alt={`Gallery ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information Section (hidden on small screens) */}
      <div className="w-full md:w-1/4 flex flex-col hidden md:block">
        <div>
          <h1 className="font-bold text-lg">
            ${dataimg.listingDetails.monthlyRent}
          </h1>
        </div>
        <div className="flex space-x-4 text-center">
          <div className="flex gap-1 items-center">
            <p className="text-lg font-bold text-zinc-900 dark:text-white">
              {dataimg.propertyInfo.totalBedrooms}
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">beds</p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-lg font-bold text-zinc-900 dark:text-white">
              {dataimg.propertyInfo.totalBathrooms}
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">baths</p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-lg font-bold text-zinc-900 dark:text-white">
              {dataimg.propertyInfo.squareFootage}
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">sqft</p>
          </div>
        </div>
        <div>
          <p className="text-blue-500">{dataimg.propertyInfo.streetAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
