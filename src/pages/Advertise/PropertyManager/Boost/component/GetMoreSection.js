import img1 from "../../../../../assets/images/Enhanced-icon-e99350.png";
import img2 from "../../../../../assets/images/Premium-icon-6d9c45.png";
import img3 from "../../../../../assets/images/Base-icon-641fb2.png";
import img4 from "../../../../../assets/images/native_search_.png";
import img5 from "../../../../../assets/images/inc2.png";
import img6 from "../../../../../assets/images/inc4.jpg";
export default function GetMoreSection() {
  return (
    <div className="bg-white dark:bg-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
          Get more eyes on your ads
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
          With Zillow Boost, your ads rank at the top of listing search results
          — making your property easier to discover online.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6 py-10">
          <div className="flex flex-col items-center">
            <img src={img1} alt="Integrate Icon" className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Skip the trial and error
            </h3>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
              Get right in front of your audience — right away.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img2} alt="Advertise Icon" className="h-12 w-12  mb-4" />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Renters know Zillow
            </h3>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
              Use Zillow-branded ads and reach a larger audience.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={img3}
              alt="Fill vacancies Icon"
              className="h-12 w-12  mb-4"
            />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Create more interest
            </h3>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
              Run targeted promotions for hard-to-fill units.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            Want more information to share with your team?
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800"
          >
            Download the info sheet
          </a>
        </div>
      </div>

      <div>
        {/* Right Image Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2">
          {/* Image */}
          <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
            <img
              src={img4}
              alt="Image 2"
              className="w-full   object-cover rounded-lg "
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Drive traffic to the right places
            </h2>
            <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
              Direct renters in pre-selected cities to your website or Zillow
              listing.
            </p>
          </div>
        </div>

        {/* Left Image Section */}
        <div className="flex flex-col md:flex-row items-center p-4 gap-2 ">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            {" "}
            <img
              src={img5}
              alt="image 1"
              className="rounded-lg  w-full   mb-4 "
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="sm:text-center lg:text-start">
              <h2 className="text-2xl font-bold mb-2">Create must-click ads</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                Advertise with confidence, knowing that your marketing
                investment is producing results. Every dollar spent is
                attributed to a signed lease.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2">
          {/* Image */}
          <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
            <img
              src={img6}
              alt="Image 2"
              className="w-full   object-cover rounded-lg "
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Stay in control of your ad spend
            </h2>
            <p className="mt-4 mb-4 text-zinc-600 dark:text-zinc-300">
              Choose between a low, medium or high number of impressions and a
              variety of contract lengths. Plus, keep track of your ads’
              performance — so you can make data-backed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
