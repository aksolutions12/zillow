import { FaChevronDown } from "react-icons/fa"; // Assuming you're using Font Awesome icons
import { Link } from "react-router-dom";

export default function ManagerBelowNav() {
  return (
    <div className="flex items-center space-x-4 p-4 border-b bg-white">
      <div className="flex items-center">
        {" "}
        {/* Added flex container */}
        <div className="relative group">
          <div className="flex items-center">
            <Link to="/advertiseManager">
              <button className="text-blue-500 focus:outline-none">
                Products
              </button>
            </Link>
            <span className="ml-1 text-blue-500 ">
              <FaChevronDown />
            </span>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <Link
              to="/rentReconnect"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Rent Connect
            </Link>
            <Link
              to="/leaseConnect"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Lease Connect
            </Link>
            <Link
              to="/boost"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Boost
            </Link>
          </div>
        </div>
      </div>
      <Link to="/multiFamilyResource" className="text-black">
        Resources
      </Link>
    </div>
  );
}
