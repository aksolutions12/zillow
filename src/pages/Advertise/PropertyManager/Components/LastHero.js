import ConnectingForm from "./ConnectingForm";
import porch from "../../../../assets/images/womenonporch.jpg";

export default function LastHero() {
  return (
    <div className="relative bg-cover bg-center flex flex-col items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{ backgroundImage: `url(${porch})` }}
      ></div>

      {/* Content */}
      <div className="md:w-4/5 w-full bg-transparent p-8 text-white flex flex-col items-center z-30">
        <h2 className="text-5xl font-bold mb-4 text-center">
          Zillow Rental Property Advertising
        </h2>
        <p className="mb-4 text-center">
          It’s easier than ever to get renters in the door. Save time and stress
          — from start to finish — with Zillow Rentals.
        </p>
      </div>

      {/* ConnectingForm */}
      <div className="md:w-1/2 p-8 flex items-center z-10">
        <ConnectingForm />
      </div>
    </div>
  );
}
