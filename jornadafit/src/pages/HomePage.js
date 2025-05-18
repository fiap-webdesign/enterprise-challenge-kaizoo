import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "./HomePage.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import KaizooCard from "../components/KaizooCard";
import KaizooButton from "../components/KaizooButton";

import personIcon from "../img/personIcon.png";
import walkIcon from "../img/walkIcon.png";
import bikeIcon from "../img/bikeIcon.png";
import kaiaIcon from "../img/kaia.png";
import koaIcon from "../img/koa.png";
import dinoIcon from "../img/dino.png";
import pennyIcon from "../img/penny.png";

export default function HomePage() {
  const [mascote, setMascote] = useState(null);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const mascoteSalvo = JSON.parse(localStorage.getItem("kaizoo"));
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
    if (mascoteSalvo) setMascote(mascoteSalvo);
    if (usuarioSalvo) setUsuario(usuarioSalvo);
  }, []);

  return (
    <Layout>
      <div className="home-grid">
        {/* Coluna Esquerda */}
        <div className="left-panel">
          {usuario && <h2>Olá, {usuario.username}!</h2>}

          {mascote && (
            <KaizooCard
              imagem={mascote.front}
              nome={mascote.nome}
              subtitulo={mascote.subtitulo}
              nivel={5}
              xpRestante="325XP"
            />
          )}

          <div className="action-buttons">
            <KaizooButton to="/atividade" type="highlight">
              Registrar Atividade
            </KaizooButton>
            <KaizooButton onClick={() => alert("Compartilhado!")} type="dark">
              Compartilhar
            </KaizooButton>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="right-panel">
          <div className="card destaque-card">
            <strong>Destaque do Dia</strong>
            <p>"Hoje o seu Kaizoo quer se movimentar por 15 minutos!"</p>
          </div>

          <div className="card">
            <strong>Próximo Desafio</strong>
            <p className="small">Meta: 10km corridos</p>
            <ProgressBar
              now={50}
              label="50%"
              className="kaizoo-progress"
              animated
            />
          </div>

          <div className="card">
            <strong>Minhas Atividades</strong>
            <div className="activity-icons">
              <div className="activity-badge">
                <img src={personIcon} alt="Pessoa" />
                34min.
              </div>
              <div className="activity-badge">
                <img src={walkIcon} alt="Andar" />
                1h30min.
              </div>
              <div className="activity-badge">
                <img src={bikeIcon} alt="Bicicleta" />
                45min.
              </div>
            </div>
          </div>

          <div className="card-row">
            <div className="card small-card">
              <strong>Conquistas Recentes</strong>
              <p className="small">Você ganhou 2 troféus!</p>
            </div>
            <div className="card small-card">
              <strong>Amigos Ativos Hoje</strong>
              <div className="friends">
                <img src={kaiaIcon} alt="Kaia" />
                <img src={koaIcon} alt="Koa" />
                <img src={dinoIcon} alt="Dino" />
                <img src={pennyIcon} alt="Penny" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
