import React, { useState, useRef } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme/theme";
import { Link } from "react-router-dom";
import DropNav from "./DropNav";

const NavbarWrapper = styled.nav`
  position: relative;
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 90px;

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 35px;
  margin: 0 20px;

  @media (max-width: ${theme.breakpoints.md}) {
    margin: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 20px;
  position: relative;
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

const DropNavWrapper = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 999;
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray}; /* Adjust the color as needed */
`;

const Navbar = ({ logoUrl }) => {
  const [showDropNav, setShowDropNav] = useState(false);
  const dropNavRef = useRef(null);

  const toggleHamburger = () => {
    setShowDropNav(!showDropNav);
  };

  const handleMouseEnter = () => {
    setShowDropNav(true);
  };

  const handleMouseLeave = () => {
    setShowDropNav(false);
  };

  return (
    <NavbarWrapper>
      <NavList onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NavItem hideOnMobile>Buy</NavItem>
        <NavItem hideOnMobile>Rent</NavItem>
        <NavItem hideOnMobile>Sell</NavItem>
        <NavItem hideOnMobile>
          <Link to="/homeloans">Home Loans</Link>
        </NavItem>
        <NavItem hideOnMobile>
          <Link to="/agentFinder/agents">Agent Finder</Link>
        </NavItem>
      </NavList>
      <Link to="/">
        <Logo src={logoUrl} alt="Logo" />
      </Link>

      <NavList>
        <NavItem hideOnMobile>Manage Rentals</NavItem>
        <NavItem hideOnMobiles>
          <Link to="/advertise">Advertise</Link>
        </NavItem>
        <NavItem hideOnMobile>
          <Link to="/help">Help</Link>
        </NavItem>
        <NavItem hideOnMobile>SignUp</NavItem>
      </NavList>

      <HamburgerIcon onClick={toggleHamburger}>
        {showDropNav ? "✕" : "☰"}
      </HamburgerIcon>

      {/* Render DropNav component and horizontal line outside of Navbar */}
      {showDropNav && (
        <>
          <DropNavWrapper ref={dropNavRef}>
            <DropNav />
          </DropNavWrapper>
          <HorizontalLine />
        </>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
