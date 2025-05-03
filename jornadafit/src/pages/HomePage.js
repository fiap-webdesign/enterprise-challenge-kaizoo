// src/pages/HomePage.js
import React from "react";
import Sidebar from "../components/Sidebar";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <Sidebar />
      <main className="main-content">
        <h1>Olá, usuário</h1>
        <div className="kaizoo-section">
          <div className="kaizoo-avatar">[Kaizoo animado]</div>
          <div className="actions">
            <button>Iniciar Atividade</button>
            <button>Cuidar do seu Kaizoo</button>
          </div>
        </div>

        <div className="info-section">
          <div className="card destaque">Destaque do Dia</div>
          <div className="card desafio">Próximo Desafio</div>
          <div className="card atividades">Minhas Atividades</div>
          <div className="card conquistas">Conquistas Recentes</div>
          <div className="card amigos">Amigos ativos hoje</div>
        </div>
      </main>
    </div>
  );
}
