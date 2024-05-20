import React from "react";
import { MdDone } from "react-icons/md";
import selltradimg from "../../../../assets/images/sellyourself.png";
import { theme } from "../../../../styles/theme/theme";

const Sellyourself = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 px-10 bg-cyan-50 dark:bg-zinc-800 gap-5">
      <div className="md:w-1/3 md:order-2">
        <img
          src={selltradimg}
          alt="Real Estate Interaction Illustration"
          className="max-w-full h-auto"
        />
      </div>
      <div className="md:w-4/6 md:order-1 space-y-6">
        <h1
          className="text-5xl font-bold t mb-4"
          style={{ fontFamily: theme.typography.fontFamily2 }}
        >
          Sell your home yourself
        </h1>
        <p className="text-base text-zinc-700 dark:text-zinc-300">
          Deciding to sell your home yourself is referred to as
          for-sale-by-owner (FSBO). The FSBO process is{" "}
          <a>similar to traditional selling</a>, but without the help of a real
          estate agent. In this case, you’re responsible for the home prep,
          marketing, showings, and negotiations.
        </p>
        <div className="flex flex-col">
          <button className="bg-blue-500 w-full lg:w-1/3 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
            Post Your Home For Sale
          </button>
          <p className="mt-2">
            {" "}
            <a
              href="#"
              className=" text-sm
             font-bold text-blue-900 hover:underline dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              Learn more about FSBO
            </a>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/2 ">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Why sell FSBO
            </h2>
            <ul className="list-none pt-2 text-base  space-y-2 text-zinc-700 dark:text-zinc-300 ">
              <li>
                <MdDone className="inline mr-2 text-blue-500" size={25} />
                Avoid paying a listing agent commission
              </li>
              <li>
                <MdDone className="inline mr-2 text-blue-500" size={25} />
                Advertise your listing for free on Zillow
              </li>
              <li>
                <MdDone className="inline mr-2 text-blue-500" size={25} />
                Flexibility and control from start to finish
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white ">
              How to sell FSBO
            </h2>
            <p className=" text-base text-zinc-700 dark:text-zinc-300">
              When selling yourself, start with home prep, staging, and hiring a
              professional photographer. Once your marketing materials are
              ready, research comparable homes to help price your home. Then,
              list on Zillow. You’ll likely host home showings or open houses.
              Then select an offer, negotiate, accept and close.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellyourself;
