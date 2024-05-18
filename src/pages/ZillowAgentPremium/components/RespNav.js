import React, { useEffect } from "react";
import { ExpandLess, ExpandMore, Close } from "@mui/icons-material";
import OutlinedButton from "../../../components/Button/OutlinedButton";

const RespNav = ({ closeMenu }) => {
  // Dropdown data for Solutions
  const solutionData = [
    { title: "Agent Solution", link: "#" },
    { title: "Team Solution", link: "#" },
    { title: "Broker Solution", link: "#" },
  ];

  // Dropdown data for Resources
  const resourcesData = [
    { title: "Blog", link: "/agentResources/blog" },
    { title: "Agent Toolkit", link: "#" },
    { title: "All Resources ", link: "#" },
  ];

  // Dropdown data for Training
  const trainingData = [
    { title: "Webinars", link: "#" },
    { title: "Courses", link: "#" },
    { title: "Events", link: "#" },
  ];

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
        <div className="text-xl font-bold text-black">Zillow PREMIER AGENT</div>{" "}
        {/* Logo replaced with text */}
        <button
          className="text-blue-600 focus:outline-none"
          onClick={closeMenu}
        >
          <Close />
        </button>
      </div>
      <div className="flex flex-col py-4">
        {/* Navigation links with dropdowns */}
        <NavLinkWithIcon text="Solutions" dropdownData={solutionData} />
        <NavLinkWithIcon text="Resources" dropdownData={resourcesData} />
        <NavLinkWithIcon text="Training" dropdownData={trainingData} />
        {/* Join now, sign up, and contact us buttons */}
        <div className="flex flex-col mt-4 p-4">
          <OutlinedButton className="mb-3">Join Now</OutlinedButton>
          <OutlinedButton className="mb-3">Sign Up</OutlinedButton>
          <button className="py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
            Contact Us
          </button>
        </div>
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
        className="flex items-center py-2 px-4 text-black text-xl justify-between"
        onClick={toggleExpanded}
      >
        <span>{text}</span>
        {expanded ? (
          <ExpandLess className="text-blue-600" />
        ) : (
          <ExpandMore className="text-blue-600" />
        )}
      </a>
      {expanded && (
        <div className="pl-4 bg-white max-h-60 overflow-y-auto">
          {dropdownData.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold">{item.title}</h3>
              <div className=" flex flex-col pl-5">
                <a
                  key={index}
                  href={item.link}
                  className="text-blue-600 text-base  hover:text-blue-900 hover:underline"
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RespNav;
