import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [navBarText, setNavBarText] = useState('My Portfolio');
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= document.getElementById('home').clientHeight - 80) {
      setScrollNav(true);
      setNavBarText('Ronit Pradhan');
    } else {
      setScrollNav(false);
      setNavBarText('My Portfolio');
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => scroll.scrollToTop();

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {navBarText}
            <i class="fab fa-typo3" style={{ marginLeft: 0.5 + 'em' }} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about-me"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >Experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
