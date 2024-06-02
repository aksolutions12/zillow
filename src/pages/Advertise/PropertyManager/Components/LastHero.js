import ConnectingForm from "./ConnectingForm";
import porch from "../../../../assets/images/womenonporch.jpg";

export default function LastHero({ heading, paragraph }) {
  return (
    <div className="relative bg-cover bg-center flex flex-col items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{ backgroundImage: `url(${porch})` }}
      ></div>

      {/* Content */}
      <div className="md:w-4/5 w-full bg-transparent p-8 text-white flex flex-col items-center z-30">
        <h2 className="text-5xl font-bold mb-4 text-center font-serif">
          {heading}
        </h2>
        <p className="mb-4 text-center">{paragraph}</p>
      </div>

      {/* ConnectingForm */}
      <div className="md:w-1/2 p-8 flex items-center z-10">
        <ConnectingForm />
      </div>
    </div>
  );
}
