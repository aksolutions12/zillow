import React, { useState } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question8 from "./Question8";
import Question9 from "./Question9";
import Question10 from "./Question10";
import Question11 from "./Question11";
import Question12 from "./Question12";
import Question13 from "./Question13";
import Question14 from "./Question14";
import Question15 from "./Question15";
import { FaArrowLeft } from "react-icons/fa"; // Importing the back icon

export default function QuestionRefinance() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Define a function to render the appropriate question component based on the current step
  const renderQuestion = () => {
    switch (currentStep) {
      case 1:
        return <Question1 onNext={nextStep} />;
      case 2:
        return <Question2 onNext={nextStep} onBack={previousStep} />;
      case 3:
        return <Question3 onNext={nextStep} onBack={previousStep} />;
      case 4:
        return <Question4 onNext={nextStep} onBack={previousStep} />;
      case 5:
        return <Question5 onNext={nextStep} onBack={previousStep} />;
      case 6:
        return <Question6 onNext={nextStep} onBack={previousStep} />;
      case 7:
        return <Question7 onNext={nextStep} onBack={previousStep} />;
      case 8:
        return <Question8 onNext={nextStep} onBack={previousStep} />;
      case 9:
        return <Question9 onNext={nextStep} onBack={previousStep} />;
      case 10:
        return <Question10 onNext={nextStep} onBack={previousStep} />;
      case 11:
        return <Question11 onNext={nextStep} onBack={previousStep} />;
      case 12:
        return <Question12 onNext={nextStep} onBack={previousStep} />;
      case 13:
        return <Question13 onNext={nextStep} onBack={previousStep} />;
      case 14:
        return <Question14 onNext={nextStep} onBack={previousStep} />;
      case 15:
        return <Question15 onNext={nextStep} onBack={previousStep} />;
      // Add more cases for additional steps if needed
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <div className="bg-white flex justify-center h-4/5 p-5 py-10 rounded-lg shadow-lg w-11/12 relative">
        {currentStep > 1 && ( // Render back icon only if not on the first step
          <div
            className="absolute top-5 left-5 cursor-pointer text-blue-600"
            onClick={previousStep}
          >
            <FaArrowLeft size={24} />
          </div>
        )}
        {renderQuestion()}
      </div>
    </div>
  );
}
