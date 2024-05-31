import { FaRegCreditCard } from "react-icons/fa6";
import { RiFileUploadLine } from "react-icons/ri";
import { GiHumanTarget } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
export default function SmallScreenSteps() {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md text-center">
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
            1
          </div>
          <div className="bg-blue-100 rounded-full p-4">
            <MdOutlinePlace color="blue" size={30} />
          </div>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">Select Ad Placement</h2>
      <p className="text-zinc-600 dark:text-zinc-300 mb-4">
        Choose the placement of your ad based on the types of listings and
        locations where customers are searching.
      </p>

      <hr className="border-zinc-300 dark:border-zinc-600 mb-4" />

      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
              2
            </div>
            <div className="bg-blue-100 rounded-full p-4">
              <FaMoneyCheckDollar color="blue" size={30} />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">
        Set Campaign Schedule and Budget
      </h2>
      <p className="text-zinc-600 dark:text-zinc-300">
        Select the campaign dates and budget between $500 and $25,000 per
        campaign.
      </p>

      <hr className="border-zinc-300 dark:border-zinc-600 mb-4" />

      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
              3
            </div>
            <div className="bg-blue-100 rounded-full p-4">
              <GiHumanTarget color="blue" size={30} />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">Choose You Targeting Ad</h2>
      <p className="text-zinc-600 dark:text-zinc-300">
        Select the campaign dates and budget between $500 and $25,000 per
        campaign.
      </p>

      <hr className="border-zinc-300 dark:border-zinc-600 mb-4" />

      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
              4
            </div>
            <div className="bg-blue-100 rounded-full p-4">
              <RiFileUploadLine color="blue" size={30} />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">Select or Upload a Creative</h2>
      <p className="text-zinc-600 dark:text-zinc-300">
        Select the campaign dates and budget between $500 and $25,000 per
        campaign.
      </p>

      <hr className="border-zinc-300 dark:border-zinc-600 mb-4" />

      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
              5
            </div>
            <div className="bg-blue-100 rounded-full p-4">
              <FaRegCreditCard color="blue" size={30} />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">
        Make Credit card Payment and Launch
      </h2>
      <p className="text-zinc-600 dark:text-zinc-300">
        Select the campaign dates and budget between $500 and $25,000 per
        campaign.
      </p>
    </div>
  );
}
