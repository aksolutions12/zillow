import { Link } from "react-router-dom";
import { useAuth } from "../../../ContextApi/AuthContext";

export default function HeroRentalManager({
  imageUrl,
  title,
  description,
  btntxt,
  btnlink,
}) {
  const { isLoggedIn } = useAuth();
  return (
    <div
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <h1 className="text-4xl font-bold mb-4 font-serif max-w-2xl">
          {title}
        </h1>
        <p className="max-w-xl mb-6">{description}</p>
        <Link to={btnlink}>
          {" "}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg mb-4">
            {btntxt}
          </button>
        </Link>

        {isLoggedIn ? (
          " "
        ) : (
          <p className="text-xs ">
            Already have an account?{" "}
            <strong>
              {" "}
              <Link to="/">Sign in</Link>
            </strong>
          </p>
        )}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <svg
          className="w-6 h-6 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
}
