import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon, Nav,
  NavbarContainer, NavItem, NavLinkR, NavLinkS, NavLogo, NavMenu
} from "./NavbarElements";

const Navbar = ({ toggle, navMenuItems }) => {
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
    setTimeout(function () {
      setShouldShowActions(true);
    }, 500);
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
      <Nav scrollNav={scrollNav} shouldShowActions={shouldShowActions} id='navbar'>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {navBarText}
            <i className="fab fa-typo3" style={{ marginLeft: 0.5 + 'em' }} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {
              navMenuItems.map(navMenuItem => {
                if (navMenuItem.routeType === "R") {
                  return (
                    < NavItem >
                      <NavLinkR to={navMenuItem.route}
                        onSetActive={toggleClickedAutoScroll}>
                        {navMenuItem.title}
                      </NavLinkR>
                    </NavItem>
                  );
                } else {
                  return (
                    < NavItem >
                      <NavLinkS to={navMenuItem.route}
                        onSetActive={toggleClickedAutoScroll}>
                        {navMenuItem.title}
                      </NavLinkS>
                    </NavItem>
                  );
                }
              })
            }
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
