import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

export default function HomeNoti() {
  const [showModal, setShowModal] = useState(false);
  const [notificationFrequency, setNotificationFrequency] = useState("Off");

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectChange = (event) => {
    setNotificationFrequency(event.target.value);
  };

  return (
    <div className="w-full mx-auto px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Your home</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-zinc-500 italic">
              You haven't claimed any properties, yet.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Home loans & Refinancing</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">Mortgage product updates & offers</p>
            <p className="text-zinc-500">Email</p>
          </div>
          <button
            onClick={handleEditClick}
            className="text-blue-500 flex items-center"
          >
            <FiEdit className="mr-1" /> Edit
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75">
          <div className="max-w-sm mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                Edit notification
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
              >
                <AiOutlineClose className="h-6 w-6" />
              </button>
            </div>
            <h3 className="text-zinc-600 dark:text-zinc-300 mb-4">
              Mortgage product updates & offers
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              Personalized mortgage info and offers that may be available for
              you.
            </p>
            <div className="flex items-center mb-4">
              <IoMdMail className="mr-2" />
              <span className="text-zinc-600 dark:text-zinc-300">Email</span>
              <div className="ml-auto relative">
                <select
                  value={notificationFrequency}
                  onChange={handleSelectChange}
                  className="bg-white dark:bg-zinc-700 border border-blue-500 text-blue-500 dark:text-blue-400 px-3 py-1 rounded-md flex items-center"
                >
                  <option value="Off">Off</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="text-blue-500 dark:text-blue-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
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
