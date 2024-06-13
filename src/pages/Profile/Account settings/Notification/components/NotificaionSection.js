import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import SearchNoti from "./SearchNoti";
import HomeNoti from "./HomeNoti";
import RentalNoti from "./RentalNoti";
import { IoMdClose } from "react-icons/io";

const NotificaionSection = () => {
  const navigate = useNavigate();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const toggleNotifications = () => {
    if (notificationsEnabled) {
      setShowConfirmationModal(true);
    } else {
      setNotificationsEnabled(true);
    }
  };

  const handleConfirmationCancel = () => {
    setShowConfirmationModal(false);
  };

  const handleTurnOffNotifications = () => {
    setNotificationsEnabled(false);
    setShowConfirmationModal(false);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div>
        <button
          onClick={handleBackClick}
          className="text-blue-600 dark:text-blue-400 mb-4  pt-2 flex items-center"
        >
          <FiArrowLeftCircle className="inline-block mr-2 " /> Back to Saved
          homes
        </button>
        <div className="mb-4">
          <h1 className="font-bold text-3xl font-serif">Notifications</h1>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-md">
        <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-700">
          <p
            className={`text-zinc-700 dark:text-zinc-300 ${
              notificationsEnabled ? "" : "font-bold"
            }`}
          >
            {notificationsEnabled
              ? "Get notifications from Zillow so you can stay on top of your journey to home. Turn them off any time you’d like."
              : "You’ve turned off all notifications from Zillow. You can turn them back on at any time."}
          </p>
          <div className="flex items-center">
            <span className="mr-2 text-zinc-700 dark:text-zinc-300">
              {notificationsEnabled ? "On" : "Off"}
            </span>
            <button
              onClick={toggleNotifications}
              className={`relative inline-flex items-center h-6 rounded-full w-11 ${
                notificationsEnabled ? "bg-blue-500" : "bg-gray-400"
              } focus:outline-none`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full ${
                  notificationsEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </button>
          </div>
        </div>

        {notificationsEnabled && (
          <div className="py-4">
            <SearchNoti />
            <HomeNoti />
            <RentalNoti />
          </div>
        )}

        {/* Confirmation Modal */}
        {showConfirmationModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
            <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center border-b pb-2">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Are you sure?
                </h2>
                <button
                  onClick={handleConfirmationCancel}
                  className="text-zinc-500 dark:text-zinc-400 focus:outline-none"
                >
                  <IoMdClose className="h-6 w-6" />
                </button>
              </div>
              <div className="py-4">
                <p className="text-zinc-700 dark:text-zinc-300">
                  You’re about to turn off notifications from Zillow, Zillow
                  Rental Manager, and Zillow Home Loans.
                </p>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleConfirmationCancel}
                  className="border border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 px-4 py-2 rounded-lg focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  onClick={handleTurnOffNotifications}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none"
                >
                  Turn off all notifications
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificaionSection;
