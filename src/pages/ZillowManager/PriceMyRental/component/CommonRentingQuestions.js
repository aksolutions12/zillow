export default function CommonRentingQuestions() {
  return (
    <div className="p-6 w-full px-5 mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Common Questions About Renting Your Home
      </h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. How should I price my rental?
        </h2>
        <p className="mb-2">
          To determine your rent price, consider local rent control laws, the
          rental rates of homes in your area (rental comps), the features of
          your home and changes in your local market. To get a quick starting
          point, try our free Rent Zestimate<sup>®</sup> tool. To learn more
          about pricing your rental, check out this{" "}
          <a href="#" className="text-blue-600 underline">
            article
          </a>
          .
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. How is my Rent Zestimate<sup>®</sup> calculated?
        </h2>
        <p className="mb-2">
          The Rent Zestimate<sup>®</sup> tool helps provide a rent estimate by
          address. To come up with the Zillow Rent Zestimate<sup>®</sup>, we
          look at:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            The home's physical attributes and amenities (like square footage
            and number of bedrooms and bathrooms)
          </li>
          <li>
            Comparable rental properties and the market rental rates in the area
          </li>
          <li>
            Any owner-updated home facts, plus other public undefined like the
            last sale price
          </li>
        </ul>
        <p className="mb-2">
          Remember that this is just a rent estimate — it’s not set in stone,
          but it serves as a resource for landlords and property managers. Learn
          more about the Rent Zestimate<sup>®</sup>{" "}
          <a href="#" className="text-blue-600 underline">
            here
          </a>
          .
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. How can I advertise my rental?
        </h2>
        <p className="mb-2">
          Most renters (84%) search online when looking for a home, so it’s
          important to maximize your listing’s exposure across multiple brands.
          With Zillow Rental Manager, you can advertise your rental listings
          across three of the top five rental networks — Zillow, Trulia and
          HotPads<sup>®</sup>, exposing your rental listing to over 30 million
          monthly users.<sup>**</sup>
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. What should I include in my rental listing?
        </h2>
        <p className="mb-2">
          Some key elements to include in your listing are:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            A detailed rental property description (including square footage,
            number of bedrooms and bathrooms)
          </li>
          <li>Rent price, lease duration and required fees</li>
          <li>A least 10 high-quality photos</li>
          <li>
            Elevate your listing with a 3D Home<sup>®</sup> tour - easily
            include a 3D virtual tour using the free{" "}
            <a href="#" className="text-blue-600 underline">
              Zillow 3D Home<sup>®</sup> app
            </a>
          </li>
          <li>Parking and pet restrictions</li>
          <li>Shared amenities</li>
          <li>Proximity to transit, dining, shopping, etc.</li>
        </ul>
        <p className="mb-2">
          Get more information about{" "}
          <a href="#" className="text-blue-600 underline">
            writing your listing here
          </a>
          .
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. When should I raise or lower my rent price?
        </h2>
        <p className="mb-2">
          As a landlord, you may consider increasing your rent if market rates,
          property taxes, insurance premiums or homeowners association fees have
          increased. Also consider if there are property management expenses
          that need to be covered. This{" "}
          <a href="#" className="text-blue-600 underline">
            guide
          </a>{" "}
          can help you make your decision.
        </p>
        <p className="mb-2">
          If you’re struggling to find renters, you may consider lowering your
          rental price. You may also try rethinking your terms (i.e. offering
          short-term leases) or offering a discount on first month’s rent. Just
          make sure you’re aware of what your budget can accommodate.
        </p>
      </div>
      <div className="text-sm text-zinc-600">
        <p className="mb-1">
          *Source: Zillow Group Consumer Housing Trends Report 2020.
        </p>
        <p className="mb-1">**Source: Zillow internal undefined, 2021.</p>
      </div>
    </div>
  );
}
