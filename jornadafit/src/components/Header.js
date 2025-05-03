import React from "react";
import "./Header.css";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="kaizoo-header-box">
      <div className="kaizoo-header">
        {/* Botão hambúrguer visível só em telas pequenas */}
        <button className="hamburger-btn" onClick={onToggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>

        <span className="logo">Kaizoo</span>

        <i className="fas fa-bell notification-icon"></i>
      </div>
    </header>
  );
}
