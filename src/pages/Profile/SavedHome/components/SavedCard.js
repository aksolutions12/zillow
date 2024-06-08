import React from "react";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiHome,
  FiCalendar,
  FiClock,
  FiThermometer,
  FiDroplet,
  FiDollarSign,
  FiMapPin,
} from "react-icons/fi"; // Import React icons

const SavedCard = ({ property }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="ml-2 text-blue-600 dark:text-blue-400 font-semibold">
          Compare
        </span>
      </div>
      <img
        className="w-full h-48 object-cover"
        src={property.image}
        alt="House Image"
      />
      <div className="p-4">
        <div className="text-2xl font-bold text-zinc-900 dark:text-white">
          {property.price}
        </div>
        <div className="text-zinc-600 dark:text-zinc-400">
          {property.bedrooms} bds {property.bathrooms} ba {property.size} sqft -{" "}
          <span className="text-red-500">•</span> {property.status}
        </div>
        <div className="text-zinc-500 dark:text-zinc-400 mt-1">
          {property.address}
        </div>
      </div>
      <div className="border-t border-zinc-200 dark:border-zinc-700"></div>
      <div className="p-4 grid grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="flex items-center">
          <FiHome className="h-5 w-5 mr-2" />
          <div>
            <div className="font-semibold">Type</div>
            <div>{property.type}</div>
          </div>
        </div>
        <div className="flex items-center">
          <FiCalendar className="h-5 w-5 mr-2" />
          <div>
            <div className="font-semibold">Year Built</div>
            <div>{property.yearBuilt}</div>
          </div>
        </div>
        <div className="flex items-center">
          <FiThermometer className="h-5 w-5 mr-2" />
          <div>
            <div className="font-semibold">Heating</div>
            <div>{property.heating}</div>
          </div>
        </div>
        <div className="flex items-center">
          <FiDroplet className="h-5 w-5 mr-2" />
          <div>
            <div className="font-semibold">Cooling</div>
            <div>{property.cooling}</div>
          </div>
        </div>
        <div className="flex items-center">
          <FiClock className="h-5 w-5 mr-2" />
          <div>
            <div className="font-semibold">Parking</div>
            <div>{property.parking}</div>
          </div>
        </div>
        <div className="flex items-center">
          <FiMapPin className="h-5 w-5 mr-2" />
          <div>
            <div className="font-semibold">Lot</div>
            <div>{property.lot}</div>
          </div>
        </div>
        <div className="flex items-center">
          <FiDollarSign className="h-5 w-5 mr-2" />
          <div>
            <div className="font-semibold">Price/sqft</div>
            <div>{property.pricePerSqft}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
