import React, { useState } from "react";
import downloadimg from "../../../../assets/images/Play-video.png";
import VideoModal from "./VideoModal";

const HeroDownload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-blue-500 text-white p-8 px-12 h-screen">
      <div className="flex flex-col lg:flex-row items-center h-full">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold">Download the Zillow app</h1>
          <p className="text-lg">
            Don’t miss out on the right home for you — browse up-to-date
            listings, refine your search and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Mobile number"
              className="p-2 rounded-lg text-black outline-none w-full lg:w-64"
            />
            <button className="bg-white text-blue-800 hover:bg-blue-900 hover:text-white font-bold p-2 px-6 rounded-lg">
              Text me the free app
            </button>
          </div>
          <p className="text-xs font-light text-gray-50">
            U.S. mobile numbers only. Message and data rates may apply. I agree
            to receive a one-time text message containing a link to download the
            Zillow app at the mobile number I provide above, and I confirm that
            the mobile number is mine.
          </p>
        </div>

        <div className="hidden lg:flex lg:flex-1 justify-end">
          <img
            className="rounded-lg w-11/12 cursor-pointer"
            src={downloadimg}
            alt="App Preview"
            onClick={openModal}
          />
        </div>
      </div>
      <VideoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HeroDownload;
