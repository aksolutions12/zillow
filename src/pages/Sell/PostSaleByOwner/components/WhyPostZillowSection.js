import { IoHomeOutline } from "react-icons/io5";
import { RxSpeakerLoud } from "react-icons/rx";
import { MdDone } from "react-icons/md";

export default function WhyPostZillowSection() {
  return (
    <div className="bg-white text-zinc-800 p-6">
      <div className="w-full mx-auto">
        <div className="text-center text-sm bg-cyan-100 font-semibold w-full py-5 mb-10">
          <span>OTHER POSTING OPTIONS:</span>
          <a href="#" className="text-blue-600 mx-2">
            For Rent
          </a>
          <a href="#" className="text-blue-600 mx-2">
            New Construction
          </a>
        </div>
        <h2 className="text-3xl font-bold text-center mb-12">
          Why post on Zillow?
        </h2>
        <div className="flex justify-center space-x-16">
          <div className="text-center">
            <IoHomeOutline className="text-6xl text-lime-500 mx-auto mb-4" />
            <p className="text-sm font-semibold">
              Post a listing for free, including video and unlimited photos.
            </p>
          </div>
          <div className="text-center">
            <RxSpeakerLoud className="text-6xl text-lime-500 mx-auto mb-4" />
            <p className="text-sm font-semibold">
              Your home will be listed on Zillow and Trulia, reaching the
              largest audience of home shoppers on the Web.
            </p>
          </div>
          <div className="text-center">
            <MdDone className="text-6xl text-lime-500 mx-auto mb-4" />
            <p className="text-sm font-semibold">
              Home shoppers receive instant emails about new listings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
