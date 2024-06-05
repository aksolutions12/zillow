import React from "react";

import img1 from "../../../../assets/images/tenant-lap.png";
import img2 from "../../../../assets/images/tenant-prof.png";
import img3 from "../../../../assets/images/tenant-prof2.png";

const DoMore = () => {
  return (
    <div className="bg-zinc-100 p-8 py-8">
      <h2 className="text-center text-2xl font-bold mb-8">
        You can do more with Zillow Rental Manager
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={img1}
            alt="Post a listing"
            className="mx-auto mb-4 h-24 w-24"
          />
          <a href="#" className="text-blue-600 hover:underline">
            Post a listing
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={img2}
            alt="Sign a lease"
            className="mx-auto mb-4 h-24 w-24"
          />
          <a href="#" className="text-blue-600 hover:underline">
            Sign a lease
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={img3}
            alt="Collect rent"
            className="mx-auto mb-4 h-24 w-24"
          />
          <a href="#" className="text-blue-600 hover:underline">
            Collect rent
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-blue-600 hover:underline">
          Learn about Zillow Rental Manager
        </a>
      </div>
    </div>
  );
};

export default DoMore;
