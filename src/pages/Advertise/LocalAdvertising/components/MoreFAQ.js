import React from "react";

const MoreFAQ = ({ title, linkText, linkUrl }) => {
  return (
    <div className="bg-blue-100 text-center py-12">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>
      <p className="text-blue-700">
        We've got answers! Check out our{" "}
        <a href={linkUrl} className="underline text-blue-700">
          {linkText}
        </a>{" "}
        page for more helpful information.
      </p>
    </div>
  );
};

export default MoreFAQ;
