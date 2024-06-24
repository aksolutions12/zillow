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
        <div>
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
