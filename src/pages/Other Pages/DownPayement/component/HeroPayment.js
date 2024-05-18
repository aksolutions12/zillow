import React from "react";
import backgroundImage from "../../../../assets/images/womenonporch.jpg";

const HeroPayment = () => {
  return (
    <div
      className="relative flex items-center justify-center text-center bg-cover bg-center bg-no-repeat py-32"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="relative z-10 text-white px-5 ">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          How To Get Down Payment Assistance
        </h1>
        <p className="text-base mb-6">
          Boost your buying ower with local programs that offer down payment
          assistance.
        </p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-900 ">
          See if you're eligible
        </button>
      </div>
    </div>
  );
};

export default HeroPayment;
