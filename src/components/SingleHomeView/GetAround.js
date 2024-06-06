import React, { useState } from "react";
import {
  FaWalking,
  FaBicycle,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { IoBusOutline } from "react-icons/io5";

const GetAround = () => {
  const [showMoreSchool, setShowMoreSchool] = useState(false);

  const toggleShowMoreSchool = () => {
    setShowMoreSchool(!showMoreSchool);
  };
  return (
    <div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Getting around</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
              <FaWalking size={25} color="white" />
            </div>
            <div>
              <p className="text-lg font-bold">8 / 100</p>
              <p className="text-sm text-zinc-600">Car-Dependent</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
              <IoBusOutline size={25} color="white" />
            </div>
            <div>
              <p className="text-lg font-bold">25 / 100</p>
              <p className="text-sm text-zinc-600">Some Transit</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
              <FaBicycle size={25} color="white" />
            </div>
            <div>
              <p className="text-lg font-bold">43 / 100</p>
              <p className="text-sm text-zinc-600">Somewhat Bikeable</p>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <h2 className="text-xl font-semibold mb-4">Nearby schools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">GreatSchools rating</h3>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
                <span className="text-lg font-bold">6/10</span>
              </div>
              <div className="ml-4">
                <a href="#" className="text-blue-600 font-semibold">
                  Swift Creek Elementary
                </a>
                <p className="text-sm text-zinc-600">
                  Grades: K-5 Distance: 0.8 mi
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
                <span className="text-lg font-bold">3/10</span>
              </div>
              <div className="ml-4">
                <a href="#" className="text-blue-600 font-semibold">
                  Dillard Drive Middle
                </a>
                <p className="text-sm text-zinc-600">
                  Grades: 6-8 Distance: 1.4 mi
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
                <span className="text-lg font-bold">7/10</span>
              </div>
              <div className="ml-4">
                <a href="#" className="text-blue-600 font-semibold">
                  Athens Drive High
                </a>
                <p className="text-sm text-zinc-600">
                  Grades: 9-12 Distance: 2.7 mi
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Schools provided by the listing agent
            </h3>
            <p className="text-sm text-zinc-600 mb-2">
              <strong>Elementary:</strong> Wake - Swift Creek
            </p>
            <p className="text-sm text-zinc-600 mb-2">
              <strong>Middle:</strong> Wake - Dillard
            </p>
            <p className="text-sm text-zinc-600 mb-2">
              <strong>High:</strong> Wake - Athens Dr
            </p>
            <p className="text-sm text-zinc-600 mb-4">
              Source: TMLS. This undefined may not be complete. We recommend
              contacting the local school district to confirm school assignments
              for this home.
            </p>
          </div>
        </div>
        {showMoreSchool && (
          <div>
            <h3 className="text-lg font-semibold mt-6 mb-2">
              About GreatSchools
            </h3>
            <p className="text-sm text-zinc-600 mb-4">
              The GreatSchools Summary Rating is based on several metrics.
            </p>
            <p className="text-sm text-zinc-600 mb-4">
              <strong>About the ratings:</strong> GreatSchools Ratings are
              designed to be a starting point to help parents compare schools,
              and should not be the only factor used in selecting the right
              school for your family. Zillow and GreatSchools recommend that
              parents tour multiple schools in-person to inform that choice. As
              of October 2020, the GreatSchools Ratings methodology continues to
              move beyond proficiency and standardized test scores. The latest
              methodology prioritizes student growth through measures of equity
              and school quality.{" "}
              <a href="#" className="text-blue-600">
                Learn more
              </a>
            </p>
            <p className="text-sm text-zinc-600">
              <strong>Disclaimer:</strong> School attendance zone boundaries are
              provided by a third party and are subject to change. They are not
              guaranteed to be accurate, up to date, or complete. Check with the
              applicable school district prior to making a decision based on
              these boundaries.
            </p>
          </div>
        )}
      </div>
      <div>
        <div className="text-blue-700 cursor-pointer px-10">
          {setShowMoreSchool ? (
            <div className="flex items-center gap-2">
              <FaChevronUp onClick={toggleShowMoreSchool} />
              <span onClick={toggleShowMoreSchool}>SHOW LESS</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <FaChevronDown onClick={toggleShowMoreSchool} />
              <span onClick={toggleShowMoreSchool}>SHOW MORE</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetAround;
