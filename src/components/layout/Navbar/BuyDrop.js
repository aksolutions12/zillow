import React from "react";

const BuyDrop = ({ headings }) => {
  return (
    <div className="bg-white">
      <hr className="border" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-row gap-16">
          {headings.map((heading, index) => (
            <div key={index}>
              <div className="flex flex-row bg-transparent ">
                {heading.logimg && (
                  <img
                    src={heading.logimg}
                    alt="img"
                    className="w-10 h-10 mr-3"
                  />
                )}
                <div>
                  <h2 className="font-semibold text-sm mb-4">
                    {heading.title}
                  </h2>

                  <div className={heading.subpartsClass}>
                    {heading.subparts.map((subpart, subIndex) => (
                      <a
                        key={subIndex}
                        href={subpart.link}
                        className="text-blue-600 text-sm hover:text-blue-800"
                      >
                        {subpart.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyDrop;
