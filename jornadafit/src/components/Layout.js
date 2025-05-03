import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  const toggleSidebar = () => {
    setSidebarToggled(!sidebarToggled);
  };

  return (
    <div
      id="wrapper"
      className={`d-flex ${sidebarToggled ? "sidebar-toggled" : ""}`}
    >
      <Sidebar toggled={sidebarToggled} onToggle={toggleSidebar} />

      <div id="content-wrapper" className="d-flex flex-column w-100">
        <div id="content">
          <Header />
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </div>
  );
}
