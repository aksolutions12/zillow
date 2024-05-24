import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { AiFillApple } from "react-icons/ai";

export default function NewAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isProfessional, setIsProfessional] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zip, setZip] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(["", "", "", ""]);

  const handleProfessionalCheck = () => {
    setIsProfessional(!isProfessional);
  };

  const handlePhoneNumberChange = (index, value) => {
    const newPhoneNumber = [...phoneNumber];
    newPhoneNumber[index] = value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhoneNumber(newPhoneNumber);
  };

  const handleSubmit = () => {
    // Validation logic for email and phone number can be added here
    console.log("Form submitted!");
  };

  return (
    <div className="w-full mx-auto sm:max-w-md">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-blue-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-blue-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <ul className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          <li>At least 8 characters</li>
          <li>Mix of letters and numbers</li>
          <li>At least 1 special character</li>
          <li>At least 1 lowercase letter and 1 uppercase letter</li>
        </ul>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-zinc-600 rounded-full"
            onChange={handleProfessionalCheck}
          />
          <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">
            I am a landlord or industry professional
          </span>
        </label>
      </div>
      {isProfessional && (
        <div className="  bg-white dark:bg-zinc-800  ">
          <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Professional Information
          </h2>
          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
              Professional type
            </label>
            <select className="w-full p-2.5 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg">
              <option>Select your category</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
                First name
              </label>
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2.5 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
                Last name
              </label>
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2.5 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
              Zip/Postal
            </label>
            <input
              type="text"
              placeholder="Zip/Postal"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="w-full p-2.5 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-zinc-700 dark:text-zinc-300">
                Phone number
              </label>
              <label className="text-zinc-700 dark:text-zinc-300">Ext</label>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="555"
                    value={phoneNumber[index]}
                    onChange={(e) =>
                      handlePhoneNumberChange(index, e.target.value)
                    }
                    className="w-full p-2.5 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
      <div className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-2">
        By submitting, I accept Zillow's{" "}
        <a href="#" className="text-blue-500 hover:underline">
          terms of use
        </a>
        .
      </div>
      <div className="my-4 border-t border-zinc-300"></div>
      <div className="text-center text-sm text-zinc-700 dark:text-zinc-300 mb-4">
        Or connect with:
      </div>
      <div className="mt-6 space-y-3 w-full">
        <button className="w-full py-2 px-4 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-lg bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center gap-5">
          <AiFillApple className="mr-2" color="black" />
          Continue with Apple
        </button>
        <button className="w-full py-2 px-4 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-lg bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center  gap-5">
          <FaFacebookF className="mr-2" color="blue" />
          Continue with Facebook
        </button>
        <button className="w-full py-2 px-4 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-lg bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center  gap-5">
          <GrGoogle className="mr-2" color="red" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
