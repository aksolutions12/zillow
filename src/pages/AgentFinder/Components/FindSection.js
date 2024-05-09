import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 204px;
  height: 43px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  padding: 10px;
  font-size: 14px;
`;

const Select = styled.select`
  width: 204px;
  height: 43px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  padding: 10px;
  font-size: 14px;
`;

const FindSection = ({ heading, placeholder, specialties }) => {
  const languages = ["English", "Spanish", "French", "German"];

  return (
    <div className="bg-white p-4">
      <h2 className="text-4xl font-bold mb-4">{heading}</h2>
      <div className="flex flex-wrap flex-row items-center bg-gray-100 p-5 ">
        {/* Location Input */}
        <div className="lg:w-1/4 md:w-1/2 sm:w-full">
          <label
            htmlFor="input-location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Location
          </label>
          <Input type="text" id="input-location" placeholder="City/Zip" />
        </div>

        {/* Name Input */}
        <div className="lg:w-1/4 md:w-1/2 sm:w-full">
          <label
            htmlFor="input-name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <Input type="text" id="input-name" placeholder={placeholder} />
        </div>

        {/* Specialties Select */}
        <div className="lg:w-1/4 md:w-1/2 sm:w-full">
          <label
            htmlFor="select-specialties"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Specialties
          </label>
          <Select id="select-specialties">
            <option disabled selected>
              Choose a specialty
            </option>
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty} style={{ color: "teal" }}>
                {specialty}
              </option>
            ))}
          </Select>
        </div>

        {/* Languages Select */}
        <div className="lg:w-1/4 md:w-1/2 sm:w-full">
          <label
            htmlFor="select-languages"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Languages
          </label>
          <Select id="select-languages">
            <option disabled selected>
              Choose a language
            </option>
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FindSection;
