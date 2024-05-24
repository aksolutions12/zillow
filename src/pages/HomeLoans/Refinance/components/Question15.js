import React, { useState } from "react";

const Question15 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const isButtonDisabled = phoneNumber.trim() === "";

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-md h-full p-6  bg-white dark:bg-zinc-800 rounded-lg ">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          What's your phone number?
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-6">
          Let us know how to contact you by phone.
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-zinc-700 dark:text-zinc-300 font-semibold mb-2"
            >
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-blue-50 dark:bg-zinc-700 text-zinc-900 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors ${
              isButtonDisabled && "opacity-50 cursor-not-allowed"
            }`}
            disabled={isButtonDisabled}
          >
            Submit
          </button>
        </form>
      </div>
      <p className="mt-8 text-center text-xs text-zinc-600 dark:text-zinc-300">
        Your information is protected by TLS encryption.
        <br /> By clicking "Submit" I authorize Zillow Home Loans to deliver or
        cause to be delivered to me at the phone number I provided,
        telemarketing calls which may use an automatic telephone dialing system,
        an artificial or prerecorded voice or text message via telephone, mobile
        device (including SMS and MMS – charges may apply) and/or email, even if
        my telephone number is registered with any state, federal, national, or
        private Do Not Call (DNC) list. I understand that I am not required to
        provide this consent and authorization and it is not a condition to
        qualify for a loan or receive any good or service. I also agree to our
        Terms of Use.
      </p>
    </div>
  );
};

export default Question15;
