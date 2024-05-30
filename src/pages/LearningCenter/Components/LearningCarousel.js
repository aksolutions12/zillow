import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselCard from "./CarouselCard";
import house from "../../../assets/images/hom2.jpg";
import house2 from "../../../assets/images/home.jpg";
import porch from "../../../assets/images/womenonporch.jpg";
import "./LearningCarousel.css"; // Import your CSS file

const LearningCarousel = ({ heading }) => {
  const [slides, setSlides] = useState([
    {
      imageUrl: house,
      category: "Financing",
      readTime: "8 min read",
      title: "How Does a 1% Interest Rate Change Affect Your Buying Power?",
      description:
        "Even seemingly small changes in mortgage rates, like 1% or 0.5%, can make a big difference in what you pay over the life of your loan.",
    },
    {
      imageUrl: house2,
      category: "Investing",
      readTime: "10 min read",
      title: "The Basics of Stock Market Investing",
      description:
        "What is vernacular architecture, you ask? From the Trinity to Shotgun houses, step into the world of vernacular housing.",
    },
    {
      imageUrl: porch,
      category: "Home Buying",
      readTime: "12 min read",
      title: "Top Tips for First-Time Homebuyers",
      description:
        "Essential advice for those purchasing a home for the first time, from budgeting to closing.",
    },
    {
      imageUrl: house,
      category: "Retirement",
      readTime: "15 min read",
      title: "Planning for Retirement: Steps to Secure Your Future",
      description:
        "Explore strategies for retirement planning, including saving, investing, and managing risks.",
    },
  ]);

  return (
    <div className="bg-sky-50 ">
      <h1 className="font-bold text-2xl px-4 pt-4">{heading}</h1>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <CarouselCard {...slide} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default LearningCarousel;
