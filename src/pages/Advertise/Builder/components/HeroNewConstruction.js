import AttractForm from "./AttractForm";
import img from "../../../../assets/images/marketingtuig-87223.jpg";

export default function HeroNewConstruction() {
  return (
    <div
      className="bg-gray-100 py-8 px-4 lg:flex justify-center items-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:w-1/2 ">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 pl-5">
          New Construction & Home Builder Advertising
        </h1>
        <p className="text-base text-white mb-8 pl-5">
          Reach more buyers on the nation’s largest online real estate network.*
        </p>
      </div>
      <div className="lg:w-1/2">
        <AttractForm heading={"ATTRACT MORE BUYERS"} />
      </div>
    </div>
  );
}
