import { Link } from "react-router-dom";
import img1 from "../../../../../assets/images/realestate.jpg";
import porch from "../../../../../assets/images/womenonporch.jpg";
export default function OtherWay() {
  return (
    <div className="max-w-7xl bg-white mx-auto p-6 px-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        Other ways to advertise
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-5 lg:px-24">
        <div className="flex flex-col items-center">
          <img
            className="rounded-lg mb-4"
            src={img1}
            alt="Zillow Rent Connect"
          />
          <h2 className="text-xl font-semibold">Zillow Rent Connect™</h2>
          <p className="text-center text-zinc-600 mb-4">
            Connect with high-intent renters using one of our three advertising
            packages.
          </p>
          <Link to="/rentReconnect" className="text-purple-600 font-semibold">
            Learn more
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="rounded-lg mb-4"
            src={porch}
            alt="Zillow Lease Connect"
          />
          <h2 className="text-xl font-semibold">Zillow Lease Connect™</h2>
          <p className="text-center text-zinc-600 mb-4">
            The simple pay-per-lease solution that lets you accurately track
            your cost per lease.
          </p>
          <Link to="/leaseConnect" className="text-purple-600 font-semibold">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
