import ConnectingForm from "./ConnectingForm";
import porch from "../../../../assets/images/womenonporch.jpg";

export default function HeroManager() {
  return (
    <div
      className="relative bg-cover bg-center md:flex"
      style={{ backgroundImage: `url(${porch})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Background content */}
      <div className="md:w-1/2 bg-transparent p-8 text-white md:flex md:flex-col sm:pl-4 sm:pt-2 lg:pt-10 lg:pl-20 relative z-10">
        <h2 className="text-5xl font-bold mb-4">Reach zillions of renters</h2>
        <p className="mb-4">
          Want to get more renters in the door? Advertise with Zillow Rentals.
          As the #1 most-visited rentals network, we know that renters prefer
          us. And you will, too.
        </p>
        <p className="mb-4">
          Already listing with us?{" "}
          <strong className="underline"> Sign in</strong>
        </p>
      </div>

      {/* ConnectingForm */}
      <div className="md:w-1/2 p-8 md:flex md:items-center relative z-10">
        <ConnectingForm />
      </div>
    </div>
  );
}
