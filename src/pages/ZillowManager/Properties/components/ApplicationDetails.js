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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PiArchiveLight } from "react-icons/pi";
import Footer from "../../../../components/layout/Footer/Footer";

const label = { inputProps: { "aria-label": "Switch demo" } };

const ApplicationDetails = () => {
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
        <h1 className="text-3xl font-bold mb-4">Applications</h1>
        <div className="flex items-center mb-4">
          <div>
            <p className="font-semibold">Accepting Zillow applications </p>
            <p className="text-muted-foreground">
              You’ll receive applications with full credit & background check,
              powered by Experian and CIC.
            </p>
          </div>
          <div className="ml-auto">
            <Switch {...label} defaultChecked />
          </div>
        </div>
        <hr className="border-muted mb-4" />
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Completed applications</h2>
          <p className="text-muted-foreground">
            You haven't received any applications yet.
          </p>
        </div>
        <div className="mb-4">
          <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center pb-2">
            <h2 className="text-2xl font-bold">Invited applicants</h2>
            <div className="flex items-center mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                <TfiEmail color="white" size={20} className="mr-2" />
                Send application link
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg ml-2 flex items-center">
                <IoIosLink color="blue" size={20} />
              </button>
            </div>
          </div>
          <div className="flex items-start">
            <p className="text-muted-foreground">
              For a group, invite one member of the group to apply. On the
              application form, they will have the opportunity to invite the
              other members.
            </p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mt-4">
          By enabling or sharing applications, you agree to comply with our{" "}
          <a href="#" className="text-blue-500 underline">
            Terms of Use
          </a>
          ,{" "}
          <a href="#" className="text-blue-500 underline">
            Rental User Terms
          </a>
          , and{" "}
          <a href="#" className="text-blue-500 underline">
            Respectful Renting Pledge
          </a>
          .
        </p>
      </div>
      <div className="p-6 bg-white">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="flex items-center ">
              <PiArchiveLight size={25} className="mr-2" />
              <span className="font-bold">Archived applications</span>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            Applications shown here were declined, withdrawn, or are over 90
            days old. They’ll be deleted after 2 years — save copies for your
            records before then.
          </AccordionDetails>
        </Accordion>
        <h1 className="font-bold text-3xl py-2">Resouces</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            How do applications work?
          </AccordionSummary>
          <AccordionDetails>
            Prospective renters send you an identity-verified renter application
            with a freshly pulled credit report, criminal background check and
            eviction record.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Where can I see a sample application and reports?
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-bold text-blue-900">
              Sample online rental application
            </p>
            <p className="font-bold text-blue-900">
              Sample tenant background check
            </p>
            <p className="font-bold text-blue-900">Sample credit report</p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Have more questions?
          </AccordionSummary>
          <AccordionDetails>
            <p className="font-bold text-blue-900 mb-2">Full list of FAQs</p>

            <p className="mb-2">Still have a question?</p>
            <p className="font-bold text-blue-900 mb-2">Sample credit report</p>
          </AccordionDetails>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationDetails;
