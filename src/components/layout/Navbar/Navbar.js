import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { theme } from "../../../styles/theme/theme";
import { Link } from "react-router-dom";
import BuyDrop from "./BuyDrop";
import ManagerRentalDrop from "./ManagerRentalDrop"; // Import ManagerRentalDrop component
import { buydropdata } from "../../../data/BuyDrop";
import { rentfropdata } from "../../../data/RentDrop";
import { selldropdata } from "../../../data/SellDrop";
import { agentdropdata } from "../../../data/AgentDrop";
import { homeloandrop } from "../../../data/HomeLoansDrop";
import { Menu, Close } from "@mui/icons-material"; // Importing icons from MUI
import RespNav from "./RespNav";
import LoginSignUp from "../../Login/LoginSignUp";
import { useAuth } from "../../../ContextApi/AuthContext";

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

const BuyDropWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${theme.colors.white};
  z-index: 999;

  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${theme.colors.white};
    z-index: 999;
    overflow-y: auto;
    padding: 20px;
  }
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

const Navbar = ({ logoUrl }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const handleSignInClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle("no-scroll", !mobileMenuOpen);
  };

  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
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
      {mobileMenuOpen && (
        <HamburgerIcon onClick={toggleMobileMenu}>
          <Close />
        </HamburgerIcon>
      )}
      {!mobileMenuOpen && (
        <HamburgerIcon onClick={toggleMobileMenu}>
          <Menu />
        </HamburgerIcon>
      )}

      {isMobile && mobileMenuOpen && <RespNav closeMenu={closeMobileMenu} />}
      <SignInLink onClick={handleSignInClick}>Sign in</SignInLink>

      {isModalOpen && <LoginSignUp onClose={handleCloseModal} />}

      {!mobileMenuOpen && (
        <NavList>
          <NavItem hideOnMobile onMouseEnter={() => handleDropdownHover("buy")}>
            <Link to="/buyhome">Buy</Link>
          </NavItem>
          <NavItem
            hideOnMobile
            onMouseEnter={() => handleDropdownHover("rent")}
          >
            <Link to="/forrent">Rent</Link>
          </NavItem>
          <NavItem
            hideOnMobile
            onMouseEnter={() => handleDropdownHover("sell")}
          >
            <Link to="/sell">Sell</Link>
          </NavItem>
          <NavItem
            hideOnMobile
            onMouseEnter={() => handleDropdownHover("homeloan")}
          >
            <Link to="/homeloans">Home Loans</Link>
          </NavItem>
          <NavItem
            hideOnMobile
            onMouseEnter={() => handleDropdownHover("agent")}
          >
            <Link to="/agentFinder/agents">Agent Finder</Link>
          </NavItem>
        </NavList>
      )}

      <Link to="/">
        <Logo src={logoUrl} alt="Logo" />
      </Link>

      {!mobileMenuOpen && (
        <NavList>
          <NavItem
            hideOnMobile
            onMouseOver={() => handleDropdownHover("manage")}
            onMouseLeave={handleDropdownLeave}
          >
            <Link to="/zillowrentalManager">Manage Rentals</Link>
          </NavItem>
          <NavItem hideOnMobile>
            <Link to="/advertise">Advertise</Link>
          </NavItem>
          <NavItem hideOnMobile>
            <Link to="/help">Help</Link>
          </NavItem>
          <NavItem
            hideOnMobile
            onClick={isLoggedIn ? handleLogout : handleSignInClick}
          >
            {isLoggedIn ? "Logout" : "Sign in"}
          </NavItem>
        </NavList>
      )}

      {activeDropdown === "manage" && !mobileMenuOpen && <ManagerRentalDrop />}

      {activeDropdown && !mobileMenuOpen && activeDropdown !== "manage" && (
        <BuyDropWrapper
          onMouseEnter={() => handleDropdownHover(activeDropdown)}
          onMouseLeave={handleDropdownLeave}
        >
          <BuyDrop headings={getDropdownData(activeDropdown)} />
        </BuyDropWrapper>
      )}
    </NavbarWrapper>
  );
};

const getDropdownData = (activeDropdown) => {
  switch (activeDropdown) {
    case "buy":
      return buydropdata;
    case "rent":
      return rentfropdata;
    case "sell":
      return selldropdata;
    case "agent":
      return agentdropdata;
    case "homeloan":
      return homeloandrop;
    default:
      return [];
  }
};

export default Navbar;
