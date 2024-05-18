import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon from React Icons
import vidmod from "../../../../assets/videos/App-feature.mp4";

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg max-w-4xl w-3/4 h-11/12 relative overflow-hidden">
        {/* Adjust width and height */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <AiOutlineClose size={20} color="blue" />
        </button>
        <div className="aspect-video">
          <iframe
            title="Zillow Video"
            className="w-full h-full object-cover"
            src={vidmod}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
