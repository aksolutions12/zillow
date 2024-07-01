import React from "react";
import alpimg from "../../../../assets/images/ALPhome.png";
import { Link } from "react-router-dom";

const ALPList = ({ homedata, linkname }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {homedata.map((home, index) => (
        <Link key={home.id} to={`/${linkname}/${home.postId}`}>
          <div
            key={index}
            className="flex items-center p-4 bg-card text-card-foreground rounded-lg shadow-md"
          >
            <img
              src={alpimg}
              alt="House illustration"
              className="w-12 h-12 mr-4"
            />
            <div>
              <p className="font-bold text-lg">
                {home.propertyInfo.streetAddress}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ALPList;
