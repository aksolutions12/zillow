import React, { useState } from "react";
import styled from "styled-components";
import FindGuideSection from "../Components/FindGuideSection";

import findstory from "../../../assets/images/find agent.png";
import CommonList from "../Components/CommonList";
import { detailscommon } from "../../../data/CommonListData";
// Styled Components
const Container = styled.div`
  padding: 24px;
  background-color: #ffff;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 16px;
`;

const FormContainer = styled.div`
  background-color: #f3f4f6;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center; /* Center items vertically */
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
`;

const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 24px;
  border-radius: 4px; /* Adjusted border-radius */
  font-size: 14px; /* Adjusted font size */
  font-weight: 500;
  cursor: pointer;
  height: 100%; /* Match height to inputs */
`;

const SearchOther = ({ heading, placeholder, specialties }) => {
  const languages = ["English", "Spanish", "French", "German"];
  const [showAgentList, setShowAgentList] = useState(false);

  const handleSearchClick = () => {
    setShowAgentList(true);
  };

  return (
    <Container>
      <Title>{heading}</Title>
      <FormContainer>
        <div>
          <Label htmlFor="input-location">Location</Label>
          <Input type="text" id="input-location" placeholder="City/Zip" />
        </div>
        <div>
          <Label htmlFor="input-name">Name</Label>
          <Input type="text" id="input-name" placeholder={placeholder} />
        </div>
        <div>
          <Label htmlFor="select-specialties">Specialties</Label>
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
        <div>
          <Label htmlFor="select-languages">Languages</Label>
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
        <div className="mt-5">
          <Button onClick={handleSearchClick}>Search</Button>
        </div>
      </FormContainer>
      {showAgentList ? (
        <CommonList details={detailscommon} />
      ) : (
        <FindGuideSection
          imageUrl={findstory}
          title="Find professionals in your area."
          description="
        To get started, enter your location or search for a specific professional by name."
          resources={[]}
        />
      )}
    </Container>
  );
};

export default SearchOther;
