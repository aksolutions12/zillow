import house from "../../../assets/images/hom2.jpg";
import house2 from "../../../assets/images/home.jpg";
export default function ThreeCards({ heading }) {
  return (
    <div className="p-6 bg-white dark:bg-zinc-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          {heading}
        </h2>
        <a href="#" className="text-blue-600 dark:text-blue-400">
          See all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-700 rounded-lg shadow-md overflow-hidden">
          <img
            src={house}
            alt="House for sale"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
              12 min read
            </span>
            <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold">
              9 Mistakes to Avoid When Selling Your Home
            </h3>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-700 rounded-lg shadow-md overflow-hidden">
          <img
            src={house2}
            alt="Interior paint"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
              6 min read
            </span>
            <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold">
              Best Interior Paint Colors for Selling Your House
            </h3>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-700 rounded-lg shadow-md overflow-hidden">
          <img
            src={house}
            alt="Renovation discussion"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
              0 min read
            </span>
            <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold">
              Should You Renovate Your Home or Sell? Take This Quiz to Help You
              Decide Your Next Move
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
