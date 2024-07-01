import React, { useEffect } from "react";
import { ExpandLess, ExpandMore, Close } from "@mui/icons-material";
import zillog from "../../../assets/images/zil-logo.png";

export const helpdata = [
  {
    subparts: [
      { name: "Resources", link: "/Homesforsale" },
      { name: "Help", link: "/Newconstruction" },
    ],
  },
];

const ResNavRental = ({ closeMenu }) => {
  useEffect(() => {
    // Disable scrolling when RespNav is open
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when RespNav is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-white shadow-lg lg:w-64 fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-between p-4 border-b">
        <button
          className="text-blue-600 focus:outline-none"
          onClick={closeMenu}
        >
          <Close />
        </button>
        <img src={zillog} alt="Logo" className="h-8 w-28" />
      </div>
      <div className="flex flex-col py-4">
        <NavLinkWithoutIcon text="Properties" />
        <NavLinkWithoutIcon text="Messages" />
        <NavLinkWithIcon text="Help" dropdownData={helpdata} />
        <NavLinkWithoutIcon text="Go to Zillow" />
      </div>
    </div>
  );
};

const NavLinkWithIcon = ({ text, dropdownData }) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <a
        href="#"
        className="flex items-center py-2 px-4 hover:bg-zinc-100"
        onClick={toggleExpanded}
      >
        <span className="mr-auto">{text}</span>
        {expanded ? (
          <ExpandLess className="text-blue-600" />
        ) : (
          <ExpandMore className="text-blue-600" />
        )}
      </a>
      {expanded && (
        <div className="p-10 bg-gray-50 max-h-60 overflow-y-auto">
          {dropdownData.map((item, index) => (
            <div key={index} className="">
              <div className="pt-2 flex flex-col">
                {item.subparts.map((subpart, subIndex) => (
                  <a
                    key={subIndex}
                    href={subpart.link}
                    className="text-blue-600 text-base p-1 hover:text-blue-900 hover:underline"
                  >
                    {subpart.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const NavLinkWithoutIcon = ({ text }) => {
  return (
    <div>
      <a href="#" className="flex items-center py-2 px-4 hover:bg-zinc-100">
        <span className="mr-auto">{text}</span>
      </a>
    </div>
  );
};

export default ResNavRental;
