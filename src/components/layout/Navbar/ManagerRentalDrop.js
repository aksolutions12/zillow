import React from "react";

export default function ManagerRentalDrop() {
  return (
    <div
      className="absolute z-50"
      style={{
        top: "calc(80% + 10px)",
        left: "calc(70% - 70px)", // Adjust left position to align with the button
      }}
    >
      <div className="p-4 rounded-lg bg-white">
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-2">Rental Management Tools</h2>
          <ul>
            <li className="mb-1">
              <a href="#" className="text-blue-600 hover:underline">
                List a rental
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-blue-600 hover:underline">
                My Listings
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-blue-600 hover:underline">
                Messages
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-blue-600 hover:underline">
                Applications
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-blue-600 hover:underline">
                Leases
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-blue-600 hover:underline">
                Payments
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4" />
        <div>
          <h2 className="font-bold text-lg mb-2">Learn More</h2>
          <ul>
            <li className="mb-1">
              <a href="#" className="text-blue-600 hover:underline">
                Zillow Rental Manager
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-blue-600 hover:underline">
                Price My Rental
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="text-blue-600 hover:underline">
                Resource Center
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
