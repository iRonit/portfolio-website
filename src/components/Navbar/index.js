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
  NavLinks,
  NavLinksR
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [navBarText, setNavBarText] = useState('My Portfolio');
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (document.getElementById('home') != null) {
      if (window.scrollY >= document.getElementById('home').clientHeight - 80) {
        setScrollNav(true);
        setNavBarText('Ronit Pradhan');
      } else {
        setScrollNav(false);
        setNavBarText('My Portfolio');
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => scroll.scrollToTop();

  // Scroll Up Disappear
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(true);
  const toggleClickedAutoScroll = () => {
    setShouldShowActions(true);
  }
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos + 1;
      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);


  return (
    <>
      <Nav scrollNav={scrollNav} shouldShowActions={shouldShowActions}>
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
                onSetActive={toggleClickedAutoScroll}
              >About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services"
                onSetActive={toggleClickedAutoScroll}
              >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="experience"
                onSetActive={toggleClickedAutoScroll}
              >Experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksR to="/contact"
              >Contact</NavLinksR>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
