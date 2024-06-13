import * as React from "react";
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

const steps = [
  "Property info",
  "Listing details",
  "Lease",
  "Media",
  "Amenities",
  "Final details",
  "Review",
  "Publish",
];

export default function PostListing() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

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

  const handleComplete = () => {
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

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
        <Typography className="mt-2 mb-1 py-1">
          Step {activeStep + 1}
        </Typography>
        {/* Conditionally render PropertyInfo component */}
        {activeStep === 0 && <PropertyInfo />}
        {activeStep === 1 && <ListingDetails />}
        {activeStep === 2 && <Lease />}
        {activeStep === 3 && <Media />}
        {activeStep === 4 && <Amenities />}
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
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <Typography variant="caption" className="inline-block">
                  Step {activeStep + 1} already completed
                </Typography>
              ) : (
                <Button onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1 || isLastStep()
                    ? "Publish"
                    : "Complete Step"}
                </Button>
              ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
