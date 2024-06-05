import img1 from "../../../assets/images/sellyourself.png";
import img2 from "../../../assets/images/Discovery_x4-1.png";
import img3 from "../../../assets/images/Outcomes_x4-00909b-665602.png";
export default function TrustCardRow() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-12 bg-white dark:bg-zinc-800 sm:px-4 lg:px-10 gap-5 ">
      <div className="flex flex-col items-center text-center p-6">
        <img
          className="w-24 h-24 mb-4"
          src={img1}
          alt="Fill vacancies and manage properties"
        />
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
          Fill vacancies and manage properties
        </h3>
        <p className="text-zinc-600 dark:text-zinc-300">
          Landlording made simple, whether you have one rental or an entire
          portfolio.
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-6">
        <img
          className="w-24 h-24 mb-4"
          src={img2}
          alt="Over 30 million visitors each month"
        />
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
          Over 30 million visitors each month*
        </h3>
        <p className="text-zinc-600 dark:text-zinc-300">
          List your property for free on Zillow, Trulia and HotPads to help you
          find your perfect renter.
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-6">
        <img
          className="w-24 h-24 mb-4"
          src={img3}
          alt="A brand you can trust"
        />
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
          A brand you can trust
        </h3>
        <p className="text-zinc-600 dark:text-zinc-300">
          Landlord tools built by industry experts and the brand that knows real
          estate.
        </p>
      </div>
    </div>
  );
}
