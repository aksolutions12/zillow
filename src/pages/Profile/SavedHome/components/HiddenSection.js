import { FiArrowLeftCircle, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import img1 from "../../../../assets/images/hidehomes.png";

export default function HiddenSection() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="min-h-screen w-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 flex flex-col items-center justify-center p-4">
      <div className="w-full px-3">
        <button
          onClick={handleBackClick}
          className="text-blue-600 dark:text-blue-400 mb-4 flex items-center"
        >
          <FiArrowLeftCircle className="inline-block mr-2 " /> Back to Saved
          homes
        </button>
        <div className="flex justify-between items-center mb-4">
          {" "}
          <h1 className="text-3xl font-bold font-serif mb-6">
            Hidden homes
          </h1>{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 flex items-center"
          >
            <FiEyeOff className="inline-block mr-2" /> Unhide all homes
          </a>
        </div>
        <div className="flex flex-col items-center justify-center bg-white py-10 px-2 sm:mx-1 lg:mx-2">
          <div className="flex flex-col items-center text-center">
            <img
              src={img1}
              alt="Homes illustration"
              className="mb-6 w-96 h-32"
            />
            <h2 className="text-xl font-semibold mb-2">
              Hide homes to remove them from your search results.
            </h2>
            <p className="mb-4">
              Hide homes to remove them from your search results. When you want
              to remove a home, select the{" "}
              <span className="text-blue-600 dark:text-blue-400">
                <FiEyeOff className="inline-block" />
              </span>{" "}
              to hide it.
            </p>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 font-semibold"
            >
              Search for homes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
