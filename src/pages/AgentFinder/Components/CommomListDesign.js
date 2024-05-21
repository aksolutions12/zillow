import React from "react";

const CommomListDesign = ({ details }) => {
  return (
    <>
      <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md mt-4">
        <div className="flex justify-between items-center border-b pb-3 mb-6">
          <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            REVIEWS IN CHICAGO IL
          </h2>
          <span className="hidden md:block text-zinc-500 dark:text-zinc-400 text-sm">
            CLIENT REVIEW
          </span>
        </div>
        <div className="space-y-6">
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex justify-between items-start border-b pb-6"
            >
              <div className="flex space-x-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src={detail.image}
                  alt="Reviewer Image"
                />
                <div>
                  <h3 className="text-blue-600 dark:text-blue-400 font-semibold">
                    {detail.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {detail.phone}
                  </p>
                  <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-500">
                      {Array.from({ length: detail.rating }, (_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {detail.reviewCount} reviews
                    </span>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    {detail.company}
                  </p>
                </div>
              </div>
              {/* Conditionally render client review based on screen size */}
              <div className="hidden md:flex flex-col items-end w-3/4">
                <p className="text-blue-600 dark:text-blue-400 text-sm">
                  {detail.reviewDate}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {detail.review}
                </p>
              </div>
              <span className="text-blue-600 dark:text-blue-400 text-xl">
                ›
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommomListDesign;
