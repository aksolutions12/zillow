import React from "react";

function RecentFeatureSection() {
  return (
    <div className="container mx-auto p-4 bg-gray-100 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-2">FEATURED</h2>
          <div className="border-b-2 border-yellow-400 w-32 mb-4"></div>
          <ul className="space-y-4">
            <li>
              <a href="#">
                Zillow’s New Construction Consumer Housing Trends Report 2024
              </a>
            </li>
            <li>
              <a href="#">
                Breaking Ground: Insights From Zillow’s Q3 New Construction
                Webinar
              </a>
            </li>
            <li>
              <a href="#">
                How to Use Zillow’s New Construction Economic Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                Podcast: What to Expect When You’re Purchasing New Construction
              </a>
            </li>
            <li>
              <a href="#">
                Webinar: Introducing the Zillow New Construction Consumer
                Housing Trends Report 2023
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2">RECENT</h2>
          <div className="border-b-2 border-yellow-400 w-32 mb-4"></div>
          <ul className="space-y-4">
            <li>
              <a href="#">
                Zillow’s New Construction Consumer Housing Trends Report 2023
              </a>
            </li>
            <li>
              <a href="#">
                Outshine the Competition: Introducing the Zillow New
                Construction Advantage Program
              </a>
            </li>
            <li>
              <a href="#">How to Run a Sales Center that Builds Trust</a>
            </li>
            <li>
              <a href="#">
                Zillow’s New Construction Consumer Housing Trends Report 2021
              </a>
            </li>
            <li>
              <a href="#">
                New Construction Conversion Playbook: The Power of the Lead
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecentFeatureSection;
