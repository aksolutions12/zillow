import * as React from "react";
import img1 from "../../../../assets/images/sellyourself.png";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

export default function PropertyInfo({ formData, setFormData }) {
  const {
    streetAddress,
    propertyType,
    unitNumber,
    sharedLivingSpace,
    squareFootage,
    totalBedrooms,
    totalBathrooms,
    propertyDescription,
  } = formData.propertyInfo;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      propertyInfo: {
        ...prevFormData.propertyInfo,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  return (
    <div className="lg:px-16 sm:px-5 mx-auto p-6 bg-white dark:bg-zinc-800">
      <div className="mb-6">
        <img src={img1} alt="house icon" className="w-20 h-16 mb-4" />
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
          First, let's add your property
        </h1>
      </div>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
        Once you add your property, you can list it for free on Zillow, Trulia,
        and HotPads to help find your perfect renter.
      </p>
      <form>
        <div className="mb-4">
          <label
            htmlFor="street-address"
            className="block text-zinc-700 dark:text-zinc-300 font-medium mb-2"
          >
            Street address
          </label>
          <input
            type="text"
            id="street-address"
            name="streetAddress"
            value={streetAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-300"
            placeholder="Enter the USPS-validated address. You won’t be able to edit the address once you create the listing."
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="property-type"
            className="block text-zinc-700 dark:text-zinc-300 font-medium mb-2"
          >
            Property type
          </label>
          <select
            id="property-type"
            name="propertyType"
            value={propertyType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-300"
          >
            <option value="">Please select</option>
            <option value="House">House</option>
            <option value="Apartment">Condo/Apartment</option>
            <option value="Condo">Town House</option>
            <option value="Condo">Entire Apartment Community</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="unit-number"
            className="block text-zinc-700 dark:text-zinc-300 font-medium mb-2"
          >
            Unit number (if applicable)
          </label>
          <input
            type="text"
            id="unit-number"
            name="unitNumber"
            value={unitNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-300"
            placeholder="Enter apartment, suite, or unit number."
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="shared-living-space"
            name="sharedLivingSpace"
            checked={sharedLivingSpace}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-zinc-300 rounded focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600"
          />
          <label
            htmlFor="shared-living-space"
            className="ml-2 text-zinc-700 dark:text-zinc-300"
          >
            This is a room for rent with a shared living space
          </label>
        </div>

        <div className=" mx-auto bg-white dark:bg-zinc-800">
          <p className="mb-6 text-zinc-600 dark:text-zinc-300">
            Add or review details about your property's size.
          </p>

          {/* Square Footage Input */}
          <div className="mb-4">
            <label
              htmlFor="square-footage"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Square footage
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="squareFootage"
                id="square-footage"
                value={squareFootage}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-300"
                placeholder="sq. ft."
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-zinc-500 sm:text-sm dark:text-zinc-400">
                  sq. ft.
                </span>
              </div>
            </div>
          </div>

          {/* Total Bedrooms Input */}
          <div className="mb-4">
            <label
              htmlFor="total-bedrooms"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Total bedrooms <span className="text-red-500">*</span>
            </label>
            <select
              id="total-bedrooms"
              name="totalBedrooms"
              value={totalBedrooms}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-300"
            >
              <option value="">Please select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {/* Total Bathrooms Input */}
          <div className="mb-4">
            <label
              htmlFor="total-bathrooms"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Total bathrooms <span className="text-red-500">*</span>
            </label>
            <select
              id="total-bathrooms"
              name="totalBathrooms"
              value={totalBathrooms}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-300"
            >
              <option value="">Please select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <div className=" bg-white dark:bg-zinc-800">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Describe the property
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            Write several sentences describing the upgrades and desirable
            features that will attract renters to your property.
          </p>
          <div className="mt-4">
            <label
              className="block text-zinc-700 dark:text-zinc-400 font-semibold"
              htmlFor="property-description"
            >
              Property description
            </label>
            <textarea
              id="property-description"
              name="propertyDescription"
              value={propertyDescription}
              onChange={handleChange}
              className="w-full mt-2 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
              rows="4"
              placeholder="Example: Freshly painted home with new appliances and carpeting. Easy walking to public transit and a great neighborhood."
            ></textarea>
          </div>
          <div className="mt-6 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900">
            <div className="flex items-center mb-2">
              <MdOutlineTipsAndUpdates
                size={30}
                className="mr-2"
                color="blue"
              />
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Tips for property descriptions
              </h2>
            </div>
            <ul className="mt-2 text-zinc-600 dark:text-zinc-300 list-disc list-inside">
              <li>
                Market the property’s proximity to transit, dining, shopping,
                and other local attractions
              </li>
              <li>
                Mention upgrades, attractive amenities, and other appealing
                details
              </li>
              <li>Indicate whether you live on-site</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
