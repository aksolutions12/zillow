import React from "react";

function HeroText({ title }) {
  return (
    <div className="flex flex-col items-center justify-center  py-32 bg-zinc-100 dark:bg-zinc-900">
      <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-center px-2">
        {title}
      </h1>
      <div className="w-64 mt-4 border-t-2 border-yellow-300"></div>
    </div>
  );
}

export default HeroText;
