import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <body className="bg-white p-4 dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto">{children}</div>
    </body>
  );
};

export default BlogLayout;

// Now you can continue with the rest of your code below this export statement.
