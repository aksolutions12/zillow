import React, { useState, useEffect } from "react";
import user from "../../../../assets/images/men-port.jpg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonialData = [
  {
    content:
      "I am so absolutely impressed with the Zillow team and all of your support! I initially was not sure if I wanted to proceed...but after speaking with my dedicated Zillow coach, I felt encouraged and optimistic that it would prove to be successful... I can't say enough wonderful things about Zillow Group and the system. Thank you again for providing this service.",
    author: "Vanessa Rimkus",
    company: "Fairway Independent Mortgage Corporation",
    nmls: "NMLS#: 965136",
    image: user, // Image URL of the author
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor est. Aliquam tempor justo vitae est scelerisque sollicitudin. Sed sed massa sit amet ligula aliquet tempus. Nullam nec nulla in felis bibendum aliquet.",
    author: "John Doe",
    company: "ABC Mortgage Bank",
    nmls: "NMLS#: 123456",
    image: user, // Image URL of the author
  },
  {
    content:
      "Suspendisse potenti. Nullam aliquet consectetur magna sit amet placerat. In hac habitasse platea dictumst. Integer ut metus luctus, fermentum justo ac, vestibulum justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas vel viverra magna.",
    author: "Alice Smith",
    company: "Dream Home Mortgages",
    nmls: "NMLS#: 789012",
    image: user, // Image URL of the author
  },
  {
    content:
      "Ut consequat libero ut purus facilisis, nec malesuada nisi tempor. Phasellus eu erat nulla. Curabitur id orci quis elit faucibus venenatis vitae sed purus. Duis ac lacinia nunc, vitae iaculis magna. Donec dapibus ullamcorper metus, vel fringilla ligula suscipit sit amet.",
    author: "Emily Johnson",
    company: "Home Sweet Home Loans",
    nmls: "NMLS#: 456789",
    image: user, // Image URL of the author
  },
];

export default function TestimonialCard() {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === testimonialData.length - 1 ? 0 : prevCard + 1
    );
  };

  const handlePreviousCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? testimonialData.length - 1 : prevCard - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(handleNextCard, 3000);
    return () => clearTimeout(timer);
  }, [currentCard]);

  const testimonial = testimonialData[currentCard];

  return (
    <div className="flex items-center bg-zinc-100 p-6 h-auto sm:h-72 rounded-lg shadow-md w-full py-16 mx-auto overflow-hidden relative ">
      <button
        onClick={handlePreviousCard}
        className="text-zinc-500 hover:text-zinc-700 absolute top-1/2 transform -translate-y-1/2 left-4"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <div className="flex-grow">
        <div className="flex items-start sm:flex-col lg:flex-row">
          <div className="flex-shrink-0 mx-4 sm:mx-0">
            <img
              className="w-16 h-16 rounded-full mx-auto sm:mx-0"
              src={testimonial.image}
              alt="Profile Picture"
            />
          </div>
          <div className="ml-2">
            <p className="text-zinc-700">{testimonial.content}</p>
            <p className="mt-4 font-semibold text-zinc-900">
              {testimonial.author} | {testimonial.company}
            </p>
            <p className="text-zinc-600">{testimonial.nmls}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleNextCard}
        className="text-zinc-500 hover:text-zinc-700 absolute top-1/2 transform -translate-y-1/2 right-4"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
