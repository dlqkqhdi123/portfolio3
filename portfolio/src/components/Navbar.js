import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import logo from "../assets/img/lg.jpg";

const NavbarContainer = styled.nav`
  background: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(10, 25, 47, 0.85)"};
  color: ${({ scrolled }) => (scrolled ? "#000" : "#64ffda")};
  padding: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.5s ease, color 0.5s ease;
  backdrop-filter: blur(10px);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Logo = styled.img`
  height: 40px; /* Adjust this value as needed */
  margin-right: 10px; /* Space between logo and title */
`;

const Title = styled.h1`
  font-size: 1em; /* Smaller font size */
  color: ${({ scrolled }) => (scrolled ? "#000" : "#64ffda")};
  margin: 0; /* Remove default margin */
  text-align: left; /* Left align the text */
  line-height: 1.2; /* Adjust line height for better spacing */
`;

const NavItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;

const NavItem = styled(Link)`
  color: ${({ scrolled }) => (scrolled ? "#000" : "#64ffda")};
  cursor: pointer;
  text-decoration: none;
  margin-right: 100px;
  font-size: 1.2em;
  transition: color 0.3s;

  &:hover {
    color: ${({ scrolled }) => (scrolled ? "#555" : "#ffffff")};
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
        <Title scrolled={scrolled}>
          Geon's <br /> Portfolio
        </Title>
      </LogoContainer>
      <NavItems>
        <NavItem to="about" smooth={true} duration={800} scrolled={scrolled}>
          About
        </NavItem>
        <NavItem to="projects" smooth={true} duration={800} scrolled={scrolled}>
          Projects
        </NavItem>
        <NavItem to="contact" smooth={true} duration={800} scrolled={scrolled}>
          Contact
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
