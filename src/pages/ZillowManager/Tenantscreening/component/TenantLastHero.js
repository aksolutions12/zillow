import React from "react";

const TenantLastHero = ({ imageUrl, title, paragraph, btntxt }) => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
          <h1 className="text-4xl font-bold mb-4 font-serif max-w-2xl">
            {title}
          </h1>
          <p className="max-w-xl mb-6">{paragraph}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg mb-4">
            {btntxt}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenantLastHero;
