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
import img1 from "../../../../assets/images/dollar.svg";

import Footer from "../../../../components/layout/Footer/Footer";

const label = { inputProps: { "aria-label": "Switch demo" } };

const PaymentDetails = () => {
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
        <div className="bg-background text-foreground p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Payments</h1>
            <hr className="border-t border-border mb-8" />
            <div className="flex flex-col items-center">
              <img src={img1} alt="payment-icon " className="mb-6 w-24 h-24" />
              <h2 className="text-2xl font-semibold mb-4">
                Say Hello to Online Payments
              </h2>
              <p className="text-muted-foreground mb-4">
                You get a free, secure way to collect rent and move-in costs
                right into your bank account. Your tenant gets a free way to pay
                and more flexibility. You both get freedom from checks.
              </p>
              <a href="#" className="text-primary hover:underline mb-8">
                Learn more
              </a>
              <button className="bg-primary text-primary-foreground text-white py-2 px-4 rounded-lg mb-4">
                Start collecting payments
              </button>
              <p className="text-xs text-muted-foreground">
                By clicking "Start collecting payments" or "Collect move-in
                costs" you agree to comply with the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Use
                </a>
                ,{" "}
                <a href="#" className="text-primary hover:underline">
                  Rental User Terms
                </a>
                , and our third-party payment processor's{" "}
                <a href="#" className="text-primary hover:underline">
                  Payment Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Bank Authorization Terms
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentDetails;
