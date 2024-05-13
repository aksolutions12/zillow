import React from "react";
import RecoPhot from "../../assets/images/Reccomendation.png";
import OutlinedButton from "../../components/Button/OutlinedButton";

import { theme, media } from "../../styles/theme/theme";

const GetRecommendations = () => {
  return (
    <div className="flex flex-col  lg:flex-row justify-center items-center p-10 space-x-10 bg-white">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Get home recommendations</h1>
        <p className="text-zinc-600">
          Sign in for a more personalized experience.
        </p>
        <OutlinedButton>Sign in</OutlinedButton>
      </div>
      <img
        src={RecoPhot}
        alt="House for sale"
        className="rounded-lg mt-4 lg:w-1/3 lg:h-1/2 md:h-full md:w-1/2 sm:w-full sm:h-full"
      />
    </div>
  );
};

export default GetRecommendations;
