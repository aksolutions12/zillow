export default function EligibleContentSection() {
  return (
    <div className="bg-white text-zinc-600 px-5 lg:px-10 py-10 flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center w-3/4">
        <p className="text-xs text-center">
          Not all homes are eligible for Zillow Offers. Zillow, Inc. has a real
          estate brokerage license in select states. Local broker
          partners/agents will represent Zillow in the purchase and sale of
          homes in the Zillow Offers program. See zillow.com/offers for details.
        </p>
        <p className="text-xs text-center mt-4">
          Not all listings have a 3D Home tour. Look for the “3D Home” icon on a
          listing to take a virtual tour.
        </p>
        <p className="text-xs italic text-center mt-4">
          *Comscore Media Metrix® Multi-Platform Key Measures, Total Audience,
          September 2019, Custom-Defined List
        </p>
      </div>
    </div>
  );
}
