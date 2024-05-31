export default function OurNetwork() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
        <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
          Our Network:
        </span>
        <div className="flex flex-row flex-wrap items-center justify-center gap-2">
          <img
            src="https://placehold.co/100x40?text=Zillow"
            alt="Zillow"
            className="w-auto h-10 max-w-full"
          />
          <img
            src="https://placehold.co/100x40?text=trulia"
            alt="trulia"
            className="w-auto h-10 max-w-full"
          />
          <img
            src="https://placehold.co/100x40?text=StreetEasy"
            alt="StreetEasy"
            className="w-auto h-10 max-w-full"
          />
          <img
            src="https://placehold.co/100x40?text=hotpads"
            alt="hotpads"
            className="w-auto h-10 max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
