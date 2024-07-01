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
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-2">Rental Management Tools</h2>
          <ul>
            <li className="mb-1">
              <Link
                to="/postalisting"
                className="text-blue-600 hover:underline"
              >
                List a rental
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/managerproperties"
                className="text-blue-600 hover:underline"
              >
                My Listings
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/inbox" className="text-blue-600 hover:underline">
                Messages
              </Link>
            </li>
            <li className="mb-1">
              <Link
                to="/applications"
                className="text-blue-600 hover:underline"
              >
                Applications
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/leasemanage" className="text-blue-600 hover:underline">
                Leases
              </Link>
            </li>
            <li className="mb-1">
              <a
                href="/paymentmanage"
                className="text-blue-600 hover:underline"
              >
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
