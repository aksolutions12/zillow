import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaRegCreditCard } from "react-icons/fa6";
import { RiFileUploadLine } from "react-icons/ri";
import { GiHumanTarget } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";

const steps = ["First", "Second", "Third", "Fourth", "Fifth"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const stepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="flex items-center space-x-4 p-4">
            <div className="relative">
              <div className="absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                1
              </div>
              <div className="bg-blue-100 rounded-full p-4">
                <MdOutlinePlace color="blue" size={30} />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Select Ad Placement</h2>
              <p className="text-zinc-600">
                Choose the placement of your ad based on the types of listings
                and locations where customers are searching.
              </p>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex items-center space-x-4 p-4">
            <div className="relative">
              <div className="absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                2
              </div>
              <div className="bg-blue-100 rounded-full p-4">
                <FaMoneyCheckDollar color="blue" size={30} />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Set Compaign Schduele and Budget
              </h2>
              <p className="text-zinc-600">
                Choose the placement of your ad based on the types of listings
                and locations where customers are searching.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex items-center space-x-4 p-4">
            <div className="relative">
              <div className="absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                3
              </div>
              <div className="bg-blue-100 rounded-full p-4">
                <GiHumanTarget color="blue" size={30} />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Choose You Targeting Ad</h2>
              <p className="text-zinc-600">
                Choose the placement of your ad based on the types of listings
                and locations where customers are searching.
              </p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center space-x-4 p-4">
            <div className="relative">
              <div className="absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                4
              </div>
              <div className="bg-blue-100 rounded-full p-4">
                <RiFileUploadLine color="blue" size={30} />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Select or Upload a Creative
              </h2>
              <p className="text-zinc-600">
                Choose the placement of your ad based on the types of listings
                and locations where customers are searching.
              </p>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex items-center space-x-4 p-4">
            <div className="relative">
              <div className="absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                5
              </div>
              <div className="bg-blue-100 rounded-full p-4">
                <FaRegCreditCard color="blue" size={30} />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Make Credit card Payment and Launch
              </h2>
              <p className="text-zinc-600">
                Choose the placement of your ad based on the types of listings
                and locations where customers are searching.
              </p>
            </div>
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div className="py-10 px-16">
      <div>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {stepContent(activeStep)}

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}

                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Box>
      </div>
    </div>
  );
}
