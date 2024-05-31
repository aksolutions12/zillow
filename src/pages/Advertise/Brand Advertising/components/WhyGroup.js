export default function WhyGroup() {
  return (
    <div className="bg-blue-100 text-center py-20 px-5">
      <h2 className="text-3xl font-bold text-blue-800">Why Zillow Group?</h2>
      <p className="text-lg text-blue-700 mt-2">
        Reach the right customers at scale by advertising across the nation’s
        largest real estate network.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-16 space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-auto md:flex-1">
          <p className="text-4xl font-bold text-zinc-800">217</p>
          <p className="text-zinc-600 mt-2">
            Million Q1 2024 Avg. Monthly Unique Users
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-auto md:flex-1">
          <p className="text-4xl font-bold text-zinc-800">2.3</p>
          <p className="text-zinc-600 mt-2">Billion Q1 2024 Visits</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-auto md:flex-1">
          <p className="text-4xl font-bold text-zinc-800">#32</p>
          <p className="text-zinc-600 mt-2">in the Comscore Top 50 Websites</p>
        </div>
      </div>
      <p className="text-sm text-zinc-600 mt-8">
        Source: Based on total traffic, source: Comscore, January 2024 and
        Comscore Media Metrix Multi-Platform, Q1 2024
      </p>
    </div>
  );
}
