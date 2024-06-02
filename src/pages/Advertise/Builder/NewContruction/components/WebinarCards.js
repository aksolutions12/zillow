import React from "react";
import { IoIosVideocam } from "react-icons/io";

function WebinarCards({ heading, webinarData }) {
  return (
    <div className="bg-zinc-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <a href="#" className="text-blue-600">
          See all →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {webinarData.map((webinar, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={webinar.imageUrl}
                alt="Webinar Image"
                className="w-full h-48 object-cover"
              />
              {webinar.live && (
                <div className="absolute top-2 left-2 bg-green-500 text-white p-1 rounded-full">
                  <IoIosVideocam size={23} />
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="text-sm text-zinc-500">{webinar.status}</p>
              <h3 className="text-xl font-semibold">{webinar.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebinarCards;
