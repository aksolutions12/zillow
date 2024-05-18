import React from "react";

const Card3 = ({ imageSrc, title, content }) => {
  return (
    <div className="bg-transparent text-center p-6 rounded-lg">
      <img src={imageSrc} alt="Image" className="w-56 h-52 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-base font-light">{content}</p>
    </div>
  );
};

export default Card3;
