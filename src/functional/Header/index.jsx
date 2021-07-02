import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { navMenuItems } from "../../data/MenuItems";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} sidebarMenuItems={navMenuItems} />
      <Navbar toggle={toggle} navMenuItems={navMenuItems} />
    </>
  );
};

export default Header;
