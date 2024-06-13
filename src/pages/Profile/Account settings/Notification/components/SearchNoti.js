import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { FaMobile } from "react-icons/fa";

export default function SearchNoti() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(false);

  const handleEditClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleEmail = () => {
    setEmailEnabled(!emailEnabled);
  };

  const togglePush = () => {
    setPushEnabled(!pushEnabled);
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Search</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">Home recommendations</p>
            <p className="text-zinc-500">Email, Push</p>
          </div>
          <button
            onClick={() => handleEditClick("Home recommendations")}
            className="text-blue-500 flex items-center"
          >
            <FiEdit className="mr-1" /> Edit
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Favorites</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">Property updates</p>
            <p className="text-zinc-500">Email, Push</p>
          </div>
          <button
            onClick={() => handleEditClick("Property updates")}
            className="text-blue-500 flex items-center"
          >
            <FiEdit className="mr-1" /> Edit
          </button>
        </div>
        <hr className="bg-gray-100 pb-4" />
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Market reports</p>
            <p className="text-zinc-500">Email</p>
          </div>
          <button
            onClick={() => handleEditClick("Market reports")}
            className="text-blue-500 flex items-center"
          >
            <FiEdit className="mr-1" /> Edit
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="max-w-sm mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Edit notification
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                <span className="sr-only">Close</span>
                &#x2715;
              </button>
            </div>
            <h3 className="text-md font-medium text-zinc-600 dark:text-zinc-300 mb-4">
              {modalContent}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              {modalContent === "Home recommendations"
                ? "Property recommendations based on your Zillow activity."
                : modalContent === "Property updates"
                ? "Updates on properties you have favorited."
                : "Market reports related to your saved searches."}
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <IoMdMail className="mr-2" />
                <span className="text-zinc-700 dark:text-zinc-300">Email</span>
              </div>
              <div className="flex items-center">
                <span className="text-zinc-700 dark:text-zinc-300 mr-2">
                  {emailEnabled ? "On" : "Off"}
                </span>
                <button
                  onClick={toggleEmail}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 ${
                    emailEnabled ? "bg-blue-500" : "bg-gray-400"
                  }`}
                >
                  <span className="sr-only">Enable Email</span>
                  <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full ${
                      emailEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
            {modalContent !== "Market reports" && (
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FaMobile className="mr-2" />
                  <span className="text-zinc-700 dark:text-zinc-300">Push</span>
                </div>
                <div className="flex items-center">
                  <span className="text-zinc-700 dark:text-zinc-300 mr-2">
                    {pushEnabled ? "On" : "Off"}
                  </span>
                  <button
                    onClick={togglePush}
                    className={`relative inline-flex items-center h-6 rounded-full w-11 ${
                      pushEnabled ? "bg-blue-500" : "bg-gray-400"
                    }`}
                  >
                    <span className="sr-only">Enable Push</span>
                    <span
                      className={`inline-block w-4 h-4 transform bg-white rounded-full ${
                        pushEnabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    ></span>
                  </button>
                </div>
              </div>
            )}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="text-blue-600 dark:text-blue-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
