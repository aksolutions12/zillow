import img1 from "../../../../../assets/images/Premium-icon-6d9c45.png";
import img2 from "../../../../../assets/images/Enhanced-icon-e99350.png";
import img3 from "../../../../../assets/images/Base-icon-641fb2.png";
export default function PerfectCardsSection() {
  return (
    <div className="bg-zinc-100 p-6 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold mb-2">
          Find the perfect level of advertising exposure
        </h1>
        <p className="text-zinc-600 pt-5">
          Fine-tune your marketing efforts with our three packages: Base,
          Enhanced and Premium.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 py-5">
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <div className="text-center mb-4">
            <img
              src={img1}
              alt="Premium Icon"
              className="mx-auto mb-2 w-12 h-12"
            />
            <h2 className="text-xl font-semibold py-4">Premium</h2>
            <p className="text-zinc-600 pb-4">
              Exposure beyond the Zillow network, including Facebook and
              Instagram.
            </p>
            <a href="#" className="text-blue-600">
              Download the PDF
            </a>
            <br />
            <a href="#" className="text-blue-600">
              See how it works
            </a>
          </div>
          <div className="text-zinc-600">
            <p className="font-semibold italic">
              Includes everything in the{" "}
              <span className="italic">Enhanced</span> package, plus:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className="pb-2">Facebook ad placement</li>
              <li className="pb-2">In-feed Instagram ad placement</li>
              <li className="pb-2">Instagram Stories ad placement</li>
              <li className="pb-2">Email placement to local renters</li>
              <li className="pb-2">Zillow 3D Home® Production</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <div className="text-center mb-4">
            <img
              src={img2}
              alt="Enhanced Icon"
              className="mx-auto mb-2 w-12 h-12"
            />
            <h2 className="text-xl font-semibold py-4">Enhanced</h2>
            <p className="text-zinc-600  pb-4">
              Increase your local exposure with prominent ad placement.
            </p>
            <a href="#" className="text-blue-600">
              Download the PDF
            </a>
            <br />
            <a href="#" className="text-blue-600">
              See how it works
            </a>
          </div>
          <div className="text-zinc-600">
            <p className="font-semibold italic">
              Includes everything in the <span className="italic">Base</span>{" "}
              package, plus:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li className="pb-2">Ad placement at the top of the page</li>
              <li className="pb-2">Link to community website</li>
              <li className="pb-2">
                Custom rent comp reports and rental insights reports
              </li>
              <li className="pb-2">
                Feature your portfolio of nearby properties on your listings
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
          <div className="text-center mb-4">
            <img
              src={img3}
              alt="Base Icon"
              className="mx-auto mb-2 w-12 h-12"
            />
            <h2 className="text-xl font-semibold py-4">Base</h2>
            <p className="text-zinc-600 pb-4">
              Receive exposure on the most-visited rental network.
            </p>
            <a href="#" className="text-blue-600">
              Download the PDF
            </a>
            <br />
            <a href="#" className="text-blue-600">
              See how it works
            </a>
          </div>
          <div className="text-zinc-600">
            <ul className="list-disc list-inside mt-2">
              <li className="pb-2">Listings on Zillow, Trulia and Hotpads</li>
              <li className="pb-2">
                Customizable, content-rich listings with Zillow 3D Home® tours
              </li>
              <li className="pb-2">
                Verified source badging to stand out to renters
              </li>
              <li className="pb-2">Dedicated partner success manager</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-zinc-600">
          Ready to advertise with Zillow? Our sales support team is here to
          help!
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
          Let's get started
        </button>
      </div>
    </div>
  );
}
