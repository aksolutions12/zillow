import { FaChevronDown } from "react-icons/fa"; // Assuming you're using Font Awesome icons

export default function ManagerBelowNav() {
  return (
    <div className="flex items-center space-x-4 p-4 border-b bg-white">
      <div className="flex items-center">
        {" "}
        {/* Added flex container */}
        <div className="relative group">
          <div className="flex items-center">
            <button className="text-blue-500 focus:outline-none">
              Products
            </button>
            <span className="ml-1 text-blue-500 ">
              <FaChevronDown />
            </span>
          </div>

          <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Rent Connect
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Lease Connect
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-blue-500 hover:bg-zinc-100"
            >
              Boost
            </a>
          </div>
        </div>
      </div>
      <a href="#" className="text-black">
        Resources
      </a>
    </div>
  );
}
