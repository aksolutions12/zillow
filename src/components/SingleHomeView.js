import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiHome,
  FiCalendar,
  FiMapPin,
  FiDollarSign,
  FiSquare,
  FiMap,
  FiHeart,
  FiShare2,
  FiEyeOff,
  FiMoreHorizontal,
} from "react-icons/fi";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Footer from "./layout/Footer/Footer";
import zillogo from "../assets/images/zil-logo.png";
import { useState } from "react";
import MapSection from "../pages/Buy/Components/MapSection";
import { FaWalking } from "react-icons/fa";
import { IoBusOutline } from "react-icons/io5";
import { FaBicycle } from "react-icons/fa6";
export default function SingleHomeView() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [showMoreSchool, setShowMoreSchool] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleShowMoreSchool = () => {
    setShowMoreSchool(!showMoreSchool);
  };

  return (
    <div className=" max-w-5xl h-full  bg-white z-50 flex flex-col">
      <div className="w-full mx-auto bg-white p-4 sticky">
        <div className="flex items-center justify-between mb-4  ">
          <div
            className="flex items-center"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          >
            <FiArrowLeft style={{ width: 24, height: 24, marginRight: 8 }} />
            <span style={{ color: "#333" }}>Back to search</span>
          </div>
          <img src={zillogo} alt="Zillow logo" className="h-8 w-28" />
          <div className="flex items-center space-x-4">
            <button className="text-zinc-600 dark:text-zinc-300">
              <div className="flex flex-row gap-2">
                <FiHeart className="w-6 h-6" />
                <span>Save</span>
              </div>
            </button>
            <button className="text-zinc-600 dark:text-zinc-300">
              <div className="flex flex-row gap-2">
                <FiShare2 className="w-6 h-6" />
                <span>Share</span>
              </div>
            </button>
            <button className="text-zinc-600 dark:text-zinc-300">
              <div className="flex flex-row gap-2">
                <FiEyeOff className="w-6 h-6" />
                <span>Hide</span>
              </div>
            </button>
            <button className="text-zinc-600 dark:text-zinc-300">
              <div className="flex flex-row gap-2">
                <FiMoreHorizontal className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="https://placehold.co/600x400"
              alt="Main house image"
              className="w-full h-auto rounded-lg"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
              For sale
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img
              src="https://placehold.co/300x200"
              alt="House image 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://placehold.co/300x200"
              alt="House image 2"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://placehold.co/300x200"
              alt="House image 3"
              className="w-full h-auto rounded-lg"
            />
            <div className="relative">
              <img
                src="https://placehold.co/300x200"
                alt="House image 4"
                className="w-full h-auto rounded-lg"
              />
              <button className="absolute bottom-4 text-xs right-4 bg-white text-zinc-800 px-4 py-2 rounded-lg shadow-md">
                See all photos
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 w-full mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
              $825,000
            </h1>
            <p className="text-zinc-700 dark:text-zinc-300">
              102 Scots Fir Ln, Cary, NC 27518
            </p>
            <div className="mt-2 flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
                Est.: $4,944/mo
              </span>
              <a href="#" className="text-blue-700 font-semibold">
                Get pre-qualified
              </a>
            </div>
          </div>
          <div className="flex space-x-4 text-center">
            <div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                5
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">beds</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                4
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">baths</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                3,154
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">sqft</p>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
            <FiHome />
            <p className="text-zinc-700 dark:text-zinc-300">
              Single Family Residence, Residential
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
            <FiCalendar />
            <p className="text-zinc-700 dark:text-zinc-300">Built in 1993</p>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
            <FiMapPin />
            <p className="text-zinc-700 dark:text-zinc-300">0.34 Acres lot</p>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
            <FiDollarSign />
            <p className="text-zinc-700 dark:text-zinc-300">
              $889,900 Zestimate®
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
            <FiSquare />
            <p className="text-zinc-700 dark:text-zinc-300">$262/sqft</p>
          </div>
          <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg">
            <FiMap />
            <p className="text-zinc-700 dark:text-zinc-300">$63/mo HOA</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col space-y-2">
          <a
            href="#"
            className="bg-blue-600 text-white text-center py-3 rounded-lg font-semibold"
          >
            Request a tour
          </a>
          <a
            href="#"
            className="text-blue-700 text-center py-3 rounded-lg font-semibold border border-blue-700"
          >
            Contact agent
          </a>
        </div>
      </div>

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
                <li>Bedrooms: 5</li>
                <li>Bathrooms: 4</li>
                <li>Full bathrooms: 3</li>
                <li>1/2 bathrooms: 1</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">Heating</h4>
              <ul className="list-disc list-inside">
                <li>Forced Air, Zoned</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">Cooling</h4>
              <ul className="list-disc list-inside">
                <li>Ceiling Fan(s), Central Air, Heat Pump</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2">Appliances</h4>
              <ul className="list-disc list-inside">
                <li>
                  Included: Dishwasher, Disposal, Gas Range, Ice Maker,
                  Microwave, Plumbed For Ice Maker, Refrigerator
                </li>
                <li>Laundry: Laundry Room, Upper Level</li>
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
                <li>Total structure area: 3,154</li>
                <li>Total interior livable area: 3,154 sqft</li>
                <li>Finished area above ground: 3,154</li>
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
                      Parking features: Attached, Concrete, Garage, Garage Door
                      Opener, Garage Faces Front
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
                    <li>Lot size: 0.34 Acres</li>
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
      </div>
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

      <div className="w-full px-4 mx-auto p-4">
        <h2 className="text-xl font-semibold mb-2">Services availability</h2>
        <hr className="mb-4" />
        <h3 className="text-lg font-semibold mb-4">Contact agent</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-md p-2 bg-zinc-100"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full border rounded-md p-2 bg-zinc-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-md p-2 bg-zinc-100"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              placeholder="I am interested in 100 Franklin Chase Ct, Cary, NC 27518."
              className="w-full border rounded-md p-2 bg-zinc-100"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md"
          >
            Contact agent
          </button>
          <div className="flex items-start mt-4">
            <input
              id="pre-approval"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-zinc-300 rounded"
            />
            <label htmlFor="pre-approval" className="ml-2 text-sm">
              I want pre-approval information from Zillow Home Loans
            </label>
          </div>
          <p className="text-xs text-zinc-600 mt-4">
            By pressing Contact agent, you agree that Zillow Group and its
            affiliates, and{" "}
            <a href="#" className="text-blue-600 underline">
              real estate professionals
            </a>{" "}
            may call/text you about your inquiry, which may involve use of
            automated means and prerecorded/artificial voices. You don't need to
            consent as a condition of buying any property, goods or services.
            Message/undefined rates may apply. You also agree to our{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Use
            </a>
            . Zillow does not endorse any real estate professionals. We may
            share information about your recent and future site activity with
            your agent to help them understand what you're looking for in a
            home.
          </p>
        </form>
      </div>
      <div className="bg-white">
        <div className="w-full mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Price history</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-200">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-zinc-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">5/16/2024</div>
                    <div className="text-xs text-zinc-500">
                      Source: TMLS IDX™ TMLS #10029763{" "}
                      <a href="#" className="text-blue-500">
                        Report
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">Price change</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">
                      $705,000 <span className="text-red-500">-0.7%</span>
                    </div>
                    <div className="text-xs text-zinc-500">$218/sqft</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">11/13/2023</div>
                    <div className="text-xs text-zinc-500">
                      Source: TMLS IDX™ TMLS #2536830{" "}
                      <a href="#" className="text-blue-500">
                        Report
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">Price change</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">
                      $709,900 <span className="text-red-500">-1.4%</span>
                    </div>
                    <div className="text-xs text-zinc-500">$220/sqft</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">10/12/2023</div>
                    <div className="text-xs text-zinc-500">
                      Source: TMLS IDX™ TMLS #2536830{" "}
                      <a href="#" className="text-blue-500">
                        Report
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">Listed for sale</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">
                      $719,900 <span className="text-green-500">+87.5%</span>
                    </div>
                    <div className="text-xs text-zinc-500">$223/sqft</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">7/17/2014</div>
                    <div className="text-xs text-zinc-500">
                      Source: Public Record{" "}
                      <a href="#" className="text-blue-500">
                        Report
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">Sold</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">
                      $384,000 <span className="text-red-500">-1.3%</span>
                    </div>
                    <div className="text-xs text-zinc-500">$119/sqft</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">3/4/2014</div>
                    <div className="text-xs text-zinc-500">
                      Source: Public Record{" "}
                      <a href="#" className="text-blue-500">
                        Report
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">Listed for sale</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-zinc-900">
                      $389,000 <span className="text-green-500">+77.6%</span>
                    </div>
                    <div className="text-xs text-zinc-500">$121/sqft</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Public tax history</h2>
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                  Property taxes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                  Tax assessment
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-200 dark:divide-zinc-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                  $4,343{" "}
                  <span className="text-green-600 dark:text-green-400">
                    +3.9%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                  $431,432
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  2022
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                  $4,181{" "}
                  <span className="text-green-600 dark:text-green-400">
                    +2.1%
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                  $431,432
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  2021
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                  $4,097{" "}
                  <span className="text-red-600 dark:text-red-400">-0.5%</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                  $431,432
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-4 pb-2">
        <h1 className="font-bold text-lg">Neighborhood: 27518</h1>
        <div className="h-96">
          <MapSection />
        </div>
      </div>
      <div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Getting around</h2>
          <div className="flex space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
                <FaWalking size={25} color="white" />
              </div>
              <div>
                <p className="text-lg font-bold">8 / 100</p>
                <p className="text-sm text-zinc-600">Car-Dependent</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
                <IoBusOutline size={25} color="white" />
              </div>
              <div>
                <p className="text-lg font-bold">25 / 100</p>
                <p className="text-sm text-zinc-600">Some Transit</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
                <FaBicycle size={25} color="white" />
              </div>
              <div>
                <p className="text-lg font-bold">43 / 100</p>
                <p className="text-sm text-zinc-600">Somewhat Bikeable</p>
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <h2 className="text-xl font-semibold mb-4">Nearby schools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                GreatSchools rating
              </h3>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
                  <span className="text-lg font-bold">6/10</span>
                </div>
                <div className="ml-4">
                  <a href="#" className="text-blue-600 font-semibold">
                    Swift Creek Elementary
                  </a>
                  <p className="text-sm text-zinc-600">
                    Grades: K-5 Distance: 0.8 mi
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
                  <span className="text-lg font-bold">3/10</span>
                </div>
                <div className="ml-4">
                  <a href="#" className="text-blue-600 font-semibold">
                    Dillard Drive Middle
                  </a>
                  <p className="text-sm text-zinc-600">
                    Grades: 6-8 Distance: 1.4 mi
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
                  <span className="text-lg font-bold">7/10</span>
                </div>
                <div className="ml-4">
                  <a href="#" className="text-blue-600 font-semibold">
                    Athens Drive High
                  </a>
                  <p className="text-sm text-zinc-600">
                    Grades: 9-12 Distance: 2.7 mi
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Schools provided by the listing agent
              </h3>
              <p className="text-sm text-zinc-600 mb-2">
                <strong>Elementary:</strong> Wake - Swift Creek
              </p>
              <p className="text-sm text-zinc-600 mb-2">
                <strong>Middle:</strong> Wake - Dillard
              </p>
              <p className="text-sm text-zinc-600 mb-2">
                <strong>High:</strong> Wake - Athens Dr
              </p>
              <p className="text-sm text-zinc-600 mb-4">
                Source: TMLS. This undefined may not be complete. We recommend
                contacting the local school district to confirm school
                assignments for this home.
              </p>
            </div>
          </div>
          {showMoreSchool && (
            <div>
              <h3 className="text-lg font-semibold mt-6 mb-2">
                About GreatSchools
              </h3>
              <p className="text-sm text-zinc-600 mb-4">
                The GreatSchools Summary Rating is based on several metrics.
              </p>
              <p className="text-sm text-zinc-600 mb-4">
                <strong>About the ratings:</strong> GreatSchools Ratings are
                designed to be a starting point to help parents compare schools,
                and should not be the only factor used in selecting the right
                school for your family. Zillow and GreatSchools recommend that
                parents tour multiple schools in-person to inform that choice.
                As of October 2020, the GreatSchools Ratings methodology
                continues to move beyond proficiency and standardized test
                scores. The latest methodology prioritizes student growth
                through measures of equity and school quality.{" "}
                <a href="#" className="text-blue-600">
                  Learn more
                </a>
              </p>
              <p className="text-sm text-zinc-600">
                <strong>Disclaimer:</strong> School attendance zone boundaries
                are provided by a third party and are subject to change. They
                are not guaranteed to be accurate, up to date, or complete.
                Check with the applicable school district prior to making a
                decision based on these boundaries.
              </p>
            </div>
          )}
        </div>
        <div>
          <div className="text-blue-700 cursor-pointer px-10">
            {setShowMoreSchool ? (
              <div className="flex items-center gap-2">
                <FaChevronUp onClick={toggleShowMoreSchool} />
                <span onClick={toggleShowMoreSchool}>SHOW LESS</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <FaChevronDown onClick={toggleShowMoreSchool} />
                <span onClick={toggleShowMoreSchool}>SHOW MORE</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
