import React from "react";
import lapimg from "../../../../../assets/images/Laptop_2020-cef1de-9e273a.png";

export default function CommunityRows() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:space-x-8 p-6 px-4">
        <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/2">
          <img
            src={lapimg}
            alt="Laptop with community page"
            className="w-full "
          />
        </div>
        <div className="max-w-lg lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Community Pages</h2>
          <p className="text-lg mb-4">
            Show buyers everything you have to offer.
          </p>
          <p className="text-zinc-700 mb-4">
            Linked to your Promoted Communities listing, a Community Page
            showcases your homes, amenities and features all in one place,
            helping buyers picture themselves living in the neighborhood you’re
            building.
          </p>
          <p className="text-lg font-semibold mb-2">
            A Community Page shows buyers:
          </p>
          <ul className="list-disc list-inside text-zinc-700 mb-6">
            <li>Community photos</li>
            <li>Amenity details</li>
            <li>
              Available homes, including spec homes, quick move-in options and
              lots
            </li>
            <li>A direct link back to your website</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-6 px-5">
        <div className="md:w-1/2 lg:order-1">
          <h1 className="text-3xl font-bold">On-site Tour Booking</h1>
          <p className="text-lg font-semibold mt-2">
            Give buyers the on-demand experience they want.
          </p>
          <p className="text-base mt-4">
            On-site Tour Booking provides an easy way of connecting high-intent
            buyers to builders. Potential buyers can request an appointment to
            visit a community directly on a Zillow listing.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Get more high-intent home buyers sent directly to you</li>
            <li>Improve customer experience</li>
            <li>Manage booking tour appointments on your own time</li>
          </ul>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-6">
            Learn more
          </button>
        </div>
        <div className="md:w-1/2 lg:order-2">
          <img src={lapimg} alt="Laptop with tour booking interface" />
        </div>
      </div>
    </div>
  );
}
