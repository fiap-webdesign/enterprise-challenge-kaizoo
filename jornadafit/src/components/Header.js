import React from "react";
import "./Header.css";

export default function Header({
  onToggleSidebar,
  hideSidebarToggle,
  hideNotificationIcon,
}) {
  return (
    <header className="kaizoo-header-box">
      <div className="kaizoo-header">
        {!hideSidebarToggle && (
          <button className="hamburger-btn" onClick={onToggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
        )}
        <span className="logo">Kaizoo</span>
        {!hideNotificationIcon && (
          <i className="fas fa-bell notification-icon"></i>
        )}
      </div>
    </header>
  );
}
