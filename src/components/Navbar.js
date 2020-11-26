import React, { useContext } from "react";

import PageLinks from "../constants/links";
import { SidebarContext } from "../context/sidebar";

import logo from "../assets/profile.png";

const Navbar = () => {
  const { closeSidebar, toggleSidebar, state } = useContext(SidebarContext);

  const menu = state.showLinks ? "nav-open" : "";

  return (
    <>
      <button className="btn-nav" onClick={toggleSidebar}>
        <span className={`hamburger ${menu}`}>&nbsp;</span>
      </button>
      <nav className="navbar">
        <div className="nav-center">
          <img src={logo} alt="logo" />
          <PageLinks styleClass="nav-links" onClick={closeSidebar}></PageLinks>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
