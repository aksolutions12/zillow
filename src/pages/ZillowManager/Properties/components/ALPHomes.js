import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../Firebase/firebase";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ALPList from "./ALPList";

export default function ALPHomes({ linkname }) {
  const [dbData, setDbData] = useState([]); // State to hold fetched data
  const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [searchTerm, setSearchTerm] = useState(""); // State to manage search term
  const [activeTab, setActiveTab] = useState("all"); // State to manage active tab

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

  const handleSearch = () => {
    setLoading(true); // Start loading
    const filtered = dbData.filter((item) =>
      item.propertyInfo.streetAddress
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setLoading(false); // Stop loading
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleIconClick = () => {
    handleSearch();
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Adjust filtering logic based on the tab clicked (for demonstration purposes, assuming filters)
    if (tab === "all") {
      setFilteredData(dbData);
    } else if (tab === "forRent") {
      setFilteredData(dbData);
    } else if (tab === "offMarket") {
      setFilteredData(dbData);
    }
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
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between p-4 border rounded-lg bg-card bg-white mx-2">
        <div className="flex space-x-4 mb-2">
          <a
            href="#"
            className={`text-primary hover:underline ${
              activeTab === "all" ? "text-blue-600" : "text-black"
            }`}
            onClick={() => handleTabClick("all")}
          >
            All ({dbData.length})
          </a>
          <a
            href="#"
            className={`text-muted-foreground hover:underline ${
              activeTab === "forRent" ? "text-blue-600" : "text-black"
            }`}
            onClick={() => handleTabClick("forRent")}
          >
            For rent ({dbData.length})
          </a>
          <a
            href="#"
            className={`text-muted-foreground hover:underline ${
              activeTab === "offMarket" ? "text-blue-600" : "text-black"
            }`}
            onClick={() => handleTabClick("offMarket")}
          >
            Off-market (0)
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative flex items-center w-80">
            <input
              type="text"
              placeholder="Search by city, address and ZIP code"
              className="pl-4 pr-10 py-2 border rounded-lg w-full bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <CiSearch
              className="absolute right-3 cursor-pointer text-muted-foreground"
              onClick={handleIconClick}
            />
          </div>
        </div>
      </div>
      <div className="bg-white w-full p-4">
        <ALPList homedata={filteredData} linkname={linkname} />
      </div>
    </div>
  );
}
