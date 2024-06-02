import React from "react";

function BuilderDataList({ dataList }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {dataList.map((item, index) => (
        <div
          key={index}
          className={`bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden${
            index === 0 ? "" : " flex flex-col md:flex-row"
          }`}
        >
          {index === 0 && (
            <img src={item.imageUrl} alt="Article Image" className="w-full" />
          )}
          <div className="p-6 flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                FEATURED
              </span>
              <span className="text-zinc-600 dark:text-zinc-400 text-xs font-medium">
                {item.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">
              {item.title}
            </h2>
            {index !== 0 && (
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {item.description}
              </p>
            )}
            <div className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 text-sm">
              <img
                src={item.authorImage}
                alt="Author Image"
                className="w-8 h-8 rounded-full"
              />
              <span>{item.author}</span>
              <span>•</span>
              <span>{item.date}</span>
            </div>
          </div>
          {index !== 0 && (
            <img
              src={item.imageUrl}
              alt="Article Image"
              className="w-full md:w-1/3 object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default BuilderDataList;
