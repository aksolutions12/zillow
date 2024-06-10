import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineKey } from "react-icons/md";
export default function HubProfile() {
  return (
    <div className="py-10 mx-4">
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md mb-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Renter profile
          </h2>
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm flex items-center">
            <FaInfoCircle className="w-4 h-4 mr-1" />
            Shared with all contacts made on Zillow
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              About you
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-1">
              Number of people who... <span className="float-right">3</span>
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 mb-1">
              Household annual... $0 - $34,999
            </p>
            <p className="text-zinc-500 dark:text-zinc-400">
              Self-reported credit s... 670 - 739
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              What you're looking for
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-1">
              Preferred move-in ...{" "}
              <span className="float-right">06/12/2024</span>
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 mb-1">
              Preferred lea... Month-to-month
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              Number of bedrooms... <span className="float-right">3</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Contact information
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-1">
              Name <span className="float-right">Unknown</span>
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 mb-1">
              Email <span className="float-right">Unknown</span>
            </p>
            <p className="text-zinc-500 dark:text-zinc-400">
              Phone Number <span className="float-right">Unknown</span>
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 font-semibold"
          >
            View full renter profile
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center py-10 justify-center p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
        <MdOutlineKey color="blue" size={25} />
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
          Your rental
        </h2>
        <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
          No lease or payments are set up
        </p>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-4">
          When you’ve found the right place, online lease-signing and payments
          help you take care of business.
        </p>
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Learn more about payments
        </a>
      </div>
    </div>
  );
}
