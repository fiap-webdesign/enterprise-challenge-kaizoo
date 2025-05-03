import React from "react";

export default function Header({ onToggle }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Botão hamburguer que chama o toggle */}
      <button
        id="sidebarToggle"
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={onToggle}
      >
        <i className="fa fa-bars"></i>
      </button>
      <h5 className="ml-3 mt-2">Olá, usuário</h5>
    </nav>
  );
}
