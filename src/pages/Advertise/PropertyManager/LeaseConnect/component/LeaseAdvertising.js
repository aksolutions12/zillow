import img1 from "../../../../../assets/images/Enhanced-icon-e99350.png";
import img2 from "../../../../../assets/images/Premium-icon-6d9c45.png";
import img3 from "../../../../../assets/images/Base-icon-641fb2.png";
export default function LeaseAdvertising() {
  return (
    <div className="bg-white dark:bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
          Zillow Lease Connect: the simple pay-per-lease advertising model
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6 py-10">
          <div className="flex flex-col items-center">
            <img src={img1} alt="Integrate Icon" className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Integrate
            </h3>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
              Guest cards are pushed to your property management system through
              API integration.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img2} alt="Advertise Icon" className="h-12 w-12  mb-4" />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Advertise
            </h3>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
              Post to a network of millions of renters across three of the top
              five rentals search sites.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={img3}
              alt="Fill vacancies Icon"
              className="h-12 w-12  mb-4"
            />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Fill vacancies
            </h3>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
              You only pay when a lease is signed — so you know your marketing
              dollars are driving results.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            Want to learn more about how Zillow Lease Connect works?
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800"
          >
            Download the info sheet
          </a>
        </div>
      </div>
    </div>
  );
}
