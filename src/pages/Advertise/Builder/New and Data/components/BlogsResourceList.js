import React from "react";
import BuilderDataList from "./BuilderDataList";

function BlogsResourceList({ dataList, imageUrls }) {
  return (
    <div className="w-full mx-auto space-y-8 p-4 md:flex">
      <div className="w-full md:w-9/12 md:mr-4">
        <BuilderDataList dataList={dataList} />
      </div>
      <div className="w-full md:w-3/12">
        <div className="flex flex-col ">
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt="Blog Image"
              className="w-full  mb-4 md:mb-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsResourceList;
