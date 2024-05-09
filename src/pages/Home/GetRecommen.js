import React from 'react';
import RecoPhot from '../../assets/images/Reccomendation.png'
import OutlinedButton from '../../components/Button/OutlinedButton';

const GetRecommendations = () => {
  return (
    <div className="flex justify-center bg-white items-center space-x-10 p-10 lg:flex-row md:flex-col sm:flex-col">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Get home recommendations</h1>
        <p className="text-zinc-600">Sign in for a more personalized experience.</p>
        <OutlinedButton>Sign in</OutlinedButton>
      </div>
      <div className="relative">
        <img src={RecoPhot} alt="House for sale" className="rounded-lg" />
        
      </div>
    </div>
  );
};

export default GetRecommendations;
