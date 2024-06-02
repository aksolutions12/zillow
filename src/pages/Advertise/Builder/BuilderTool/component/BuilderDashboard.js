import React from "react";
import lapimg from "../../../../../assets/images/Laptop_2020-cef1de-9e273a.png";
import AttractForm from "../../components/AttractForm";

const BuilderDashboard = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col bg-white lg:flex-row items-center lg:items-center lg:space-x-8 p-6 px-4">
        <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/2">
          <img
            src={lapimg}
            alt="Laptop with community page"
            className="w-full "
          />
        </div>
        <div className="max-w-lg lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Builder Dashboard</h2>
          <p className="text-lg mb-4">
            Show that your marketing dollars are working.
          </p>

          <p className="text-base mb-2">
            Builder Dashboard is a self-service platform to guide the
            optimization of Promoted Communities listings, Builder Boost
            advertising campaigns, and customer satisfaction. Actionable data is
            surfaced to improve your discovery and engagement to ultimately
            enhance the experience for home shoppers searching on Zillow.
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Learn more
          </button>
        </div>
      </div>
      <div className="bg-white ">
        <div className="max-w-3xl mx-auto py-16 space-y-16 bg-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold">New Home Feed</h1>
            <h2 className="text-xl font-semibold mt-2">
              Streamline your listings.
            </h2>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              New Home Feed, the listing input tool for Promoted Communities,
              empowers builders to enter their new construction homes, buildable
              plans, and community information directly or with an XML feed to
              be featured on Zillow sites.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Learn more
            </button>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Log in.
              </a>
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Zillow Group Advantage Program
            </h1>
            <h2 className="text-xl font-semibold mt-2">
              Amp up your listing content.
            </h2>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300">
              The Zillow Group Advantage Program is our exclusive network of
              preferred partners offering discounted rates for Zillow Group
              builder customers to elevate their listing content and attract
              more home shoppers.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mx-4 py-8 ws-full">
        <AttractForm heading={"CONTACT US"} />
      </div>
    </div>
  );
};

export default BuilderDashboard;
