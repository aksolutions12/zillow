import {
  FaMobileAlt,
  FaCalculator,
  FaBook,
  FaBalanceScale,
} from "react-icons/fa";

export default function RightNotification() {
  return (
    <div className="w-fill bg-white p-4 mr-2 py-12 my-2">
      <div className="mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          Notifications
          <span className="ml-2 bg-zinc-200 text-zinc-800 text-sm font-semibold px-2 py-1 rounded">
            0
          </span>
        </h2>
        <p className="text-zinc-600 mt-2">You have no new notifications</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Suggested for you</h3>
        <ul className="space-y-2">
          <li className="flex items-center p-2 border rounded-lg">
            <FaMobileAlt className="mr-3 text-blue-600" />
            <span className="text-sm">Download the Zillow app</span>
          </li>
          <li className="flex items-center p-2 border rounded-lg">
            <FaCalculator className="mr-3 text-blue-600" />
            <span className="text-sm">Rent Affordability Calculator</span>
          </li>
          <li className="flex items-center p-2 border rounded-lg">
            <FaBook className="mr-3 text-blue-600" />
            <span className="text-sm">Renters Guide</span>
          </li>
          <li className="flex items-center p-2 border rounded-lg">
            <FaBalanceScale className="mr-3 text-blue-600" />
            <span className="text-sm">Rent vs. Buy Calculator</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
