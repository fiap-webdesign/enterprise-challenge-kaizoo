import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ state }) {
  const isCollapsed = state === "collapsed";
  const navigate = useNavigate();

  const handleLogout = () => {
    // Opcional: limpar dados do usuário
    localStorage.removeItem("usuario");

    // Redireciona para a página de login
    navigate("/");
  };

  return (
    <aside className={`kaizoo-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <nav className="sidebar-nav">
        <Link to="/home" className="nav-item">
          <i className="fas fa-home"></i>
          {!isCollapsed && <span>Início</span>}
        </Link>
        <Link to="/atividade" className="nav-item">
          <i className="fas fa-play-circle"></i>
          {!isCollapsed && <span>Iniciar Atividade</span>}
        </Link>
        <Link to="/desafios" className="nav-item">
          <i className="fas fa-trophy"></i>
          {!isCollapsed && <span>Desafios</span>}
        </Link>
        <Link to="/progresso" className="nav-item">
          <i className="fas fa-chart-line"></i>
          {!isCollapsed && <span>Progresso</span>}
        </Link>
        <Link to="/comunidade" className="nav-item">
          <i className="fas fa-users"></i>
          {!isCollapsed && <span>Comunidade</span>}
        </Link>
        <Link to="/mascotes" className="nav-item">
          <i className="fas fa-paw"></i>
          {!isCollapsed && <span>Mascotes</span>}
        </Link>
        <Link to="/perfil" className="nav-item">
          <i className="fas fa-user"></i>
          {!isCollapsed && <span>Perfil</span>}
        </Link>
        <Link to="/configuracoes" className="nav-item">
          <i className="fas fa-cog"></i>
          {!isCollapsed && <span>Configurações</span>}
        </Link>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </aside>
  );
}
