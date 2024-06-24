import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
const PropertyDetails = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div className="p-6 bg-white dark:bg-zinc-800">
        <h2 className="text-2xl font-bold mb-4">Facts & features</h2>
        <div>
          <div className="bg-zinc-100 dark:bg-zinc-700 p-4 mb-6">
            <h3 className="text-lg font-semibold">Interior</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            <div>
              <h4 className="font-semibold mb-2">Bedrooms & bathrooms</h4>
              <ul className="list-disc list-inside ">
                <li>Bedrooms: {data.propertyInfo.totalBedrooms}</li>
                <li>Bathrooms: {data.propertyInfo.totalBathrooms}</li>
                <li>Full bathrooms: {data.propertyInfo.totalBathrooms}</li>
                <li>1/2 bathrooms: 1</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">Heating</h4>
              <ul className="list-disc list-inside">
                <li>{data.amenities.heating.join(", ")}</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">Cooling</h4>
              <ul className="list-disc list-inside">
                <li>{data.amenities.cooling.join(", ")}</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">Appliances</h4>
              <ul className="list-disc list-inside">
                <li>Included: {data.amenities.appliances.join(", ")}</li>
                <li>Laundry: {data.amenities.laundry}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="list-disc list-inside">
                <li>
                  Breakfast Bar, Ceiling Fan(s), Crown Molding, Dining L,
                  Entrance Foyer, Pantry, Quartz Counters, Recessed Lighting,
                  Separate Shower, Smooth Ceilings, Vaulted Ceiling(s), Walk-In
                  Closet(s), Walk-In Shower, Whirlpool Tub
                </li>
                <li>Flooring: Carpet, Ceramic Tile, Hardwood, Tile</li>
                <li>Windows: Blinds</li>
                <li>Has basement: No</li>
                <li>Number of fireplaces: 1</li>
                <li>Fireplace features: Family Room</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">Interior area</h4>
              <ul className="list-disc list-inside">
                <li>Total structure area: {data.propertyInfo.squareFootage}</li>
                <li>
                  Total interior livable area: {data.propertyInfo.squareFootage}{" "}
                  sqft
                </li>
                <li>
                  Finished area above ground: {data.propertyInfo.squareFootage}
                </li>
                <li>Finished area below ground: 0</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">Virtual tour</h4>
              <ul className="list-disc list-inside">
                <li>
                  <a href="#" className="text-blue-500 dark:text-blue-400">
                    View virtual tour
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {showMore && (
          <div>
            <div>
              <div className="bg-zinc-100 dark:bg-zinc-700 p-4 mb-6 mt-4">
                <h3 className="text-lg font-semibold ">Property</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                <div>
                  <h4 className="font-semibold mb-2">Parking</h4>
                  <ul className="list-disc list-inside">
                    <li>Total spaces: 6</li>
                    <li>
                      Parking features: {data.amenities.parking.join(", ")}
                    </li>
                    <li>Garage spaces: 2</li>
                    <li>Covered spaces: 2</li>
                    <li>Uncovered spaces: 4</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Property</h4>
                  <ul className="list-disc list-inside">
                    <li>Levels: Three Or More</li>
                    <li>Pool features: Community</li>
                    <li>Spa features: None</li>
                    <li>Exterior features: Private Yard, Rain Gutters</li>
                    <li>Patio & porch details: Deck</li>
                    <li>View description: Neighborhood</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Lot</h4>
                  <ul className="list-disc list-inside">
                    <li>
                      Lot size:{" "}
                      {(data.propertyInfo.squareFootage / 43560).toFixed(2)}{" "}
                      Acres
                    </li>
                    <li>
                      Lot features: Back Yard, Cul-De-Sac, Front Yard, Hardwood
                      Trees, Landscaped, Many Trees
                    </li>
                  </ul>
                  <h4 className="font-semibold mt-4 mb-2">
                    Other property information
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>Additional structures included: Storage</li>
                    <li>Parcel number: 0191556</li>
                    <li>Finished area above ground: 3,154</li>
                    <li>Special conditions: Standard</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-zinc-100 dark:bg-zinc-700 p-4 mb-6 mt-4">
                <h3 className="text-lg font-semibold">Construction</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                <div>
                  <h4 className="font-semibold mb-2">Type & style</h4>
                  <ul className="list-disc list-inside">
                    <li>Home type: SingleFamily</li>
                    <li>Architectural style: Traditional</li>
                    <li>
                      Property subType: Single Family Residence, Residential
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Material information</h4>
                  <ul className="list-disc list-inside">
                    <li>Construction materials: Brick Veneer, Fiber Cement</li>
                    <li>Foundation: Other</li>
                    <li>Roof: Shingle</li>
                  </ul>
                  <h4 className="font-semibold mt-4 mb-2">Condition</h4>
                  <ul className="list-disc list-inside">
                    <li>New construction: No</li>
                    <li>Year built: 1993</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-zinc-100 dark:bg-zinc-700 p-4 mb-6 mt-4">
                <h3 className="text-lg font-semibold">
                  Utilities & green energy
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                <div>
                  <h4 className="font-semibold mb-2">Utility</h4>
                  <ul className="list-disc list-inside">
                    <li>Sewer information: Public Sewer</li>
                    <li>Water information: Public</li>
                    <li>
                      Utilities for property: Cable Available, Electricity
                      Connected, Natural Gas Available, Natural Gas Connected,
                      Phone Connected, Sewer Connected, Water Connected
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-zinc-100 dark:bg-zinc-700 p-4 mb-6 mt-4">
                <h3 className="text-lg font-semibold ">
                  Community & neighborhood
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                <div>
                  <h4 className="font-semibold mb-2">Community</h4>
                  <ul className="list-disc list-inside">
                    <li>
                      Community features: Clubhouse, Fishing, Lake, Playground,
                      Pool, Sidewalks, Tennis Court(s)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <ul className="list-disc list-inside">
                    <li>Region: Cary</li>
                    <li>Subdivision: Lochmere</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-zinc-100 dark:bg-zinc-700 p-4 mb-6 mt-4">
                <h3 className="text-lg font-semibold ">HOA & financial</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                <div>
                  <h4 className="font-semibold mb-2">HOA</h4>
                  <ul className="list-disc list-inside">
                    <li>Has HOA: Yes</li>
                    <li>HOA fee: $753 annually</li>
                    <li>
                      Amenities included: Clubhouse, Jogging Path, Management,
                      Parking, Playground, Tennis Court(s)
                    </li>
                    <li>
                      Services included: Maintenance Grounds, Maintenance
                      Structure, Storm Water Maintenance
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Other financial information
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>Buyer's Agency fee: 2.4%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-zinc-100 dark:bg-zinc-700 p-4 mb-6 mt-4">
                <h3 className="text-lg font-semibold ">Other</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                <div>
                  <h4 className="font-semibold mb-2">Other facts</h4>
                  <ul className="list-disc list-inside">
                    <li>Road surface type: Paved</li>
                    <li>HOA fee: $753 annually</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          <div className="text-blue-700 cursor-pointer px-10">
            {showMore ? (
              <div className="flex items-center gap-2">
                <FaChevronUp onClick={toggleShowMore} />
                <span onClick={toggleShowMore}>SHOW LESS</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <FaChevronDown onClick={toggleShowMore} />
                <span onClick={toggleShowMore}>SHOW MORE</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
