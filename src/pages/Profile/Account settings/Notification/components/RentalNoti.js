import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

export default function RentalNoti() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });
  const [emailEnabled, setEmailEnabled] = useState(true);

  const handleEditClick = (title, description) => {
    setModalContent({ title, description });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleEmail = () => {
    setEmailEnabled(!emailEnabled);
  };

  return (
    <div className="w-full mx-auto px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Rental property management</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">Property management resources</p>
            <p className="text-zinc-500">Email</p>
          </div>
          <button
            onClick={() =>
              handleEditClick(
                "Property management resources",
                "Market trends, tips, and advice for landlords and property managers."
              )
            }
            className="text-blue-500 flex items-center"
          >
            <FiEdit className="mr-1" /> Edit
          </button>
        </div>
        <hr className="bg-gray-100 pb-4" />
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">Zillow Rental Manager</p>
            <p className="text-zinc-500">Email</p>
          </div>
          <button
            onClick={() =>
              handleEditClick(
                "Zillow Rental Manager",
                "Manage your rental properties with Zillow Rental Manager."
              )
            }
            className="text-blue-500 flex items-center"
          >
            <FiEdit className="mr-1" /> Edit
          </button>
        </div>

        <hr className="bg-gray-100 pb-4" />
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">Building reviews</p>
            <p className="text-zinc-500">Email</p>
          </div>
          <button
            onClick={() =>
              handleEditClick(
                "Building reviews",
                "Receive reviews and ratings for your properties."
              )
            }
            className="text-blue-500 flex items-center"
          >
            <FiEdit className="mr-1" /> Edit
          </button>
        </div>

        <hr className="bg-gray-100 pb-4" />
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">Portfolio performance</p>
            <p className="text-zinc-500">Email</p>
          </div>
          <button
            onClick={() =>
              handleEditClick(
                "Portfolio performance",
                "Get insights into your rental portfolio's performance."
              )
            }
            className="text-blue-500 flex items-center"
          >
            <FiEdit className="mr-1" /> Edit
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Zillow news</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">Tips, guides, and products</p>
            <p className="text-zinc-500">Email</p>
          </div>
          <button
            onClick={() =>
              handleEditClick(
                "Tips, guides, and products",
                "Stay updated with the latest tips, guides, and products from Zillow."
              )
            }
            className="text-blue-500 flex items-center"
          >
            <FiEdit className="mr-1" /> Edit
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Edit notification
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                <span className="sr-only">Close</span>
                <AiOutlineClose className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {modalContent.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {modalContent.description}
              </p>
            </div>
            <div className="flex items-center mt-4">
              <IoMdMail className="mr-2" />
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                Email
              </span>
              <div className="ml-auto flex items-center">
                <span className="text-sm text-zinc-700 dark:text-zinc-300 mr-2">
                  {emailEnabled ? "On" : "Off"}
                </span>
                <button
                  onClick={toggleEmail}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 ${
                    emailEnabled ? "bg-blue-500" : "bg-gray-400"
                  } focus:outline-none`}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`inline-block w-4 h-4 transform bg-white rounded-full ${
                      emailEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={handleCloseModal}
                className="text-sm text-zinc-700 dark:text-zinc-300 hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600"
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
