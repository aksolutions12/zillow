import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar/Navbar";
import logoUrl from "../../assets/images/zil-logo.png";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import MapSection from "../Buy/Components/MapSection";
import ListHomes from "../Buy/Components/ListHomes";
import HomeSearch from "../Buy/Components/HomeSearch";
import { db } from "../../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const RentPage = () => {
  const [dbData, setDbData] = useState([]); // State to hold fetched data
  const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Function to fetch data from Firestore
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, "posts"); // Use the correct method to get a reference to the collection
        const snapshot = await getDocs(postsRef);
        if (!snapshot.empty) {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setDbData(data);
          setFilteredData(data); // Initially set filteredData to all data
        } else {
          console.log("No matching documents.");
        }
      } catch (error) {
        console.error("Error fetching posts: ", error);
      } finally {
        setLoading(false); // Set loading to false once data fetching is complete
      }
    };

    fetchPosts(); // Invoke the fetchPosts function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  const filterByPrice = (minPrice, maxPrice) => {
    setLoading(true); // Start loading
    const filtered = dbData.filter((item) => {
      const matchesMinPrice =
        minPrice !== "No Min"
          ? item.listingDetails.monthlyRent >=
            parseFloat(minPrice.replace(/[^0-9.-]+/g, ""))
          : true;

      const matchesMaxPrice =
        maxPrice !== "No Max"
          ? item.listingDetails.monthlyRent <=
            parseFloat(maxPrice.replace(/[^0-9.-]+/g, ""))
          : true;

      return matchesMinPrice && matchesMaxPrice;
    });

    setFilteredData(filtered);
    setLoading(false); // Stop loading
  };

  const handleSearch = (searchTerm) => {
    setLoading(true); // Start loading
    const filtered = dbData.filter((item) => {
      const matchesSearchTerm = searchTerm
        ? item.propertyInfo.streetAddress
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        : true;

      return matchesSearchTerm;
    });

    setFilteredData(filtered);
    setLoading(false); // Stop loading
  };

  const filterByBedroomsAndBathrooms = (bedrooms, bathrooms) => {
    setLoading(true); // Start loading

    const filtered = dbData.filter((item) => {
      let matchesBedrooms = true;
      if (bedrooms !== "Any") {
        matchesBedrooms = item.propertyInfo.totalBedrooms >= parseInt(bedrooms);
      }

      let matchesBathrooms = true;
      if (bathrooms !== "Any") {
        matchesBathrooms =
          item.propertyInfo.totalBathrooms >= parseFloat(bathrooms);
      }

      return matchesBedrooms && matchesBathrooms;
    });

    setFilteredData(filtered);
    setLoading(false); // Stop loading
  };

  const filterByHomeType = (selectedTypes) => {
    setLoading(true); // Start loading

    const filtered = dbData.filter((item) => {
      const homeType = item.propertyInfo.propertyType;

      const matchesHouses = selectedTypes.houses && homeType === "House";
      const matchesApartments =
        selectedTypes.apartments && homeType === "Apartment";
      const matchesTownhomes =
        selectedTypes.townhomes && homeType === "Townhouse";

      return matchesHouses || matchesApartments || matchesTownhomes;
    });

    setFilteredData(filtered);
    setLoading(false); // Stop loading
  };

  if (loading) {
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
  return (
    <>
      <Navbar logoUrl={logoUrl} />
      <HomeSearch
        onSearch={handleSearch}
        onFilterByPrice={filterByPrice}
        onFilterByBedroomsAndBathrooms={filterByBedroomsAndBathrooms}
        onFilterByHomeType={filterByHomeType}
      />
      <div className="flex w-full bg-white p-2">
        <div className="w-full lg:w-2/5 sticky top-0 h-screen overflow-y-auto lg:block hidden">
          <MapSection />
        </div>
        <div className="w-full lg:w-3/5 overflow-y-auto">
          <div className="h-screen overflow-y-auto">
            <ListHomes heading="Rental Listing" dbData={filteredData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RentPage;
