import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const VideoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold text-center">
          See what Other are saying
        </h2>
      </div>
      <div className="flex w-full ">
        <div className="w-full  lg:px-64 sm:px-16">
          <iframe
            className="mx-auto w-full h-96 rounded-lg shadow-xl"
            src="https://www.youtube.com/embed/uxCXMj_XDP4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
