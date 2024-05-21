import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const agentsData = [
  {
    name: "Matt Laricy",
    phone: "(708) 231-0608",
    rating: "★★★★★",
    reviewCount: 1653,
    company: "Americorp Real Estate",
    license: "471003711",
    location: "Chicago, IL",
    reviewDate: "16/05/2024",
    reviewText:
      "He was patient and able to clarify the several questions I had during ...",
    image: "https://placehold.co/100x100",
  },
  {
    name: "John Doe",
    phone: "(123) 456-7890",
    rating: "★★★☆☆",
    reviewCount: 987,
    company: "ABC Realty",
    license: "123456789",
    location: "New York, NY",
    reviewDate: "18/05/2024",
    reviewText:
      "John was helpful and provided valuable insights into the real estate market...",
    image: "https://placehold.co/100x100",
  },
  {
    name: "Jane Smith",
    phone: "(987) 654-3210",
    rating: "★★★★☆",
    reviewCount: 754,
    company: "XYZ Properties",
    license: "987654321",
    location: "Los Angeles, CA",
    reviewDate: "20/05/2024",
    reviewText:
      "Jane demonstrated professionalism and expertise throughout the home buying process...",
    image: "https://placehold.co/100x100",
  },
  {
    name: "Emily Johnson",
    phone: "(555) 123-4567",
    rating: "★★★★★",
    reviewCount: 2000,
    company: "Dream Home Realty",
    license: "555123456",
    location: "Miami, FL",
    reviewDate: "22/05/2024",
    reviewText:
      "Emily provided excellent service and helped us find our dream home...",
    image: "https://placehold.co/100x100",
  },
  {
    name: "Michael Brown",
    phone: "(333) 444-5555",
    rating: "★★★★☆",
    reviewCount: 1245,
    company: "Sunrise Realty",
    license: "333444555",
    location: "San Francisco, CA",
    reviewDate: "24/05/2024",
    reviewText:
      "Michael went above and beyond to ensure a smooth home buying experience...",
    image: "https://placehold.co/100x100",
  },
  {
    name: "Sarah Wilson",
    phone: "(777) 888-9999",
    rating: "★★★★★",
    reviewCount: 3000,
    company: "Golden Gate Properties",
    license: "777888999",
    location: "Seattle, WA",
    reviewDate: "26/05/2024",
    reviewText:
      "Sarah is incredibly knowledgeable and helped us find the perfect home...",
    image: "https://placehold.co/100x100",
  },
  {
    name: "David Lee",
    phone: "(111) 222-3333",
    rating: "★★★★☆",
    reviewCount: 1750,
    company: "Skyline Realtors",
    license: "111222333",
    location: "Boston, MA",
    reviewDate: "28/05/2024",
    reviewText:
      "David provided valuable advice throughout the home buying process...",
    image: "https://placehold.co/100x100",
  },
  {
    name: "Anna Martinez",
    phone: "(999) 888-7777",
    rating: "★★★☆☆",
    reviewCount: 800,
    company: "Harbor Real Estate",
    license: "999888777",
    location: "Portland, OR",
    reviewDate: "30/05/2024",
    reviewText:
      "Anna was friendly and helpful, but communication could have been better...",
    image: "https://placehold.co/100x100",
  },
];

export default function AgentList() {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5); // Number of agents per page
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const agentsToShow = agentsData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto p-4 bg-white px-5 py-10">
      <div className="flex justify-between items-center px-10 border-b pb-2 mb-4">
        <h2 className="text-lg font-semibold">AGENTS</h2>
        <h2 className="text-lg font-semibold hidden md:block">LOCATION</h2>
        <h2 className="text-lg font-semibold hidden pr-10 md:block">
          CLIENT REVIEW
        </h2>
      </div>
      <div className="space-y-4">
        {agentsToShow.map((agent, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 border-b pb-4"
          >
            <div className="flex-shrink-0">
              <img
                className="w-16 h-16 rounded-full"
                src={agent.image}
                alt={agent.name}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-blue-700 font-semibold">{agent.name}</h3>
              <p className="text-zinc-700">{agent.phone}</p>
              <div className="flex items-center space-x-1">
                <span className="text-blue-500">{agent.rating}</span>
                <span className="text-zinc-500">
                  {agent.reviewCount} reviews
                </span>
              </div>
              <p className="text-zinc-500">{agent.company}</p>
              <p className="text-zinc-500">Agent License #: {agent.license}</p>
            </div>
            <div className="hidden md:flex md:flex-shrink-0">
              {agent.location}
            </div>
            <div className="hidden md:flex md:flex-col md:text-center pl-32 md:flex-1">
              <p className="text-blue-700 font-semibold">
                Review {agent.reviewDate}
              </p>
              <p className="text-zinc-700">{agent.reviewText}</p>
            </div>
            <div className="flex-shrink-0">
              <FaChevronRight className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        ))}
      </div>
      <Stack spacing={2} justifyContent="center" alignItems="center" mt={5}>
        <Pagination
          count={Math.ceil(agentsData.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
          size="large"
        />
      </Stack>
    </div>
  );
}
