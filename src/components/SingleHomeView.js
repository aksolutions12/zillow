import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiShare2,
  FiEyeOff,
  FiMoreHorizontal,
} from "react-icons/fi";
import Footer from "./layout/Footer/Footer";
import zillogo from "../assets/images/zil-logo.png";
import homimg from "../assets/images/home.jpg";
import homin1 from "../assets/images/homin1.jpg";
import homin2 from "../assets/images/homin2.jpg";
import homin3 from "../assets/images/homin3.jpg";
import homin4 from "../assets/images/homin4.jpg";
import MapSection from "../pages/Buy/Components/MapSection";
import PropertyDetails from "./SingleHomeView/PropertyDetails";
import HomeDetailsCard from "./SingleHomeView/HomeDetailsCard";
import ServiceAvail from "./SingleHomeView/ServiceAvail";
import PriceHistory from "./SingleHomeView/PriceHistory";
import GetAround from "./SingleHomeView/GetAround";

export default function SingleHomeView() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="max-w-5xl w-full h-full bg-white flex flex-col">
        <div className="w-full mx-auto bg-white p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <div
              className="flex items-center"
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            >
              <FiArrowLeft className="w-6 h-6 mr-2" />
              <span className="text-sm text-gray-700 hidden md:block">
                Back to search
              </span>
            </div>
            <img
              src={zillogo}
              alt="Zillow logo"
              className="h-8 w-28 hidden md:block"
            />
            <div className="flex items-center space-x-4">
              <button className="text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center">
                  <FiHeart className="w-6 h-6" />
                  <span className="ml-2 text-sm hidden md:block">Save</span>
                </div>
              </button>
              <button className="text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center">
                  <FiShare2 className="w-6 h-6" />
                  <span className="ml-2 text-sm hidden md:block">Share</span>
                </div>
              </button>
              <button className="text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center">
                  <FiEyeOff className="w-6 h-6" />
                  <span className="ml-2 text-sm hidden md:block">Hide</span>
                </div>
              </button>
              <button className="text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center">
                  <FiMoreHorizontal className="w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={homimg}
                alt="Main house image"
                className="w-full h-auto rounded-lg"
              />
              <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                For sale
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img
                src={homin1}
                alt="House image 1"
                className="w-full h-auto rounded-lg"
              />
              <img
                src={homin2}
                alt="House image 2"
                className="w-full h-auto rounded-lg"
              />
              <img
                src={homin3}
                alt="House image 3"
                className="w-full h-auto rounded-lg"
              />
              <div className="relative">
                <img
                  src={homin4}
                  alt="House image 4"
                  className="w-full h-auto rounded-lg"
                />
                <button className="absolute bottom-4 text-xs right-4 bg-white text-zinc-800 px-4 py-2 rounded-lg shadow-md">
                  See all photos
                </button>
              </div>
            </div>
          </div>
        </div>

        <HomeDetailsCard />

        <PropertyDetails />

        <ServiceAvail />

        <PriceHistory />

        <div className="p-4 pb-2">
          <h1 className="font-bold text-lg">Neighborhood: 27518</h1>
          <div className="h-96">
            <MapSection />
          </div>
        </div>

        <GetAround />

        <Footer />
      </div>
    </div>
  );
}
