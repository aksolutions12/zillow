import porch from "../../../../assets/images/womenonporch.jpg";
export default function PriceMyRentalHero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${porch})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold mb-8">
          How Much Should I Charge For Rent?
        </h1>
        <div className="bg-transparent bg-opacity-75 p-8 rounded-lg shadow-lg max-w-2xl w-full mx-4">
          <div className="flex mb-4 gap-3">
            <input
              type="text"
              placeholder="Street address"
              className="flex-1 p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
            />
            <input
              type="text"
              placeholder="Unit"
              className="w-24 p-3 border-t border-b border-r border-zinc-300 rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500 bg-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border text-black border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <p className="text-xs  mb-4 text-white">
            By providing your email address, you agree to receive promotional
            and marketing materials from Zillow.
          </p>
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
