import React from "react";
import { usCities, canadianCities } from "../../../../data/popularcityData";

const PopularCitiesSection = () => {
  return (
    <div>
      <div className="w-full mx-auto p-8 border border-gray-200 rounded-lg  mb-8">
        <h1 className="text-2xl font-bold mb-6">
          Most populous cities in the United States
        </h1>
        <div className="space-y-4">
          {usCities.map((city, index) => (
            <div key={index}>
              <h2 className="text-lg text-blue-700">{city.name} Real Estate</h2>
              <p className="text-xs">
                Zillow Home Value Index: {city.homeValue}
              </p>
              <p className="text-xs">Population: {city.population}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto p-8 border border-gray-200 rounded-lg  mb-8">
        <h1 className="text-2xl font-bold mb-6">
          Most populous cities in Canada
        </h1>
        <div className="space-y-4">
          {canadianCities.map((city, index) => (
            <div key={index}>
              <h2 className="text-lg text-blue-700">{city.name} Real Estate</h2>
              <p className="text-xs">Population: {city.population}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCitiesSection;
