import { FaTag } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { GoStarFill } from "react-icons/go";
import OutlinedButton from "../../../../components/Button/OutlinedButton";

export default function ExploreMore() {
  return (
    <div className="bg-white p-8 drop-shadow-xl rounded-md mb-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Explore more mortgage calculators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center p-4 ">
          <FaTag size={70} className=" text-blue-800 mx-auto mb-6" />

          <OutlinedButton>Mortgage calculator</OutlinedButton>

          <p className="text-zinc-600 mt-4">
            What will your new home cost? Estimate your monthly mortgage payment
            with our easy-to-use mortgage calculator.
          </p>
        </div>

        <div className="text-center p-4">
          <FaPiggyBank size={70} className=" text-blue-800 mx-auto mb-6" />

          <OutlinedButton>Refinance calculator</OutlinedButton>

          <p className="text-zinc-600 mt-4">
            Interested in refinancing your existing mortgage? Use our refinance
            calculator to see if refinancing makes sense for you.
          </p>
        </div>

        <div className="text-center  py-4">
          <AiFillDollarCircle
            size={70}
            className=" text-blue-800 mx-auto mb-6"
          />

          <OutlinedButton>Debt-to-income calculator</OutlinedButton>

          <p className="text-zinc-600 mt-4">
            Your debt-to-income ratio helps determine if you would qualify for a
            mortgage. Use our DTI calculator to see if you're in the right
            range.
          </p>
        </div>

        <div className="text-center p-4">
          <GoStarFill size={70} className=" text-blue-800 mx-auto mb-6" />

          <OutlinedButton>VA mortgage calculator</OutlinedButton>
          <p className="text-zinc-600 mt-4">
            Use our VA home loan calculator to estimate payments for a VA loan
            for qualifying veterans, active military, and military families.
          </p>
        </div>
      </div>
    </div>
  );
}
