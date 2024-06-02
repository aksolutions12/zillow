import img1 from "../../../../../assets/images/Connections_x4-1889ff-903c31.png";
import img2 from "../../../../../assets/images/Outcomes_x4-00909b-665602.png";
import img3 from "../../../../../assets/images/Discovery_x4-1.png";
export default function SimpleAdvertising() {
  return (
    <div className="bg-white dark:bg-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
          Multifamily advertising made simple
        </h2>
        <p className="mt-4 text-base leading-6 text-zinc-600 dark:text-zinc-300 mb-2">
          Our advertising solution makes it easy to target, reach and connect
          with renters who are ready to hear from you. Want more information to
          share with your team?
        </p>
        <a href="#" className="mt-4 text-blue-600 dark:text-blue-400 underline">
          Download the info sheet
        </a>
      </div>
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src={img1}
              alt="Show up where prospects are searching"
              className="mx-auto mb-4 w-32 h-32"
            />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Show up where prospects are searching
            </h3>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
              Get the right level of exposure, from placement on our network to
              targeted social media ads.
            </p>
          </div>
          <div className="text-center">
            <img
              src={img2}
              alt="Localized analytics on your marketing spend"
              className="mx-auto mb-4 w-32 h-32"
            />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Localized analytics on your marketing spend
            </h3>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
              Get key analytics and insights to help you price and promote
              properties with confidence.
            </p>
          </div>
          <div className="text-center">
            <img
              src={img3}
              alt="Flexibility for your portfolio's success"
              className="mx-auto mb-4 w-32 h-32"
            />
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Flexibility for your portfolio's success
            </h3>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
              Adjust your advertising to optimize return on ad spend and help
              simplify budget planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
