import img from "../../../../../assets/images/rentconnect-features-image2x-dfed2f.png";
export default function IncludeEvery() {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Included with every package
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-4 px-5">
        <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Exposure on Zillow, Trulia and HotPads
            </h3>
            <p>
              Your property listings will be displayed on the most-visited
              rental network.{" "}
              <span className="text-blue-600 cursor-pointer">ℹ️</span>
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Content-rich listings</h3>
            <p>
              Attract renters with amenities, promotional concessions and rich
              media like{" "}
              <a href="#" className="text-blue-600">
                Zillow 3D Home®
              </a>{" "}
              tours in your listing.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              A dedicated success manager
            </h3>
            <p>
              We’ll be here to help, whether you have questions on product
              features or analyzing performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              More visibility into your marketing spend
            </h3>
            <p>
              Get key analytics and insights to help you price and promote
              properties with confidence.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
          <img src={img} alt="Property Image" />
        </div>
      </div>
    </div>
  );
}
