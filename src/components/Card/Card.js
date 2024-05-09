import React from 'react';
import OutlinedButton from '../Button/OutlinedButton';


const Card = ({ imageUrl, heading, paragraph, buttonText }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col justify-between items-center" style={{height: "480px", borderRadius: "20px"}}>
      <img src={imageUrl} alt="Illustration" className="w-36 mb-4 h-36" />
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-zinc-900 font-open-sans">{heading}</h2>
        <p className="mt-4 text-zinc-600">{paragraph}</p>
      </div>
      <OutlinedButton> {buttonText}</OutlinedButton> 
    </div>
  );
};

export default Card;
