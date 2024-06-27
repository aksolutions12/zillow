import { FaTag } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";

export default function ExploreCalculators() {
  return (
    <div className="bg-white p-8 drop-shadow-xl  rounded-md mb-8">
      <h2 className="text-3xl font-bold mb-6">
        Explore more mortgage calculators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center p-4 ">
          <FaTag className="text-6xl text-blue-800 mx-auto mb-4" />
          <Link to="/mortgages/affordabilitycalculator">
            <h3 className="text-xl font-bold text-blue-800">
              Affordability calculator
            </h3>
          </Link>
          <p className="text-zinc-600 mt-2">
            How much house can you afford? Use our affordability calculator to
            estimate what you can comfortably spend on your new home.
          </p>
        </div>

        <div className="text-center p-4 ">
          <FaPiggyBank className="text-6xl text-blue-800 mx-auto mb-4" />
          <Link to="/mortgages/refinancecalculator">
            <h3 className="text-xl font-bold text-blue-800">
              Refinance calculator
            </h3>
          </Link>
          <p className="text-zinc-600 mt-2">
            Interested in refinancing your existing mortgage? Use our refinance
            calculator to see if refinancing makes sense for you.
          </p>
        </div>

        <div className="text-center p-4 ">
          <AiFillDollarCircle className="text-6xl text-blue-800 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-800">
            Debt-to-income calculator
          </h3>
          <p className="text-zinc-600 mt-2">
            Your debt-to-income ratio helps determine if you would qualify for a
            mortgage. Use our DTI calculator to see if you're in the right
            range.
          </p>
        </div>

        <div className="text-center p-4 ">
          <GoStarFill className="text-6xl text-blue-800 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-800">
            VA mortgage calculator
          </h3>
          <p className="text-zinc-600 mt-2">
            Use our VA home loan calculator to estimate payments for a VA loan
            for qualifying veterans, active military, and military families.
          </p>
        </div>
      </div>
    </div>
  );
}
