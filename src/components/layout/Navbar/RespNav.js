import React, { useEffect } from "react";
import { ExpandLess, ExpandMore, Close } from "@mui/icons-material";
import zillog from "../../../assets/images/zil-logo.png";
import { buydropdata } from "../../../data/BuyDrop";
import { rentfropdata } from "../../../data/RentDrop";
import { selldropdata } from "../../../data/SellDrop";
import { agentdropdata } from "../../../data/AgentDrop";
import { homeloandrop } from "../../../data/HomeLoansDrop";
import { managedrops } from "../../../data/ManageDrops";

const RespNav = ({ closeMenu }) => {
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
        <NavLinkWithIcon text="Buy" dropdownData={buydropdata} />
        <NavLinkWithIcon text="Rent" dropdownData={rentfropdata} />
        <NavLinkWithIcon text="Sell" dropdownData={selldropdata} />
        <NavLinkWithIcon text="Home Loans" dropdownData={homeloandrop} />
        <NavLinkWithIcon text="Agent finder" dropdownData={agentdropdata} />
        <NavLinkWithIcon text="Manage Rentals" dropdownData={managedrops} />
        <NavLinkWithoutIcon text="Advertise" />
        <NavLinkWithoutIcon text="Help" />
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
              <h3 className="font-semibold">{item.title}</h3>
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

export default RespNav;
