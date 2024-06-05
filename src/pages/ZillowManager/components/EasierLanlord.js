import React from "react";
import RightImgDb from "../../Advertise/MediaPlacement/components/RightImgDb";
import img1 from "../../../assets/images/inc2.png";
import img2 from "../../../assets/images/inc1.png";
import img3 from "../../../assets/images/inc4.jpg";
import img4 from "../../../assets/images/rentconnect-features-image2x-dfed2f.png";
import img5 from "../../../assets/images/family_on_computer.png";
import LeftImgdbRental from "./LeftImgdbRental";
import { MdDone } from "react-icons/md";
const EasierLanlord = () => {
  return (
    <div className="py-10 bg-white">
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-2">
          It's easier than ever to be a landlord
        </h1>
        <p className="text-base">
          Save time with our property management tools that help you get what
          you need — signed leases and rent payments.
        </p>
      </div>
      <RightImgDb
        title={"Post your rental listing for free"}
        description={
          "Zillow Rental Manager's easy-to-use tools let you list your property where millions of renters search each month. Plus, messaging and tenant screening are integrated into our listing platform to help you find and screen applicants quickly."
        }
        button1Text={"Get Started"}
        button1Link={"#"}
        button2Text={"Learn More"}
        button2Link={"#"}
        imageUrl={img1}
        imageAlt={"Image 1"}
      />

      <LeftImgdbRental
        title={"Screen tenants with online rental applications"}
        description={
          "Sign your next tenant with confidence using our online rental applications. Save time with credit reports, background checks, eviction history and income verification — all in one place."
        }
        button1Text={"Accept Applications"}
        button1Link={"#"}
        button2Text={"Learn More"}
        button2Link={"#"}
        imageUrl={img2}
        imageAlt={"Image 1"}
      />

      <RightImgDb
        title={"Sign a rental lease"}
        description={
          "Create your rental lease using our online lease builder and templates drafted with local law firms, or upload your own lease and e-sign it with your renters"
        }
        button1Text={"Create a Lease"}
        button1Link={"#"}
        button2Text={"Learn More"}
        button2Link={"#"}
        imageUrl={img3}
        imageAlt={"Image 1"}
      />

      <LeftImgdbRental
        title={"Collect rent payments"}
        description={
          "The convenient way for landlords to get paid. Rent, utilities, move-in fees and more are deposited straight into your bank account — at no cost to you."
        }
        button1Text={"Get Paid"}
        button1Link={"#"}
        button2Text={"Learn More"}
        button2Link={"#"}
        imageUrl={img4}
        imageAlt={"Image 1"}
      />

      <div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2 py-10">
          {/* Image */}
          <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
            <img
              src={img5}
              alt={"Image 5"}
              className="w-full object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 sm:order-2 lg:order-1 mb-6 md:mb-0 gap-2 pl-4 sm:text-center lg:text-start">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              Get the most from your listings with premium
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              For a one-time fee, you can upgrade your property to our premium
              listing experience — to help you manage your rental and fill
              vacancies fast.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MdDone size={30} color="blue" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Increased exposure
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Get more eyes on your listing from renters searching in your
                    area.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdDone size={30} color="blue" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Pricing & market insights
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Track listing performance undefined and trends to price your
                    rental competitively.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdDone size={30} color="blue" />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Listing recommendations
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Get customized tips to help your listing appeal to renters.
                  </p>
                </div>
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Upgrade to premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasierLanlord;
