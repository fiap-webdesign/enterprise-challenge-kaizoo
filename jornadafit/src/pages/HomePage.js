import React from "react";
import Layout from "../components/Layout";
import "./HomePage.css";

export default function HomePage() {
  return (
    <Layout>
      <div className="homepage-container">
        <h1 className="greeting">Olá, Julia!</h1>

        <div className="main-section">
          <div className="avatar-card">
            <img
              src="/assets/kaizoo-cat.png"
              alt="Kaizoo"
              className="kaizoo-image"
            />
            <div className="level-info">
              <span className="level-badge">5</span>
              <div>
                <strong>Nível 5</strong>
                <p>325XP para o próximo nível!</p>
              </div>
            </div>
            <div className="button-group">
              <button className="btn btn-register">Registrar Atividade</button>
              <button className="btn btn-dark">Compartilhar</button>
            </div>
          </div>

          <div className="side-info">
            <div className="card destaque">
              <strong>Destaque do Dia</strong>
              <p>"Hoje o seu Kaizoo quer se movimentar por 15 minutos!"</p>
            </div>

            <div className="card desafio">
              <strong>Próximo Desafio</strong>
              <p>Meta: 10km corridos</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="card atividades">
              <strong>Minhas Atividades</strong>
              <div className="atividade-icons">
                <span>🏃 34min</span>
                <span>🚶 1h30min</span>
                <span>🚴 45min</span>
              </div>
            </div>

            <div className="card conquistas">
              <strong>Conquistas Recentes</strong>
              <p>Você ganhou 2 troféus!</p>
            </div>

            <div className="card amigos">
              <strong>Amigos Ativos Hoje</strong>
              <div className="avatars">{/* 4 mascotes redondos */}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
