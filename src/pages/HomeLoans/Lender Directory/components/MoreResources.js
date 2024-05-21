export default function MoreResources() {
  return (
    <div className="w-full bg-white mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100">
        More home loan resources
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 lg:flex lg:flex-row lg:justify-center">
        <div className="text-center ">
          <h3 className="text-xl font-bold text-blue-700">
            See what you can afford
          </h3>
          <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
            Find out what you can comfortably afford to spend on a new home with
            our easy-to-use affordability calculator.
          </p>
        </div>
        <div className="text-center ">
          <h3 className="text-xl font-bold text-blue-700">
            Get pre-qualified by local lenders
          </h3>
          <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
            Show sellers you're a serious and credible buyer. Find a lender on
            Zillow who can help you with mortgage pre-qualification.
          </p>
        </div>
        <div className="text-center ">
          <h3 className="text-xl font-bold text-blue-700">
            Check current mortgage rates
          </h3>
          <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
            Mortgage rates and refinance rates can change daily. Keep track of
            them on Zillow and compare rates from multiple lenders.
          </p>
        </div>
      </div>
      <hr className="mt-10 border-zinc-300" />
    </div>
  );
}
