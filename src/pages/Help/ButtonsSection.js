import React from "react";
import styled from "styled-components";
import OutlinedButton from "../../components/Button/OutlinedButton";

// Define a styled component with modified styles
const CustomOutlinedButton = styled(OutlinedButton)`
  background-color: transparent;
  color: #3182ce;
  border-radius: 8px; /* Decrease the border radius */
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #4299e1;
    color: #fff; /* Change text color on hover */
    border-color: #4299e1; /* Change border color on hover */
  }
`;

const ButtonsSection = () => {
  // Data for the buttons
  const buttonData = [
    "Agents",
    "Lenders",
    "Zillow Home Loans",
    "Rentals",
    "Homebuyer",
    "Homeowner",
    "Home Seller",
    "Privacy",
    "Mobile Apps",
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 p-4 pt-12">
      {/* Render nine buttons using map */}
      {buttonData.map((text, index) => (
        <CustomOutlinedButton
          key={index}
          style={{ width: "357px", height: "64px" }}
          className=" sm:w-full md:w-full "
        >
          {text}
        </CustomOutlinedButton>
      ))}

      {/* Another button outside with width 100% */}
      <CustomOutlinedButton style={{ width: "100%", height: "64px" }}>
        Zillow Canada
      </CustomOutlinedButton>

      <hr className="border-1 border-gray-200 mb-16 w-full mt-8" />
    </div>
  );
};

export default ButtonsSection;
