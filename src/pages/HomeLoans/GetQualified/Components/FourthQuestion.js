// FourthQuestion.js

import React, { useState } from "react";
import usStates from "../../../../data/usStates";
import { AiOutlineSearch } from "react-icons/ai";

const FourthQuestion = ({ onNext }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const isButtonDisabled = () => {
    return (
      firstName === "" ||
      lastName === "" ||
      phoneNumber === "" ||
      email === "" ||
      streetAddress === "" ||
      selectedState === "" ||
      zipCode === ""
    );
  };

  const handleNext = () => {
    onNext(); // Call the onNext function passed from the parent component
  };

  return (
    <div className="max-w-4xl bg-white mx-auto p-4">
      <h2 className="text-xl font-semibold mb-2">Just a few more details</h2>
      <p className="mb-4 text-zinc-600">
        We'll use this information to fill out the paperwork for you, so you
        don’t have to. We will never sell your information to third party
        lenders without your consent.
      </p>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="first-name"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full border ${
                firstName === "" ? "border-red-500" : "border-zinc-300"
              } p-2 rounded`}
              type="text"
              id="first-name"
              placeholder="First name is required"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {firstName === "" && (
              <p className="text-red-500 text-xs mt-1">
                First name is required
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="last-name"
            >
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full border ${
                lastName === "" ? "border-red-500" : "border-zinc-300"
              } p-2 rounded`}
              type="text"
              id="last-name"
              placeholder="Last name is required"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="phone-number"
            >
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full border ${
                phoneNumber === "" ? "border-red-500" : "border-zinc-300"
              } p-2 rounded`}
              type="text"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="email-address"
            >
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full border ${
                email === "" ? "border-red-500" : "border-zinc-300"
              } p-2 rounded`}
              type="email"
              id="email-address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">Your current address</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="street-address"
            >
              Street address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                className={`w-full border ${
                  streetAddress === "" ? "border-red-500" : "border-zinc-300"
                } p-2 rounded`}
                type="text"
                id="street-address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <AiOutlineSearch size={20} />
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="unit">
              Unit
            </label>
            <input
              className="w-full border border-zinc-300 p-2 rounded"
              type="text"
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="city">
              City
            </label>
            <input
              className="w-full border border-zinc-300 p-2 rounded"
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="state">
              State <span className="text-red-500">*</span>
            </label>
            <select
              className={`w-full border ${
                selectedState === "" ? "border-red-500" : "border-zinc-300"
              } p-2 rounded`}
              id="state"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Select option</option>
              {usStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {selectedState === "" && (
              <p className="text-red-500 text-xs mt-1">State is required</p>
            )}
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="zip-code"
            >
              ZIP Code <span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full border ${
                zipCode === "" ? "border-red-500" : "border-zinc-300"
              } p-2 rounded`}
              type="text"
              id="zip-code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>

        <button
          className={`w-full bg-blue-500 text-white p-2 rounded ${
            isButtonDisabled() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={isButtonDisabled()}
          onClick={handleNext}
        >
          Next
        </button>
      </form>

      <p className="text-xs text-zinc-600 mt-4">
        Your information is protected by TLS encryption. By selecting "Next" I
        (1) authorize Zillow Home Loans, LLC ("ZHL") to send the information I
        provided to Zillow Group Marketplace, Inc. ("ZGMI"), so that ZGMI may
        share that information with participating lenders, and (2) authorize ZHL
        and its affiliates including ZGMI, lenders, and other partners and real
        estate professionals, to deliver or cause to be delivered to me at the
        phone number I provided, telemarketing calls which may use an automatic
        telephone dialing system, an artificial or prerecorded voice or text
        message via telephone, mobile device (including SMS and MMS - charges
        may apply) and/or email, even if my telephone number is registered with
        any state, federal, national, or private Do Not Call (DNC) list. I
        understand that I am not required to provide this consent and
        authorization and it is not a condition to qualify for a loan or receive
        any good or service. Zillow Home Loans utilizes robust security measures
        to protect the information that we receive from you, including a secure
        undefined transfer platform that houses undefined you send to us. The
        use of unsecured email, text or SMS may increase security risk, for
        which we are not responsible. I also agree to the{" "}
        <a href="#" className="text-blue-500 underline">
          Term of Use and Privacy Policy
        </a>
        .
      </p>
      <p className="text-xs text-zinc-600 mt-2">
        By selecting "Next," I provide consent and agree to the{" "}
        <a href="#" className="text-blue-500 underline">
          Use of Electronic Signatures and Records
        </a>
        .
      </p>
    </div>
  );
};

export default FourthQuestion;
