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
          <button
            className="hamburger-btn"
            onClick={onToggleSidebar}
            aria-label="Abrir menu lateral"
            title="Abrir menu lateral"
          >
            <i className="fas fa-bars"></i>
          </button>
        )}
        <span className="logo">Kaizoo</span>
        {!hideNotificationIcon && (
          <i
            className="fas fa-bell notification-icon"
            role="button"
            aria-label="Abrir notificações"
            title="Notificações"
          />
        )}
      </div>
    </header>
  );
}
