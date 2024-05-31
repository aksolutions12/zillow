import React from "react";

const StrongResults = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col gap-2 p-5 w-full">
        <div className="lg:w-3/5 md:w-full sm:w-full">
          {" "}
          {/* Adjusted width */}
          <iframe
            className="mx-auto w-full lg:max-w-3xl h-64 sm:h-96 rounded-lg shadow-xl lg:w-5/6" // Adjusted width
            src="https://www.youtube.com/embed/PF2nDmEu9nw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-2/6 ">
          <div>
            <h2 className="text-2xl font-bold  mb-4">Strong Results</h2>
            <p className="text-lg ">
              Not only is it entertaining, but it also produces results.
              Pop-Tarts/Kellogg’s Custom Home Listing won a 2023 Digiday Content
              Marketing Award for Best use of Native Advertising/Sponsored
              Content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrongResults;
