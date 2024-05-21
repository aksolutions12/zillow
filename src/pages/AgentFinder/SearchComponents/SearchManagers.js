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

const SearchManagers = ({ heading, placeholder, specialties }) => {
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
          title="Find property managers in your area."
          description="To get started, enter your location or search for a specific property manager by name."
          resources={[
            "There's no doubt about it: rentals can be a pretty mixed bag. As a renter, you’re never quite sure what you're going to get with a private landlord. And if you own rental property, screening applicants and keeping up with maintenance can feel like a full-time job. So, for both tenants and landlords , property management companies provide a way to make the renting process simpler and less stressful.",
            "Now, finding property managers is simple, too. Zillow's directory includes profiles of property management companies complete with reviews and current listings of vacancies in all their rental properties. If you like a particular complex or a friend had a good experience at a particular rental community, you can contact that property management company directly from Zillow!",
            "When you're searching for your place among the many available rentals, knowing the reputation and track record of the property manager can be the difference between a happy home and a huge headache. Zillow can help you find the property managers who hold the keys to your future domestic bliss.",
            "Zillow is the leading real estate and rental marketplace dedicated to empowering consumers with data, inspiration and knowledge around the place they call home, and connecting them with the best local professionals who can help.",
          ]}
        />
      )}
    </Container>
  );
};

export default SearchManagers;
