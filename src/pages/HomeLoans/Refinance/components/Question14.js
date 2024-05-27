import React, { useState } from "react";

const Question14 = ({ onNext }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNext = () => {
    onNext(); // Call the onNext function passed from the parent component
  };

  const isButtonDisabled = email.trim() === "";

  return (
    <div className="max-w-md mx-auto p-6  bg-white dark:bg-zinc-800 rounded-lg ">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
        What's your email address?
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
        Let us know how to contact you by email.
      </p>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-zinc-700 dark:text-zinc-300 font-semibold mb-2"
          >
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-blue-50 dark:bg-zinc-700 text-zinc-900 dark:text-white"
            required
          />
        </div>
        <button
          onClick={handleNext}
          type="submit"
          className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors ${
            isButtonDisabled && "opacity-50 cursor-not-allowed"
          }`}
          disabled={isButtonDisabled}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Question14;
