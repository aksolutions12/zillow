import React from "react";
import footerimg from "../../../assets/images/footer-art.svg";
import homeloanslog from "../../../assets/images/zhl-logo-default.png";
import { FaHome } from "react-icons/fa";

const FooterLoans = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 py-8">
        {/* Column 1 */}
        <div className="mb-4">
          <ul>
            <li className="p-2">
              <a href="#" className="text-blue-500  hover:text-blue-900">
                Terms of use
              </a>
            </li>
            <li className="p-2">
              <a href="#" className="text-blue-500 hover:text-blue-900">
                Privacy policy
              </a>
            </li>
            <li className="p-2">
              <a href="#" className="text-blue-500 hover:text-blue-900">
                Licensing info
              </a>
            </li>
            <li className="p-2">
              <a href="#" className="text-blue-500 hover:text-blue-900">
                Cookie preference
              </a>
            </li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className="mb-4">
          <img src={homeloanslog} alt="Home loan logo" className="w-36" />
          <p className="text-sm mb-2">
            2600 Michelson Drive, Suite 1201
            <br />
            Irvine, CA 92612
          </p>
          <p className="text-sm mb-2">Phone: 888-852-2212</p>
          <p>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Submit concerns or questions through our contact form.
            </a>
          </p>
        </div>

        {/* Column 4 */}
        <div className="mb-4">
          <div className="flex flex-row">
            <FaHome size={60} />
            <div className="pl-4">
              <p className="text-xs ">© Zillow Home Loans, LLC</p>
              <p className="text-xs ">An Equal Housing Lender</p>
              <p className="text-xs ">NMLS ID#: 10287</p>
              <p>
                <a
                  href="https://www.nmlsconsumeraccess.org"
                  className="text-blue-500 hover:text-blue-700"
                >
                  www.nmlsconsumeraccess.org
                </a>
              </p>
            </div>
          </div>
          <p className="text-xs mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            malesuada urna in sem volutpat, at placerat lorem aliquam. Nullam
            euismod nibh at augue rhoncus bibendum.
          </p>
        </div>
      </div>
      {/* Photo */}
      <img src={footerimg} alt="Footer Photo" className="w-full" />
    </div>
  );
};

export default FooterLoans;
