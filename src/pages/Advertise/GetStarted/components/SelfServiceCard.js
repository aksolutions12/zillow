import img1 from "../../../../assets/images/location.png";
export default function SelfServiceCard() {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md text-center">
      <img src={img1} alt="location icon" className="mx-auto mb-4 h-32 w-32" />
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
        Self-Service Advertising
      </h2>
      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        For campaigns with <strong>budgets between $500 and $15,000</strong>,
        showcase your business to customers in local areas with Zillow Group
        Media Manager. Easily launch, manage, and report on your own campaigns
        with our self-service advertising tools.
      </p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4">
        Start Now →
      </button>
      <p className="text-zinc-700 dark:text-zinc-300">
        Still have questions about self-service advertising?{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Learn more
        </a>
      </p>
    </div>
  );
}
