import React from "react";
import Layout from "../components/Layout";
import "./HomePage.css";

export default function HomePage() {
  return (
    <Layout>
      <h1>Olá, usuário</h1>

      <div className="kaizoo-section">
        <div className="kaizoo-avatar">[Kaizoo animado]</div>
        <div className="actions">
          <button>Iniciar Atividade</button>
          <button>Cuidar do seu Kaizoo</button>
          <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
        </div>
      </div>

      <div className="info-section">
        <div className="card destaque">Destaque do Dia</div>
        <div className="card desafio">Próximo Desafio</div>
        <div className="card atividades">Minhas Atividades</div>
        <div className="card conquistas">Conquistas Recentes</div>
        <div className="card amigos">Amigos ativos hoje</div>
      </div>
    </Layout>
  );
}
