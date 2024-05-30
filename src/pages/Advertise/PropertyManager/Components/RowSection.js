import trend from "../../../../assets/images/trend.png";
import sellpartener from "../../../../assets/images/sellpartener.png";
import rent from "../../../../assets/images/rent-advertise.png";
export default function RowSection() {
  return (
    <div className="bg-white dark:bg-zinc-800 py-12 pt-16 px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column */}
          <div className="text-center">
            <img
              src={sellpartener}
              alt="Building Icon"
              className="mx-auto w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              We know renters
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              In fact, Zillow Rentals has more visits than any other rentals
              network.*
            </p>
          </div>

          {/* Second Column */}
          <div className="text-center">
            <img
              src={trend}
              alt="Market Insights Icon"
              className="mx-auto w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Rental market insights
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              We’re here to help with online leases and sales reps who provide
              local insights.
            </p>
          </div>

          {/* Third Column */}
          <div className="text-center">
            <img
              src={rent}
              alt="Support Icon"
              className="mx-auto w-20 h-20 mb-4"
            />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              We’re here for you
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">
              With Zillow Rentals, dedicated support is just a click or phone
              call away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
