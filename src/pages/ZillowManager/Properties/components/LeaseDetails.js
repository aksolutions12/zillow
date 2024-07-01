import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { TfiEmail } from "react-icons/tfi";
import { IoIosLink } from "react-icons/io";
import logoUrl from "../../../../assets/images/zil-logo.png";
import NavbarRentalManager from "../../../../components/layout/Navbar/NavbarRentalManager";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../Firebase/firebase";
import { IoChevronBack } from "react-icons/io5";
import img1 from "../../../../assets/images/houses.svg";

import Footer from "../../../../components/layout/Footer/Footer";

const label = { inputProps: { "aria-label": "Switch demo" } };

const LeaseDetails = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null);

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
    <div>
      <NavbarRentalManager logoUrl={logoUrl} />
      <div className="p-6 bg-background bg-white text-foreground">
        <div
          className="flex items-center pb-5"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        >
          <IoChevronBack size={25} className="text-blue-800  mr-2" />
          <span className="text-sm font-bold text-blue-800 hidden md:block">
            {postData.propertyInfo.streetAddress}
          </span>
        </div>
        <div className="p-6 bg-background text-foreground">
          <h1 className="text-4xl font-bold mb-4">Leases</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <div className="flex justify-center space-x-4 mb-6">
                <img src={img1} alt="House icon" className="w-46 h-64" />
              </div>
              <h2 className="text-3xl font-bold mb-2">
                Hi, Ready to create your lease?
              </h2>
              <p className="text-xl font-semibold mb-4">
                Now you can create a lease that includes legal clauses specific
                to your area.
              </p>
              <p className="text-lg mb-6">
                Share a lease with your renters to sign online. Or store a
                signed lease on Zillow to keep all your property information in
                one place.
              </p>
            </div>
            <div className="flex-1 lg:ml-6 mt-6 lg:mt-0 bg-card p-4 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-4">
                Everything you need to manage your lease
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Templates that were created by Zillow, together with law
                  firms, specific to your area
                </li>
                <li>
                  Upload an existing lease or customize a brand new Zillow one
                </li>
                <li>
                  Send and sign lease agreements to renters electronically and
                  skip the in-person meeting
                </li>
                <li>View all your leases in one place</li>
              </ul>
              <a href="#" className="text-primary font-bold mt-4 inline-block">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LeaseDetails;
