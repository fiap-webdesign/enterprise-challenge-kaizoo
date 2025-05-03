import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ toggled, onToggle }) {
  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
        toggled ? "toggled" : ""
      }`}
      id="accordionSidebar"
    >
      {/* Logo/Marca */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-heartbeat"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Kaizoo</div>
      </a>

      <hr className="sidebar-divider my-0" />

      {/* Itens de menu */}
      <li className="nav-item">
        <Link to="/" className="nav-link">
          <i className="fas fa-home"></i>
          <span>Início</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/desafios" className="nav-link">
          <i className="fas fa-tasks"></i>
          <span>Desafios</span>
        </Link>
      </li>

      {/* Mais itens... */}

      <hr className="sidebar-divider d-none d-md-block" />

      {/* Botão de colapsar igual ao SB Admin */}
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={onToggle}
        ></button>
      </div>
    </ul>
  );
}
