import React, { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function PreferenceSection() {
  const [zillowPreference, setZillowPreference] = useState(true);
  const [zillowClosingPreference, setZillowClosingPreference] = useState(true);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleZillowToggle = () => {
    setZillowPreference(!zillowPreference);
  };

  const handleZillowClosingToggle = () => {
    setZillowClosingPreference(!zillowClosingPreference);
  };

  return (
    <div>
      {" "}
      <button
        onClick={handleBackClick}
        className="text-blue-600 dark:text-blue-400 mb-4 px-4 pt-2 flex items-center"
      >
        <FiArrowLeftCircle className="inline-block mr-2 " /> Back to Saved homes
      </button>
      <div className="p-6 bg-white">
        <h2 className="text-lg font-bold mb-4">My Paperless Preferences</h2>
        <div className="mb-6">
          <h3 className="text-md font-bold mb-2">Why go paperless?</h3>
          <p className="mb-2">
            If you agree, you’ll receive and sign any documents electronically.
            If you do not agree, any documents will be mailed to you.
          </p>
          <p>
            For more info, please read about electronic signatures{" "}
            <a href="#" className="text-blue-600">
              here
            </a>
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-md font-bold mb-2">Your Settings</h3>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-bold">Zillow</h4>
              <p>
                I agree to sending, signing, and receiving documents
                electronically from Zillow, Inc., which includes Zillow.com.
              </p>
            </div>
            <button
              onClick={handleZillowToggle}
              className={`w-10 h-6 bg-zinc-200 rounded-full relative ${
                zillowPreference ? "bg-blue-600" : ""
              }`}
            >
              <span
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md ${
                  zillowPreference ? "transform translate-x-full" : ""
                }`}
              ></span>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold">Zillow Closing Services</h4>
              <p>
                I agree to sending, signing, and receiving documents
                electronically from Zillow Closing Services.
              </p>
            </div>
            <button
              onClick={handleZillowClosingToggle}
              className={`w-10 h-6 bg-zinc-200 rounded-full relative ${
                zillowClosingPreference ? "bg-blue-600" : ""
              }`}
            >
              <span
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md ${
                  zillowClosingPreference ? "transform translate-x-full" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded">
            Reject All
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
