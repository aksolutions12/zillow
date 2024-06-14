import React from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const Lease = ({ formData, setFormData }) => {
  const { petPolicy, leaseDescription } = formData.lease;

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    const updatedPetPolicy = {
      ...petPolicy,
      [id]: checked ? id : null,
    };
    setFormData((prevFormData) => ({
      ...prevFormData,
      lease: {
        ...prevFormData.lease,
        petPolicy: updatedPetPolicy,
      },
    }));
  };

  const handleLeaseDescriptionChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      lease: {
        ...prevFormData.lease,
        leaseDescription: value,
      },
    }));
  };

  return (
    <div className="lg:px-16 sm:px-5 mx-auto p-6 bg-white dark:bg-zinc-800">
      <div>
        <h1 className="text-2xl font-bold">What's your pet policy?</h1>
        <p className="mt-2 text-zinc-600">
          Let renters know if you allow pets and, if so, what kind.
        </p>
        <div className="mt-4">
          <label className="block text-sm font-medium text-zinc-700">
            Pets <span className="text-red-500">*</span>
          </label>
          <div className="mt-2 space-y-2">
            <div>
              <input
                id="noPets"
                name="petPolicy"
                type="checkbox"
                checked={petPolicy.noPets === "noPets"}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="noPets" className="ml-2 text-zinc-700">
                No pets allowed
              </label>
            </div>
            <div>
              <input
                id="cats"
                name="petPolicy"
                type="checkbox"
                checked={petPolicy.cats === "cats"}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="cats" className="ml-2 text-zinc-700">
                Cats allowed
              </label>
            </div>
            <div>
              <input
                id="smallDogs"
                name="petPolicy"
                type="checkbox"
                checked={petPolicy.smallDogs === "smallDogs"}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="smallDogs" className="ml-2 text-zinc-700">
                Small dogs allowed
              </label>
            </div>
            <div>
              <input
                id="largeDogs"
                name="petPolicy"
                type="checkbox"
                checked={petPolicy.largeDogs === "largeDogs"}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="largeDogs" className="ml-2 text-zinc-700">
                Large dogs allowed
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-800 mt-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
          What should renters know about the lease terms?
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          Share details that can be deal breakers, or deal makers, for renters.
        </p>
        <div className="mt-4">
          <label
            className="block text-zinc-700 dark:text-zinc-400 font-semibold"
            htmlFor="property-description"
          >
            Lease Terms
          </label>
          <textarea
            id="property-description"
            name="leaseDescription"
            value={leaseDescription}
            onChange={handleLeaseDescriptionChange}
            className="w-full mt-2 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200"
            rows="4"
            placeholder="Example: Owner pays for water. Renter is responsible for gas and electric. Last month’s rent due at signing. No smoking allowed. Small pets (up to 20 pounds) permitted."
          ></textarea>
        </div>
        <div className="mt-6 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900">
          <div className="flex items-center mb-2">
            <MdOutlineTipsAndUpdates size={30} className="mr-2" color="blue" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Tips for lease terms
            </h2>
          </div>
          <ul className="mt-2 text-zinc-600 dark:text-zinc-300 list-disc list-inside">
            <li>Mention policies about smoking, parking, and pets.</li>
            <li>Be upfront about your rental policies.</li>
            <li>Clearly list lease duration and required fees.</li>
            <li>
              Include any relevant information about the tenant's maintenance
              responsibilities.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lease;
