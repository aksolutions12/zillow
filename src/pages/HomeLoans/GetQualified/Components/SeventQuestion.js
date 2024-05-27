import React, { useState } from "react";

const SeventQuestion = ({ onNext }) => {
  const [usCitizen, setUsCitizen] = useState(null);
  const [foreclosure, setForeclosure] = useState(null);
  const [bankruptcy, setBankruptcy] = useState(null);
  const [showCitizenshipStatus, setShowCitizenshipStatus] = useState(false);
  const [selectedCitizenshipStatus, setSelectedCitizenshipStatus] =
    useState(null);

  const handleOptionClick = (question, value) => {
    if (question === "usCitizen") {
      setUsCitizen(value);
      if (value === "No") {
        setShowCitizenshipStatus(true);
      } else {
        setShowCitizenshipStatus(false);
      }
    } else if (question === "foreclosure") {
      setForeclosure(value);
    } else if (question === "bankruptcy") {
      setBankruptcy(value);
    }
  };

  const handleCitizenshipStatusSelect = (status) => {
    setSelectedCitizenshipStatus(status);
  };

  const isButtonDisabled = () => {
    return (
      usCitizen === null ||
      (usCitizen === "No" && selectedCitizenshipStatus === null) ||
      foreclosure === null ||
      bankruptcy === null
    );
  };

  const handleNext = () => {
    onNext(); // Call the onNext function passed from the parent component
  };

  return (
    <div>
      <div className="w-full mx-auto p-4">
        <p className="text-lg font-semibold mb-4">
          Are you a US citizen? <span className="text-red-500">*</span>
        </p>
        <div className="flex border rounded-lg overflow-hidden mb-4">
          <button
            className={`flex-1 p-4 border-r text-center ${
              usCitizen === "Yes" ? "bg-blue-50" : ""
            } hover:bg-zinc-100 focus:bg-zinc-200`}
            onClick={() => handleOptionClick("usCitizen", "Yes")}
          >
            Yes
          </button>
          <button
            className={`flex-1 p-4 text-center ${
              usCitizen === "No" ? "bg-blue-50" : ""
            } hover:bg-zinc-100 focus:bg-zinc-200`}
            onClick={() => handleOptionClick("usCitizen", "No")}
          >
            No
          </button>
        </div>
      </div>

      {showCitizenshipStatus && (
        <div className="w-full  bg-white mx-auto p-4">
          <h1 className="text-2xl font-bold text-center">
            What is your citizenship status?
          </h1>

          <div className="mt-4 border rounded-lg overflow-hidden">
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedCitizenshipStatus === "Permanent Resident" &&
                "bg-sky-100"
              }`}
              onClick={() =>
                handleCitizenshipStatusSelect("Permanent Resident")
              }
            >
              Permanent Resident
            </button>
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedCitizenshipStatus === "Non-Permanent Resident" &&
                "bg-sky-100"
              }`}
              onClick={() =>
                handleCitizenshipStatusSelect("Non-Permanent Resident")
              }
            >
              Non-Permanent Resident
            </button>
            <button
              className={`w-full py-2 border-b text-center hover:bg-zinc-100 ${
                selectedCitizenshipStatus === "Other" && "bg-sky-100"
              }`}
              onClick={() => handleCitizenshipStatusSelect("Other")}
            >
              Other
            </button>
          </div>
        </div>
      )}

      <div className="w-full mx-auto p-4">
        <p className="text-lg font-semibold mb-4">
          Have you had a foreclosure within the past 7 years?{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex border rounded-lg overflow-hidden mb-4">
          <button
            className={`flex-1 p-4 border-r text-center ${
              foreclosure === "Yes" ? "bg-blue-50" : ""
            } hover:bg-zinc-100 focus:bg-zinc-200`}
            onClick={() => handleOptionClick("foreclosure", "Yes")}
          >
            Yes
          </button>
          <button
            className={`flex-1 p-4 text-center ${
              foreclosure === "No" ? "bg-blue-50" : ""
            } hover:bg-zinc-100 focus:bg-zinc-200`}
            onClick={() => handleOptionClick("foreclosure", "No")}
          >
            No
          </button>
        </div>
      </div>

      <div className="w-full mx-auto p-4">
        <p className="text-lg font-semibold mb-4">
          Have you had a bankruptcy or short sale in the past 4 years?{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex border rounded-lg overflow-hidden mb-4">
          <button
            className={`flex-1 p-4 border-r text-center ${
              bankruptcy === "Yes" ? "bg-blue-50" : ""
            } hover:bg-zinc-100 focus:bg-zinc-200`}
            onClick={() => handleOptionClick("bankruptcy", "Yes")}
          >
            Yes
          </button>
          <button
            className={`flex-1 p-4 text-center ${
              bankruptcy === "No" ? "bg-blue-50" : ""
            } hover:bg-zinc-100 focus:bg-zinc-200`}
            onClick={() => handleOptionClick("bankruptcy", "No")}
          >
            No
          </button>
        </div>
      </div>

      <button
        className={`w-full py-3 rounded-lg ${
          isButtonDisabled()
            ? "bg-blue-300 text-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-700"
        }`}
        onClick={handleNext}
        disabled={isButtonDisabled()}
      >
        Next
      </button>
    </div>
  );
};

export default SeventQuestion;
