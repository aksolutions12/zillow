import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import zillog from "../../../assets/images/zil-logo.png";

export default function ZillowPremiumFooter() {
  const [facebookColor, setFacebookColor] = useState("gray");
  const [twitterColor, setTwitterColor] = useState("gray");
  const [instagramColor, setInstagramColor] = useState("gray");
  const [linkedinColor, setLinkedinColor] = useState("gray");

  const handleFacebookHover = () => {
    setFacebookColor("blue");
  };

  const handleFacebookLeave = () => {
    setFacebookColor("gray");
  };

  const handleTwitterHover = () => {
    setTwitterColor("blue");
  };

  const handleTwitterLeave = () => {
    setTwitterColor("gray");
  };

  const handleInstagramHover = () => {
    setInstagramColor("blue");
  };

  const handleInstagramLeave = () => {
    setInstagramColor("gray");
  };

  const handleLinkedinHover = () => {
    setLinkedinColor("blue");
  };

  const handleLinkedinLeave = () => {
    setLinkedinColor("gray");
  };

  return (
    <footer className="bg-white">
      <div className="container mx-auto py-8 lg:flex lg:flex-col lg:justify-between lg:items-center">
        <div className="flex flex-col lg:flex-row items-center lg:gap-40 sm:gap-10">
          <div className="flex justify-center lg:w-1/3 ">
            <img src={zillog} alt="Logo" className="h-8 w-32" />
          </div>

          <div className="flex flex-col lg:flex-row lg:ml-8">
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">Products</h3>
              <ul>
                <li className="mb-2 text-base">Advertising</li>
                <li className="mb-2 text-base">My Agent</li>
                <li className="mb-2 text-base">Agent Account</li>
                <li className="mb-2 text-base">CRM</li>
                <li className="mb-2 text-base">App</li>
                <li className="mb-2 text-base">Teams</li>
                <li className="mb-2 text-base">3D Home</li>
                <li className="mb-2 text-base">Home Tour Highlights</li>
              </ul>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">Resources</h3>
              <ul>
                <li className="mb-2 text-base">Agent Toolkit</li>
                <li className="mb-2 text-base">Blog</li>
                <li className="mb-2 text-base">Training</li>
                <li className="mb-2 text-base">Webinars</li>
                <li className="mb-2 text-base">Events</li>
              </ul>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">Other</h3>
              <ul>
                <li className="mb-2 text-base">FAQs</li>
                <li className="mb-2 text-base">Contact us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row lg:items-center sm:flex-col md:flex-col sm:items-center sm:justify-center lg:justify-center border-t-2 lg:border-none mt-8 lg:mt-0">
          <div className="flex space-x-4 p-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleFacebookHover}
              onMouseLeave={handleFacebookLeave}
            >
              <FaFacebook size={24} color={facebookColor} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleTwitterHover}
              onMouseLeave={handleTwitterLeave}
            >
              <FaTwitter size={24} color={twitterColor} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleInstagramHover}
              onMouseLeave={handleInstagramLeave}
            >
              <FaInstagram size={24} color={instagramColor} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleLinkedinHover}
              onMouseLeave={handleLinkedinLeave}
            >
              <FaLinkedin size={24} color={linkedinColor} />
            </a>
          </div>

          <div className="p-5 text-center lg:text-left">
            <div className="text-sm">
              <a href="#" className="hover:underline hover:text-blue-700">
                Cookie Preference
              </a>
            </div>
            <div className="text-sm">
              © 2024 Zillow Group, Inc. and its subsidiaries. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
