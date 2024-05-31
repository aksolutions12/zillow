import { Link } from "react-router-dom";
import OulinedButton from "../../../../components/Button/OutlinedButton";

export default function LeftImgDb({
  imageUrl,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
  paragraph,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 gap-2 bg-gray-200 ">
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
          <h2 className="text-4xl font-bold mb-2">{title}</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">{description}</p>
          <Link to={buttonLink}>
            <OulinedButton>{buttonText}</OulinedButton>
          </Link>
          <p className="text-sm italic mt-2">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
