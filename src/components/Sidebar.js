import React, { useContext } from "react";

import { SidebarContext } from "../context/sidebar";
import SocialLinks from "../constants/socialLinks";
import PageLinks from "../constants/links";

const Sidebar = () => {
  const { closeSidebar, state } = useContext(SidebarContext);

  return (
    <aside className={`sidebar ${state.showLinks ? "show-sidebar" : ""} `}>
      <div
        className="side-container"
        onClick={closeSidebar}
        onKeyDown={closeSidebar}
        role="button"
        tabIndex="0"
      >
        <PageLinks styleClass={`${state.showLinks ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${state.showLinks ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  );
};

export default Sidebar;
