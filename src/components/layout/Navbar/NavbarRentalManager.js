import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme/theme";
import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { Menu, Close } from "@mui/icons-material";
import { useAuth } from "../../../ContextApi/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";
import { IoChevronDown } from "react-icons/io5";
import ResNavRental from "./ResNavRental";
import { CiShare1 } from "react-icons/ci";
import userimg1 from "../../../assets/images/YourTeamLO.png";

const NavbarWrapper = styled.nav`
  position: relative;
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 90px;
  z-index: ${(props) => (props.transparent ? "999" : "1")};
  @media (max-width: ${theme.breakpoints.md}) {
    background: ${(props) =>
      props.transparent ? "transparent" : theme.colors.white};
    padding: 10px;
    height: auto;
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 35px;
  margin: 0 20px;

  @media (max-width: ${theme.breakpoints.md}) {
    position: absolute;
    left: 50%;
    top: 50%; // Center vertically within the NavbarWrapper
    transform: translate(-50%, -50%); // Adjust both horizontally and vertically
    height: 35px;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  position: relative;

  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end; // Align items to the right
    padding: 20px;
    background: ${theme.colors.white};
    width: 200px; // Set a fixed width for the sidebar
    height: 100vh;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
  display: flex;

  align-items: center;
  gap: 2;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${theme.colors.blue};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: ${(props) => (props.hideOnMobile ? "none" : "block")};
    margin-right: 0;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
    margin-right: 20px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  z-index: 100;

  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const LinkStyled = styled.span`
  color: blue;
  cursor: pointer;
`;

const SignInLink = styled(Link)`
  display: none;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    color: blue;
    position: static; // Changed from absolute to static
    margin-left: auto; // Make sure it's above other elements
  }
`;

const NavbarRentalManager = ({ logoUrl }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for dropdown
  const { logout, userid } = useAuth();
  const [userPhotoURL, setUserPhotoURL] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getUserPhotoURL = async (userId) => {
    try {
      // Reference to the user document in Firestore
      const userDocRef = doc(db, "Users", userId);

      // Get the user document
      const userDocSnapshot = await getDoc(userDocRef);

      // Check if the user document exists and contains the photoURL field
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        if (userData && userData.photoURL) {
          setUserPhotoURL(userData.photoURL);
        } else {
          console.error("User document does not contain photoURL field");
        }
      } else {
        console.error("User document does not exist");
      }
    } catch (error) {
      console.error("Error fetching user photo URL:", error);
    }
  };

  useEffect(() => {
    // Fetch user photo URL when user ID changes
    if (userid) {
      getUserPhotoURL(userid);
    }
  }, [userid]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle("no-scroll", !mobileMenuOpen);
  };

  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setMobileMenuOpen(false);
    };

    // Initial check
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <NavbarWrapper transparent={!mobileMenuOpen}>
      {mobileMenuOpen ? (
        <HamburgerIcon onClick={toggleMobileMenu}>
          <Close />
        </HamburgerIcon>
      ) : (
        <HamburgerIcon onClick={toggleMobileMenu}>
          <Menu />
        </HamburgerIcon>
      )}

      {isMobile && mobileMenuOpen && (
        <ResNavRental closeMenu={closeMobileMenu} />
      )}

      <SignInLink>
        <>
          <button
            id="dropdownUserAvatarButton"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src={userPhotoURL || userimg1}
              alt="user "
            />
          </button>

          {isDropdownOpen && (
            <div
              id="dropdownAvatar"
              className="absolute right-0 mt-5 lef-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownUserAvatarButton"
              >
                <li>
                  <Link
                    to="/accountsettings"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Account Settings
                  </Link>
                </li>
              </ul>
              <div className="py-2">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </>
      </SignInLink>

      {!mobileMenuOpen && (
        <NavList>
          <NavItem hideOnMobile>
            <Link to="/managerproperties">Properties</Link>
          </NavItem>
          <NavItem hideOnMobile>
            <Link to="/inbox">Messages</Link>
          </NavItem>
        </NavList>
      )}

      <Link to="/">
        <Logo src={logoUrl} alt="Logo" />
      </Link>

      {!mobileMenuOpen && (
        <NavList>
          <NavItem hideOnMobile>
            <Link to="/">Go to Zillow</Link>
          </NavItem>
          <NavItem onClick={toggleDropdown}>
            <LinkStyled>Help</LinkStyled>
            <IoChevronDown color="blue" className="font-bold" />
          </NavItem>
          <DropdownMenu isOpen={isOpen}>
            <ul>
              <li className="hover:text-blue-500 hover:bg-blue-50 px-3 py-2">
                <Link to="/managerRentalResources">
                  {" "}
                  <div className="flex justify-between space-x-8 items-center cursor-pointer">
                    <span className="font-semibold">Resources</span>
                    <CiShare1 color="blue" />
                  </div>
                </Link>
              </li>
              <li className="hover:text-blue-500 hover:bg-blue-50 px-3 py-2 cursor-pointer">
                <Link to="/help">
                  {" "}
                  <div className="flex space-x-8 justify-between items-center">
                    <span className="font-semibold">Help</span>
                    <CiShare1 color="blue" />
                  </div>
                </Link>
              </li>
            </ul>
          </DropdownMenu>
          <NavItem hideOnMobile>
            <Link to="#">
              <IoNotificationsOutline size={30} />
            </Link>
            <IoChevronDown color="blue" className="font-bold" />
          </NavItem>

          <NavItem hideOnMobile>
            <>
              <button
                id="dropdownUserAvatarButton"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={userPhotoURL || userimg1}
                  alt="user "
                />
              </button>
              <IoChevronDown color="blue" className="font-bold" />

              {isDropdownOpen && (
                <div
                  id="dropdownAvatar"
                  className="absolute right-0 mt-32 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUserAvatarButton"
                  >
                    <li>
                      <Link
                        to="/accountsettings"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Account Settings
                      </Link>
                    </li>
                  </ul>
                  <div className="py-2">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </>
          </NavItem>
        </NavList>
      )}
    </NavbarWrapper>
  );
};

export default NavbarRentalManager;
