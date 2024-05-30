import React, { useState } from "react";

export default function ConnectingForm() {
  // Define state variables for each input field
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyManagementCompany, setPropertyManagementCompany] =
    useState("");
  const [companyHQState, setCompanyHQState] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [manage, setManage] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like sending it to a server
    console.log("Form submitted:", {
      fullName,
      email,
      phone,
      propertyManagementCompany,
      companyHQState,
      propertyName,
      manage,
    });
    // Optionally, you can reset the form fields after submission
    setFullName("");
    setEmail("");
    setPhone("");
    setPropertyManagementCompany("");
    setCompanyHQState("");
    setPropertyName("");
    setManage("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Start connecting now</h2>
      <p className="mb-6">Submit your information below.</p>
      <form onSubmit={handleSubmit}>
        <fieldset className="mb-6">
          <div className="mb-4">
            <label htmlFor="manage" className="block text-sm font-medium mb-1">
              I manage: *
            </label>
            <select
              id="manage"
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              value={manage}
              onChange={(e) => setManage(e.target.value)}
              required
            >
              <option value="">Select an option</option>
              {/* Add options here */}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="full-name"
              className="block text-sm font-medium mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="full-name"
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              placeholder="First and last name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </fieldset>

        <fieldset className="mb-6">
          <div className="mb-4">
            <label
              htmlFor="property-management-company"
              className="block text-sm font-medium mb-1"
            >
              Property management company *
            </label>
            <input
              type="text"
              id="property-management-company"
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              placeholder="Property management company"
              value={propertyManagementCompany}
              onChange={(e) => setPropertyManagementCompany(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="company-hq-state"
              className="block text-sm font-medium mb-1"
            >
              Company HQ State *
            </label>
            <input
              type="text"
              id="company-hq-state"
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              placeholder="Company HQ State"
              value={companyHQState}
              onChange={(e) => setCompanyHQState(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="property-name"
              className="block text-sm font-medium mb-1"
            >
              Property Name *
            </label>
            <input
              type="text"
              id="property-name"
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              placeholder="Property Name"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>

      <div className="mt-6 text-sm">
        <p>
          Are you a landlord with just a few properties?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Click here
          </a>
        </p>
        <p className="mt-4">
          We respect your privacy. See our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            privacy policy
          </a>
          .
        </p>
        <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
          By pressing Submit, you agree that Zillow Group may contact you via
          phone/text about your inquiry, which may involve the use of automated
          means. You are not required to consent as a condition of purchasing
          any goods or services. Message/undefined rates may apply.
        </p>
      </div>
    </div>
  );
}
