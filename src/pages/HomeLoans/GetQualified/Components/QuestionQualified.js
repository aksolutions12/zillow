import React, { useState } from "react";

import { FaArrowLeft } from "react-icons/fa";
import HeroSectionQualified from "./HeroSectionQualified";
import FirstQuestions from "./FirstQuestions";
import SecondQuestions from "./SecondQuestions";
import ThirdQuestions from "./ThirdQuestions";
import FourthQuestion from "./FourthQuestion";
import FifthQuestion from "./FifthQuestion";
import SixQuestion from "./SixQuestion";
import SeventQuestion from "./SeventQuestion";
import EightQuestion from "./EightQuestion";
import NineQuestion from "./NineQuestion";
import LastAfterSubmit from "./LastAfterSubmit";

const QuestionQualified = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderQuestion = () => {
    switch (currentStep) {
      case 1:
        return <HeroSectionQualified onNext={nextStep} />;
      case 2:
        return <FirstQuestions onNext={nextStep} onBack={previousStep} />;
      case 3:
        return <SecondQuestions onNext={nextStep} onBack={previousStep} />;
      case 4:
        return <ThirdQuestions onNext={nextStep} onBack={previousStep} />;
      case 5:
        return <FourthQuestion onNext={nextStep} onBack={previousStep} />;
      case 6:
        return <FifthQuestion onNext={nextStep} onBack={previousStep} />;
      case 7:
        return <SixQuestion onNext={nextStep} onBack={previousStep} />;
      case 8:
        return <SeventQuestion onNext={nextStep} onBack={previousStep} />;
      case 9:
        return <EightQuestion onNext={nextStep} onBack={previousStep} />;
      case 10:
        return <NineQuestion onNext={nextStep} onBack={previousStep} />;
      case 11:
        return <LastAfterSubmit />;
      // Add more cases for additional steps if needed
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center  bg-white dark:bg-zinc-900">
      <div className="bg-white flex justify-center   py-10 relative">
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
};

export default QuestionQualified;
