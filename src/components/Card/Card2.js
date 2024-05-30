import React from "react";
import { Link } from "react-router-dom";

const Card2 = ({ imageURL, title, buttonText, link }) => {
  return (
    <div
      className="max-w-xs mx-auto mb-4"
      style={{ width: "343px", height: "328px" }}
    >
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center w-full h-full">
        <Link to={link}>
          <img className="rounded-t-lg" src={imageURL} alt="Card" />
        </Link>
        <div className="pt-4 flex flex-col justify-center items-center pb-9">
          <Link to={link} className="text-center">
            <h5 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <Link
            to={link}
            className="inline-flex items-center justify-center px-3 py-2 mb-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{ height: "54px", width: "184px" }}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card2;
