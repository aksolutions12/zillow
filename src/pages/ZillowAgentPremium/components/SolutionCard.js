import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  max-width: 20rem;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #4a5568;
  text-align: center;
`;

const LearnMoreButton = styled.a`
  background-color: #2563eb;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  text-align: center;
  margin-top: auto; /* Align button to the bottom of the card */
  margin-bottom: 1rem; /* Add space between button and bottom edge */

  &:hover {
    background-color: #1e3a8a;
  }
`;

const SolutionCard = ({ title, description }) => {
  return (
    <CardContainer>
      <Card>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardContent>
        <LearnMoreButton href="#">Learn More</LearnMoreButton>
      </Card>
    </CardContainer>
  );
};

export default SolutionCard;
