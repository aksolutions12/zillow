import React, { useState, useEffect } from "react";
import {
  FiArrowLeft,
  FiHeart,
  FiShare2,
  FiEyeOff,
  FiMoreHorizontal,
} from "react-icons/fi";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
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
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import Modal from "@mui/material/Modal"; // Import Modal from MUI
import ImageGallery from "./SingleHomeView/ImageGallery";
import { RiGalleryView2 } from "react-icons/ri";

export default function SingleHomeView() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "posts", postId); // Use the correct method to get a document reference
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPostData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching post: ", error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!postData) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
        <div className="px-3 ">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
            onClick={handleOpenModal}
          >
            <div className="relative">
              <img
                src={
                  postData.media &&
                  postData.media.selectedFiles &&
                  postData.media.selectedFiles[0]
                    ? postData.media.selectedFiles[0]
                    : homimg
                }
                alt="Main house image"
                className="w-full h-auto rounded-l-lg hover:brightness-50 transition duration-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img
                src={
                  postData.media &&
                  postData.media.selectedFiles &&
                  postData.media.selectedFiles[1]
                    ? postData.media.selectedFiles[1]
                    : homin1
                }
                alt="House image 1"
                className="w-full h-auto  hover:brightness-50 transition duration-300"
              />
              <img
                src={
                  postData.media &&
                  postData.media.selectedFiles &&
                  postData.media.selectedFiles[2]
                    ? postData.media.selectedFiles[2]
                    : homin2
                }
                alt="House image 2"
                className="w-full h-auto rounded-r-lg  hover:brightness-50 transition duration-300"
              />
              <img
                src={
                  postData.media &&
                  postData.media.selectedFiles &&
                  postData.media.selectedFiles[3]
                    ? postData.media.selectedFiles[3]
                    : homin3
                }
                alt="House image 3"
                className="w-full h-auto  hover:brightness-50 transition duration-300"
              />
              <div className="relative">
                <img
                  src={
                    postData.media &&
                    postData.media.selectedFiles &&
                    postData.media.selectedFiles[4]
                      ? postData.media.selectedFiles[4]
                      : homin4
                  }
                  alt="House image 4"
                  className="w-full h-auto rounded-r-lg hover:brightness-50 transition duration-300"
                />
                <div
                  className="absolute flex items-center font-bold gap-2  cursor-pointer bottom-4 text-xs right-4 bg-white text-zinc-800 px-4 py-2 rounded-lg shadow-md"
                  onClick={handleOpenModal}
                >
                  <RiGalleryView2 size={20} />
                  See all {postData.media.selectedFiles.length} photos
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomeDetailsCard data={postData} />

        <PropertyDetails data={postData} />

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

      {/* Modal for Image Gallery */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="image-gallery-modal"
        aria-describedby="image-gallery-modal-description"
      >
        <div className="flex justify-center items-center h-full overflow-auto">
          <div className="bg-white p-4  max-w-5xl w-full h-full overflow-y-auto">
            <div
              className="flex items-center mb-4"
              onClick={handleCloseModal}
              style={{ cursor: "pointer" }}
            >
              <FiArrowLeft className="w-6 h-6 mr-2" />
              <span className="text-sm text-gray-700 hidden md:block">
                Back to Listing
              </span>
            </div>

            <ImageGallery dataimg={postData} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
