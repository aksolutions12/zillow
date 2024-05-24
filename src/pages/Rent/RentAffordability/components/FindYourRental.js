import { FiSearch } from "react-icons/fi";

export default function FindYourRental() {
  return (
    <div className="p-6 py-10 bg-zinc-50 dark:bg-zinc-900">
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        <strong>DISCLAIMER:</strong> The calculated output is just a suggestion.
        All personal and financial factors should be considered before signing a
        lease.
      </p>
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
          Find your rental
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter a neighborhood, city, or ZIP code"
            className="w-full p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-zinc-200"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FiSearch className="text-zinc-600 dark:text-zinc-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
