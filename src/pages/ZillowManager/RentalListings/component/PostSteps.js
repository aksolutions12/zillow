import React from "react";
import img1 from "../../../../assets/images/step1.png";
import img2 from "../../../../assets/images/step2.png";
import img3 from "../../../../assets/images/step3.png";
import img4 from "../../../../assets/images/family_on_computer.png";
import { MdDone } from "react-icons/md";

const PostSteps = () => {
  return (
    <div className="py-10 px-3">
      <div className="text-center">
        <h1 className="font-bold text-3xl">Post a listing in 3 easy steps</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {/* Card 1 */}
          <div className="max-w-sm mx-4 my-4 dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={img1} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  1. Add property details and images
                </h5>
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-sm mx-4 my-4 dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={img2} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  2. Set your monthly rent price
                </h5>
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="max-w-sm mx-4 my-4 dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={img3} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  3. Publish and share with renters in your area
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-zinc-800 gap-2 py-10">
          {/* Image */}
          <div className="md:w-1/2 sm:order-1 lg:order-2 mb-6 md:mb-0 flex justify-center">
            <img
              src={img4}
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

export default PostSteps;
