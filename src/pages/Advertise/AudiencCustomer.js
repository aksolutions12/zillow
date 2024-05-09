import React from "react";
import bardimg from "../../assets/images/board-advertise.png";
import homeing from "../../assets/images/home-advertise.png";
import rentimg from "../../assets/images/rent-advertise.png";

const AudienceCustomer = () => {
  return (
    <div className="bg-indigo-950 text-white py-10">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Zillow Group Audience</h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-transparent text-center p-6 rounded-lg">
            <img
              src={bardimg}
              alt="Image 1"
              className="w-48 h-48 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">41% to buy or sell</h3>
            <p className="text-lg font-light">
              Nearly 41% of people who visited Zillow and/or Trulia in the past
              12 months are planning to buy and/or sell a home in the next 12
              months.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-transparent text-center p-6 rounded-lg">
            <img
              src={homeing}
              alt="Image 2"
              className="w-48 h-48 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">194 million</h3>
            <p className="text-lg font-light">
              More than 194 million average monthly unique users visited Zillow
              Group brands’ mobile apps and websites in Q2 2019.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-transparent text-center p-6 rounded-lg">
            <img
              src={rentimg}
              alt="Image 3"
              className="w-48 h-48 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Most visited rental network
            </h3>
            <p className="text-lg font-light">
              Zillow Rentals is the most visited rental network.
            </p>
          </div>
        </div>

        {/* Paragraph Section */}
        <div className="text-center mt-8 px-32">
          <p className="text-xs font-light">
            Source: 41% stat: Zillow Group Tracking Survey, Q2 2019. 194 million
            stat: Google Analytics and Adobe Analytics. Rental network claim:
            Comscore Media Metrix® Multi-Platform, Key Measures, Custom-defined
            list including: Zillow Rentals, Apartments.com Network, RentPath
            Network, ForRent.com & Homes.com Network, Total Visits, July 2020,
            United States. Zillow Rentals is the deduplicated reach of
            Zillow.com Rentals, Trulia.com Rentals and HotPads.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudienceCustomer;
