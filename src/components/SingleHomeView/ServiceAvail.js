import React from "react";

export default function ServiceAvail() {
  return (
    <div className="w-full px-4 mx-auto p-4">
      <h2 className="text-xl font-semibold mb-2">Services availability</h2>
      <hr className="mb-4" />
      <h3 className="text-lg font-semibold mb-4">Contact agent</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border rounded-md p-2 bg-zinc-100"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full border rounded-md p-2 bg-zinc-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-md p-2 bg-zinc-100"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            placeholder="I am interested in 100 Franklin Chase Ct, Cary, NC 27518."
            className="w-full border rounded-md p-2 bg-zinc-100"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md"
        >
          Contact agent
        </button>
        <div className="flex items-start mt-4">
          <input
            id="pre-approval"
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-zinc-300 rounded"
          />
          <label htmlFor="pre-approval" className="ml-2 text-sm">
            I want pre-approval information from Zillow Home Loans
          </label>
        </div>
        <p className="text-xs text-zinc-600 mt-4">
          By pressing Contact agent, you agree that Zillow Group and its
          affiliates, and{" "}
          <a href="#" className="text-blue-600 underline">
            real estate professionals
          </a>{" "}
          may call/text you about your inquiry, which may involve use of
          automated means and prerecorded/artificial voices. You don't need to
          consent as a condition of buying any property, goods or services.
          Message/undefined rates may apply. You also agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Use
          </a>
          . Zillow does not endorse any real estate professionals. We may share
          information about your recent and future site activity with your agent
          to help them understand what you're looking for in a home.
        </p>
      </form>
    </div>
  );
}
