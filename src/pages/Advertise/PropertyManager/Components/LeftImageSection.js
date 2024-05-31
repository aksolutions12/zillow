import { Link } from "react-router-dom";

export default function LeftImageSection({
  imageUrl,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 gap-2 ">
      {/* Image */}
      <div className="w-full lg:w-1/2">
        {" "}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="rounded-lg  w-full   mb-4 "
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="sm:text-center lg:text-start">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">{description}</p>
          <Link
            to={buttonLink}
            className="mt-10 px-8 py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
