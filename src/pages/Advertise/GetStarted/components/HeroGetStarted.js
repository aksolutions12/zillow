import SelfServiceCard from "./SelfServiceCard";
import NationalAdvertising from "./NationalAdvertising";
import porch from "../../../../assets/images/womenonporch.jpg";
const HeroGetStarted = () => {
  return (
    <div className="relative bg-dark bg-cover bg-center py-20">
      <div className="flex flex-col items-center gap-3 py-5 px-2 text-center">
        <h1 className="font-bold text-4xl text-white">
          Become An Advertising Partner
        </h1>
        <p className="text-base text-white ">
          Choose an advertising option that fits your needs below to get
          started.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row   gap-8">
          <div className="w-full lg:w-1/2">
            <SelfServiceCard />
          </div>
          <div className="w-full lg:w-1/2">
            <NationalAdvertising />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGetStarted;
