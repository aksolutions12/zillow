import React from "react";

const ListFreeCard = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold font-serif text-center text-zinc-900 dark:text-zinc-100">
          List your rental property for free — it's quick and easy
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mt-2">
          Fill your vacancy on the network with over 1 million daily visitors.
          Post your rental today.
        </p>
        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Street address
            </label>
            <input
              type="text"
              id="street-address"
              name="street-address"
              placeholder="Address"
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-zinc-200"
            />
          </div>

          <div>
            <label
              htmlFor="property-type"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Property type
            </label>
            <select
              id="property-type"
              name="property-type"
              className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-zinc-200"
            >
              <option>Property type</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              This is a room for rent with shared living space
            </span>
            <input
              type="checkbox"
              id="shared-living-space"
              name="shared-living-space"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-zinc-300 rounded"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get started
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ListFreeCard;
