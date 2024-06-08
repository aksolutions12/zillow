import {
  FaUserTie,
  FaCalendarAlt,
  FaHandshake,
  FaGraduationCap,
  FaListAlt,
  FaCheck,
} from "react-icons/fa";
import img1 from "../../../../assets/images/tEAM1.png";
import img2 from "../../../../assets/images/YourTeamLO.png";

function TeamSection() {
  return (
    <div className="w-full mx-auto px-4 py-8 pb-20">
      <div className="mb-4">
        <h1 className="font-bold text-3xl font-serif">Your Team</h1>
        <p>
          Build your team through Zillow — get connected with real estate
          professionals in your area.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Buyer's Agent Card */}
        <div className="max-w-md  mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 flex items-center">
            <div className="flex-grow">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Get introduced to a buyer's agent
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300">
                They're your advocate throughout the home shopping journey.
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Connect with an agent
              </button>
            </div>
            <img
              src={img1}
              alt="Agent illustration"
              className="ml-4 w-16 h-16 rounded-full"
            />
          </div>
          <div className="bg-blue-50 dark:bg-zinc-700 p-6 border-t border-zinc-200 dark:border-zinc-600">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              Ways agents can help you
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <FaUserTie className="w-6 h-6 mr-2 text-zinc-600 dark:text-zinc-300" />
                <span className="text-zinc-600 dark:text-zinc-300">
                  Expert in your search area
                </span>
              </li>
              <li className="flex items-start">
                <FaCalendarAlt className="w-6 h-6 mr-2 text-zinc-600 dark:text-zinc-300" />
                <span className="text-zinc-600 dark:text-zinc-300">
                  Schedule tours for homes you love
                </span>
              </li>
              <li className="flex items-start">
                <FaHandshake className="w-6 h-6 mr-2 text-zinc-600 dark:text-zinc-300" />
                <span className="text-zinc-600 dark:text-zinc-300">
                  Help plan and negotiate offers
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Loan Officer Card */}
        <div className="max-w-md  mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 flex items-center">
            <div className="flex-grow">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Connect with a loan officer
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300">
                No question is too big or small for the loan officers with
                Zillow Home Loans.
              </p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Get pre-qualified to connect
              </button>
            </div>
            <img
              src={img2}
              alt="Agent illustration"
              className="ml-4 w-16 h-16 rounded-full"
            />
          </div>
          <div className="bg-blue-50 dark:bg-zinc-700 p-6 border-t border-zinc-200 dark:border-zinc-600">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              Ways agents can help you
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <FaGraduationCap className="w-6 h-6 mr-2 text-zinc-600 dark:text-zinc-300" />
                <span className="text-zinc-600 dark:text-zinc-300">
                  Questions loan officers can answer
                </span>
              </li>
              <li className="flex items-start">
                <FaListAlt className="w-6 h-6 mr-2 text-zinc-600 dark:text-zinc-300" />
                <span className="text-zinc-600 dark:text-zinc-300">
                  What's the mortgage process?
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="w-6 h-6 mr-2 text-zinc-600 dark:text-zinc-300" />
                <span className="text-zinc-600 dark:text-zinc-300">
                  How do loan options vary by home?
                </span>
              </li>
              <li className="flex items-start">
                <FaHandshake className="w-6 h-6 mr-2 text-zinc-600 dark:text-zinc-300" />
                <span className="text-zinc-600 dark:text-zinc-300">
                  What affects your qualification?
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
