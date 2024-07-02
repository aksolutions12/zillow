import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../ContextApi/AuthContext";

export default function ManagerRentalDrop() {
  const { isLoggedIn } = useAuth();
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
              {isLoggedIn ? (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/postalisting"
                >
                  List a rental
                </Link>
              ) : (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/zillowrentalManager"
                >
                  List a rental
                </Link>
              )}
            </li>
            <li className="mb-1">
              {isLoggedIn ? (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/managerproperties"
                >
                  My Listings
                </Link>
              ) : (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/zillowrentalManager"
                >
                  My Listings
                </Link>
              )}
            </li>
            <li className="mb-1">
              {isLoggedIn ? (
                <Link className="text-blue-600 hover:underline" to="/inbox">
                  Messages
                </Link>
              ) : (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/zillowrentalManager"
                >
                  Messages
                </Link>
              )}
            </li>
            <li className="mb-1">
              {isLoggedIn ? (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/applications"
                >
                  Applications
                </Link>
              ) : (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/zillowrentalManager"
                >
                  Applications
                </Link>
              )}
            </li>
            <li className="mb-1">
              {isLoggedIn ? (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/leasemanage"
                >
                  Leases
                </Link>
              ) : (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/zillowrentalManager"
                >
                  Leases
                </Link>
              )}
            </li>
            <li className="mb-1">
              {isLoggedIn ? (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/paymentmanage"
                >
                  Payments
                </Link>
              ) : (
                <Link
                  className="text-blue-600 hover:underline"
                  to="/zillowrentalManager"
                >
                  Payments
                </Link>
              )}
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
