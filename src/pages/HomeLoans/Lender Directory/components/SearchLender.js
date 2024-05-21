import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LendersListDesign from "./LendersListDesign";
import TabListLenders from "./TabListLenders";

export default function SearchLender() {
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("English");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
    setSearchPerformed(true); // Set searchPerformed to true after search
  };

  return (
    <div className="p-6 w-full mx-auto bg-white">
      <h1 className="text-4xl font-bold mb-4">Lender Directory</h1>
      <p className="text-xl font-semibold mb-2">Search lenders in your area</p>
      <p className="mb-6">
        Enter location, name, or preferred language to start a new search
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block font-semibold mb-1" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            placeholder="City, State/Territory or ZIP"
            className="w-full md:w-64 p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Loan officer or bank"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="language">
            Preferred language
          </label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="w-full p-2 border rounded-md"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
            <option>Chinese</option>
            <option>Japanese</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white w-full md:w-auto px-4 py-2 rounded-md"
          >
            Search lenders
          </button>
        </div>
      </div>
      <p className="mt-4 text-sm text-zinc-500">
        Only lenders licensed in the state will be displayed.
      </p>
      {searchPerformed ? (
        <TabListLenders />
      ) : (
        <p className="my-10 text-base text-center text-zinc-500">
          Sorry, we don't recognize that location. Please check your spelling or
          enter a valid city, state, or ZIP
        </p>
      )}
    </div>
  );
}
