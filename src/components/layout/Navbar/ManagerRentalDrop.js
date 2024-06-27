import React from "react";
import { Link } from "react-router-dom";

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
              <Link
                to="/zillowrentalManager"
                className="text-blue-600 hover:underline"
              >
                Zillow Rental Manager
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/priceMyRental"
                className="text-blue-600 hover:underline"
              >
                Price My Rental
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/managerRentalResources"
                className="text-blue-600 hover:underline"
              >
                Resource Center
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
