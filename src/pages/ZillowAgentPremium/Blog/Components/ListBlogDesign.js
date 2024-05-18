import React from "react";
import BlogLayout from "./BlogLayout";
import { blogsData } from "./blogsData";

const ListBlogDesign = () => {
  return (
    <BlogLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white ">
        {blogsData.map((blog, index) => (
          <div
            key={blog.id}
            className={`${
              index === 0 ? "md:col-span-2" : "md:col-span-1"
            } bg-white dark:bg-zinc-700 shadow-md rounded-lg overflow-hidden mb-6 hover:border-blue-500 hover:shadow-lg border border-gray-200 transition-all cursor-pointer`}
          >
            <img src={blog.imageUrl} alt={blog.title} className="w-full" />
            <div className="p-4">
              <div className="text-xs uppercase text-blue-500 dark:text-blue-400 font-semibold tracking-wide">
                {blog.category}
              </div>
              <h2 className="font-bold text-lg mt-2">{blog.title}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
                {blog.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-zinc-500 dark:text-zinc-300 text-xs">
                  {blog.date}
                </span>
                {blog.featured && (
                  <span className="text-xs text-white bg-blue-500 rounded-full px-2 py-1">
                    FEATURED
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BlogLayout>
  );
};

export default ListBlogDesign;
