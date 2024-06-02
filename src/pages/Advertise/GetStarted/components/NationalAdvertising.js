import img from "../../../../assets/images/map.png";
export default function NationalAdvertising() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
      <div className="text-center">
        <img src={img} alt="Logo" className="mx-auto mb-4 h-32 w-32" />
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          National Direct & Programmatic Advertising
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 mt-2">
          With a{" "}
          <strong>minimum campaign investment of $15,000 per quarter</strong>,
          work with a dedicated Media Solutions representative to get started on
          a direct or programmatic campaign. Fill out the form below:
        </p>
      </div>
      <form className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
            placeholder="Enter your name"
          />
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            Please enter a valid Name *
          </p>
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Company *
          </label>
          <input
            type="text"
            id="company"
            className="mt-1 block w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
            placeholder="Enter your company"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Website *
          </label>
          <input
            type="url"
            id="website"
            className="mt-1 block w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
            placeholder="https://www.yourdomain.com"
          />
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Budget *
          </label>
          <select
            id="budget"
            className="mt-1 block w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
          >
            <option>Select a Budget</option>
            {/* Add budget options here */}
          </select>
        </div>
        <div>
          <label
            htmlFor="business-type"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Business Type *
          </label>
          <select
            id="business-type"
            className="mt-1 block w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
          >
            <option>Select a Business Type</option>
            {/* Add business type options here */}
          </select>
        </div>
        <div>
          <label
            htmlFor="campaign-name"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Brand or Campaign Name
          </label>
          <input
            type="text"
            id="campaign-name"
            className="mt-1 block w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
            placeholder="Enter brand or campaign name"
          />
        </div>
        <div>
          <label
            htmlFor="industry-segment"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Industry Segment *
          </label>
          <select
            id="industry-segment"
            className="mt-1 block w-full p-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-white"
          >
            <option>Select an Industry Segment</option>
            {/* Add industry segment options here */}
          </select>
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send
          </button>
        </div>
      </form>
      <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-400 text-center">
        We respect your privacy. See our{" "}
        <a href="#" className="text-blue-600 dark:text-blue-400 underline">
          privacy policy
        </a>
        .
      </p>
      <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 text-center">
        By pressing Send, you agree that Zilker Group may contact you via
        phone/text about your inquiry, which may involve the use of automated
        means. You are not required to consent to marketing to purchase our
        goods or services. Message/undefined rates may apply.
      </p>
    </div>
  );
}
