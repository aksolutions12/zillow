import React from "react";
import boost from "../../../../../assets/images/BuilderBoost_Boost_PTv3-bfc758-fa88df.png";
import AttractForm from "../../components/AttractForm";
export default function BoostSection() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="text-center p-8 bg-white">
        <h1 className="text-2xl md:text-3xl font-bold">
          Builder Boost Advertising
        </h1>
        <p className="text-lg md:text-xl mt-2">
          Reach more buyers on-site and off-site.
        </p>
        <p className="text-base md:text-base mt-4 max-w-3xl mx-auto">
          Builder Boost expands your Promoted Communities listing’s reach,
          whether through ads on Zillow, Trulia and Redfin, or retargeting on
          Facebook, providing active buyers more opportunities to discover your
          new construction homes and communities.
        </p>
      </div>
      <img src={boost} alt="Boost Img" className="w-3/5" />

      <div className="container mx-auto p-6 bg-white px-5">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Builder Boost (on-site)</h2>
            <p className="mb-4">
              Builder Boost advertising expands your reach on Zillow, Trulia,
              and Redfin to help increase buyer awareness of your community.
              With our suite of Boost products, you can also target renters
              (Boost Rent Targeting), as well as buyers filtering for certain
              criteria such as price (Boost Luxury) and senior communities
              (Boost Senior Community).
            </p>
            <p className="font-bold">ON-SITE MARKETING</p>
            <p className="mb-4">
              Get premium placement on Zillow, Trulia, and Redfin.
            </p>
            <p className="font-bold">WEBSITE CONVERSION</p>
            <p className="mb-4">Direct traffic straight to your website.</p>
            <p className="font-bold">RIGHT BUYERS, RIGHT TIME</p>
            <p>
              Accelerate transaction-ready traffic at just the right moment by
              embedding your community at the top of the buyer search
              experience.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">
              Builder Boost + Precision Targeting
            </h2>
            <p className="mb-4">
              Builder Boost powered by Precision Targeting retargets Zillow
              shoppers on Facebook who are already searching within your area.
            </p>
            <p className="font-bold">ON-SITE AND OFF-SITE MARKETING</p>
            <p className="mb-4">
              Get premium placement on Zillow, Trulia, Redfin, and Facebook.
            </p>
            <p className="font-bold">WEBSITE CONVERSION</p>
            <p className="mb-4">Direct traffic straight to your website.</p>
            <p className="font-bold">BRAND RECOGNITION</p>
            <p>Leverage Zillow’s brand recognition across Facebook.</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg">
            Learn more
          </button>
        </div>
      </div>

      <div className="bg-cyan-50 p-5 w-full flex items-center justify-center">
        <AttractForm heading={"Contact Us"} />
      </div>
    </div>
  );
}
