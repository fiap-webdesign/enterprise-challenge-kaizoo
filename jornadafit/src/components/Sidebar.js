// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>🏠 Início</li>
          <li>▶️ Iniciar Atividade</li>
          <li>📋 Desafios</li>
          <li>📈 Progresso</li>
          <li>💬 Comunidade</li>
          <li>🐾 Mascote</li>
          <li>⚙️ Configurações</li>
        </ul>
      </nav>
    </aside>
  );
}
