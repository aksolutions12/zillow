import React from "react";

const ImageWithContent = ({ imageUrl, title, content }) => {
  return (
    <div className="bg-white py-16 px-6">
      <div className=" lg:flex justify-center items-center">
        <div className="lg:w-1/2 lg:order-1">
          <img src={imageUrl} alt="Image" className="w-full" />
        </div>
        <div className="lg:w-1/2 lg:order-2 lg:pl-10 mt-6 lg:mt-0">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-base text-gray-700 mb-8">{content}</p>
        </div>
      </div>
      <div className="flex w-full py-10 pt-20 ">
        <div className="w-full h-screen  lg:px-32 sm:px-16">
          <iframe
            className="mx-auto w-full h-full rounded-lg shadow-xl"
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

export default ImageWithContent;
