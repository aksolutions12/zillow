import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 340px; /* Adjusted width */
  height: 43px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px; /* Added margin for spacing */
`;

const Button = styled.button`
  width: 87px; /* Adjusted width */
  height: 43px;
  border-radius: 4px;
  border: none;
  background-color: #5d5fef;
  color: white;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
`;

const BuilderSearch = ({ heading, placeholder }) => {
  return (
    <div className="bg-white p-4">
      <h2 className="text-4xl font-bold mb-4">{heading}</h2>
      <div className="flex flex-wrap flex-row items-center bg-gray-100 p-5 ">
        {/* Location Input */}
        <div className="lg:w-96 md:w-1/2 sm:w-full">
          <label
            htmlFor="input-location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Location
          </label>
          <Input type="text" id="input-location" placeholder="City/Zip" />
        </div>

        {/* Name Input */}
        <div className="lg:w-1/2 sm:w-full">
          <label
            htmlFor="input-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <Input type="text" id="input-name" placeholder={placeholder} />
          {/* Add button here */}
          <Button className="ml-4">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default BuilderSearch;
