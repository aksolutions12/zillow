import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
export default function HubFavourite() {
  return (
    <div className="mx-4">
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md py-10 mt-2 ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Recent favorite rentals
          </h2>
          <div className="flex items-center  ">
            <span className="text-zinc-700 dark:text-zinc-300 hidden sm:block mr-2">
              Show off-market properties
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <IoMdHome size={30} className="mb-2" />
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Recent favorites
          </h3>
          <p className="text-zinc-700 dark:text-zinc-300 mb-2">
            0 recent favorites
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4">
            Save some new favorites so you can easily get back to them when
            you’re ready.
          </p>
          <a href="#" className="text-blue-600 dark:text-blue-400">
            Browse rentals
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-10 mt-2 bg-white dark:bg-zinc-900">
        <h1 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6">
          Browse rentals
        </h1>
        <div className="flex items-center w-full max-w-md bg-white dark:bg-zinc-800 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Address, Neighborhood, City, Zip"
            className="flex-grow p-4 text-zinc-600 dark:text-zinc-200 bg-transparent border-none focus:outline-none rounded-l-lg"
          />
          <button className="p-4 text-blue-500 dark:text-blue-400">
            <FaSearch />
          </button>
        </div>
        <a href="#" className="mt-6 text-blue-600 dark:text-blue-400">
          View your saved searches
        </a>
      </div>
    </div>
  );
}
