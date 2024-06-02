import { IoIosPlay } from "react-icons/io";

export default function HeroReconnect(props) {
  const {
    backgroundImage,
    title,
    description,
    advertiseButtonLabel,
    playButtonLabel,
    signInText,
  } = props;

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold font-serif mb-4">
          {title}
        </h1>
        <p className="text-white text-base md:text-base lg:text-base mb-8 max-w-2xl">
          {description}
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold">
            {advertiseButtonLabel}
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg text-base font-semibold flex items-center">
            <IoIosPlay />
            {playButtonLabel}
          </button>
        </div>
        <p className="text-white mt-8">{signInText}</p>
      </div>
    </div>
  );
}
