export default function AttractForm({ heading }) {
  return (
    <div className="max-w-md mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4"> {heading}</h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-700"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-zinc-700"
          >
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-zinc-700"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="manage"
            className="block text-sm font-medium text-zinc-700"
          >
            We build / manage: *
          </label>
          <select
            id="manage"
            name="manage"
            className="mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="" defaultValue>
              Select One
            </option>
            {/* Add options here */}
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      <p className="mt-4 text-sm text-zinc-600">
        We respect your privacy. See our{" "}
        <a href="#" className="text-blue-600 underline">
          privacy policy
        </a>
        .
      </p>
      <p className="mt-2 text-xs text-zinc-500">
        By pressing Submit, you agree that Zillow Group may contact you via
        phone/text about your inquiry, which may involve the use of automated
        means. You are not required to consent as a condition of purchasing any
        goods or services. Message/undefined rates may apply.
      </p>
    </div>
  );
}
