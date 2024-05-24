import React, { useState } from "react";

const Question13 = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const isButtonDisabled = name.trim() === "";

  return (
    <div className="max-w-md mx-auto p-6  bg-white dark:bg-zinc-800 rounded-lg ">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
        What's your contact information?
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
        First, please give us your name.
      </p>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-zinc-700 dark:text-zinc-300 font-semibold mb-2"
          >
            First and last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
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
          Next
        </button>
      </form>
    </div>
  );
};

export default Question13;
