import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import reviewimg from "../../../assets/images/Mobile testimonial image.png";

const ReviewsSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-8">
        <h2 className="text-4xl font-bold text-center">
          See what our customers are saying
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col gap-5 p-5 w-full">
        <div className="lg:w-3/4 md:w-full sm:w-full">
          <iframe
            className="mx-auto w-full lg:max-w-3xl h-64 sm:h-96 rounded-lg shadow-xl"
            src="https://www.youtube.com/embed/OuN_E3yMc3o?si=SeuppRWs2f3xGepS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col justify-between items-center ">
          <div>
            <img
              src={reviewimg}
              alt="reviewimg"
              className="w-72 h-72 sm:w-96 sm:h-96 pr-10"
            />
            <div className="float-right pr-10">
              <button className="bg-transparent hover:bg-cyan-100 text-blue-700 font-bold py-2 px-4 rounded-full flex items-center mt-2">
                See all reviews{" "}
                <IoIosArrowRoundForward size={20} className="ml-2 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
