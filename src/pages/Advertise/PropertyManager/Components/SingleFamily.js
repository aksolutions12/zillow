import porch from "../../../../assets/images/womenonporch.jpg";
export default function SingleFamily() {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 px-10 bg-white">
      <img
        src={porch}
        alt="Property Management"
        className="rounded-lg w-full md:w-1/2"
      />
      <div className="md:ml-8 mt-4 md:mt-0">
        <h2 className="text-xl font-bold">
          Do you manage single-family properties?
        </h2>
        <p className="mt-2">
          <a href="#" className="text-blue-600 hover:underline">
            Zillow Feed Connect™
          </a>{" "}
          is the streamlined solution for property managers using third-party
          feed services.
        </p>
        <p className="mt-2">
          <a href="#" className="text-blue-600 hover:underline">
            Zillow Rental Manager
          </a>{" "}
          lets landlords post listings, screen tenants, collect rent and more.
        </p>
      </div>
    </div>
  );
}
