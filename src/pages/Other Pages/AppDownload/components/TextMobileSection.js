export default function TextMobileSection() {
  return (
    <div className="bg-blue-600 text-white flex items-center justify-center py-10 h-auto lg:h-96 px-10 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col text-center justify-center items-center">
          {/* Center content vertically and horizontally */}
          <h1 className="text-4xl font-bold mb-4">
            Search millions of new beginnings.
          </h1>
          <h2 className="text-3xl font-bold mb-6">Download the Zillow app.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center lg:w-1/2">
            <input
              type="text"
              placeholder="Mobile number"
              className="p-3 rounded-lg text-black w-full outline-none" // Adjust width for larger screens
            />
            <button className="bg-white text-blue-600 hover:bg-blue-900 hover:text-white font-bold p-3 rounded-lg lg:w-1/2">
              Text me the free app
            </button>
          </div>
          <div className="text-xs mt-4 text-center lg:w-1/2 text-gray-300">
            {" "}
            {/* Set text color to light gray */}
            {/* Center the paragraph text */}
            <p>
              U.S. mobile numbers only. Message and data rates apply. I agree to
              receive a one-time text message containing a link to download the
              Zillow app at the mobile number I provide above, and I confirm
              that the mobile number is mine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
