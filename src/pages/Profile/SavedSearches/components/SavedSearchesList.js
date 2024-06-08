export default function SavedSearchesList() {
  return (
    <div className="bg-zinc-50 p-8">
      <div className="w-full mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Saved searches</h1>
          <a href="#" className="text-purple-600 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              ></path>
            </svg>
            New search
          </a>
        </header>

        <div className="w-full bg-white py-10 px-2 flex flex-col items-center justify-center mb-3">
          <div className="max-w-5xl">
            <div className="text-center  mb-8 ">
              <img
                src="https://placehold.co/300x100"
                alt="Houses illustration"
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold">
                Get updates on your saved searches
              </h2>
              <p className="text-zinc-600">
                Saving your searches saves you time and we'll let you know
                whenever a match comes on the market.
              </p>
            </div>
            <div className="mb-8 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Address, Neighborhood, City, Zip"
                  className="w-full border rounded-lg p-4 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.9 14.32a8 8 0 111.414-1.414l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95zM8 14a6 6 0 100-12 6 6 0 000 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg flex items-start">
            <img
              src="https://placehold.co/40x40"
              alt="Mobile app icon"
              className="w-10 h-10 mr-4"
            />
            <div>
              <p className="font-bold">Take Zillow with you!</p>
              <p className="text-zinc-600">
                Enjoy extra perks like Zestimates, AskZ chat, and powerful
                search filters.{" "}
                <a href="#" className="text-blue-500">
                  Get the Zillow app
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
