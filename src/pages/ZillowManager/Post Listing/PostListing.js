import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropertyInfo from "./components/PropertyInfo";
import ListingDetails from "./components/ListingDetails";
import Lease from "./components/Lease";
import Media from "./components/Media";
import Amenities from "./components/Amenities";
import FinalDetail from "./components/FinalDetail";
import dayjs from "dayjs";
import ReviewListing from "./components/ReviewListing";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { auth, storage, db } from "../../../Firebase/firebase";
import { useAuth } from "../../../ContextApi/AuthContext";

const steps = [
  "Property info",
  "Listing details",
  "Lease",
  "Media",
  "Amenities",
  "Final details",
  "Review",
];

export default function PostListing() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State for Snackbar message
  const [loading, setLoading] = useState(false); // State for loading
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    propertyInfo: {
      streetAddress: "",
      propertyType: "",
      unitNumber: "",
      sharedLivingSpace: false,
      squareFootage: "",
      totalBedrooms: "",
      totalBathrooms: "",
      propertyDescription: "",
    },
    listingDetails: {
      monthlyRent: "",
      securityDeposit: "",
    },
    lease: {
      petPolicy: {
        noPets: null,
        cats: null,
        smallDogs: null,
        largeDogs: null,
      },
      leaseDescription: "",
    },
    media: {
      selectedFiles: [],
    },
    amenities: {
      laundry: "",
      cooling: [],
      heating: [],
      appliances: [],
      flooring: [],
      parking: [],
      outdoorAmenities: [],
      accessibility: [],
      otheramenities: [],
      additionalAmenities: [],
    },
    finalDetails: {
      listedBy: "",
      name: "",
      email: "",
      selectedDays: [],
      hideAddress: "",
      selectedDate: "",
      leaseDuration: "",
      acceptOnlineApplications: "",
    },
  });

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = async () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);

    // When "Publish" is clicked
    if (isLastStep()) {
      const user = auth.currentUser;
      if (isLoggedIn) {
        setLoading(true); // Start loading
        const userId = user.uid;
        const postId = uuidv4(); // Generate a unique ID for the post

        try {
          // Flatten nested arrays in amenities
          const flattenedAmenities = {
            ...formData.amenities,
            cooling: Object.values(formData.amenities.cooling),
            heating: Object.values(formData.amenities.heating),
            appliances: Object.values(formData.amenities.appliances),
            flooring: Object.values(formData.amenities.flooring),
            parking: Object.values(formData.amenities.parking),
            outdoorAmenities: Object.values(
              formData.amenities.outdoorAmenities
            ),
            accessibility: Object.values(formData.amenities.accessibility),
            additionalAmenities: Object.values(
              formData.amenities.additionalAmenities
            ),
            otheramenities: Object.values(formData.amenities.otheramenities),
          };

          // Flatten selectedDays array
          const flattenedSelectedDays = Object.values(
            formData.finalDetails.selectedDays
          );

          // Upload images to Firebase Storage
          const imageUrls = await Promise.all(
            formData.media.selectedFiles.map(async (file) => {
              const storageRef = ref(storage, `posts/${postId}/${file.name}`);
              await uploadBytes(storageRef, file);
              return await getDownloadURL(storageRef);
            })
          );

          // Add post data to Firestore
          await setDoc(doc(db, "posts", postId), {
            propertyInfo: formData.propertyInfo,
            listingDetails: formData.listingDetails,
            lease: formData.lease,
            media: { selectedFiles: imageUrls },
            amenities: flattenedAmenities, // Replace nested arrays with flattened versions
            finalDetails: {
              ...formData.finalDetails,
              selectedDays: flattenedSelectedDays, // Replace selectedDays with flattened array
            },
            userId,
            postId,
            timestamp: new Date(),
          });

          console.log("Post successfully created!");
          setSnackbarMessage("Post successfully created!");
          setOpenSnackbar(true);
          navigate("/forrent"); // Navigate to /forrent
        } catch (error) {
          console.error("Error creating post: ", error);
          setSnackbarMessage("Error creating post.");
          setOpenSnackbar(true);
        } finally {
          setLoading(false); // End loading
        }
      } else {
        setSnackbarMessage("You need to be logged in to publish a post.");
        setOpenSnackbar(true);
        console.error("No user is logged in");
      }
    }
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleCloseSnackbar}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1 className="italic mr-1">Post Uploading..</h1>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="flex flex-col h-screen">
      <Box className="flex-none bg-white">
        <h1 className="font-bold text-2xl p-4">{steps[activeStep]}</h1>
      </Box>
      <hr className="text-gray-500" />
      <Box className="flex-1 overflow-auto p-2 bg-white py-4">
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                <span className="hidden md:inline">{label}</span>
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <hr className="text-gray-500 my-3" />

        {activeStep === 0 && (
          <PropertyInfo formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 1 && (
          <ListingDetails formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 2 && (
          <Lease formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 3 && (
          <Media formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 4 && (
          <Amenities formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 5 && (
          <FinalDetail formData={formData} setFormData={setFormData} />
        )}
        {activeStep === 6 && <ReviewListing formData={formData} />}
      </Box>
      <Box className="flex-none p-2 bg-white">
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography className="mt-2 mb-1">
              All steps completed - you&apos;re finished
            </Typography>
            <Box className="flex flex-row pt-2">
              <Box className="flex-1" />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <Box className="flex flex-row pt-2">
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              className="mr-1"
            >
              Back
            </Button>
            <Box className="flex-1" />
            <Button onClick={handleNext} className="mr-1">
              Next
            </Button>
            {activeStep !== steps.length && (
              <Button onClick={handleComplete}>
                {completedSteps() === totalSteps() - 1 || isLastStep()
                  ? "Publish"
                  : "Complete Step"}
              </Button>
            )}
          </Box>
        )}
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={action}
      />
    </Box>
  );
}
