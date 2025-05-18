import Layout from "../components/Layout";
import "./HomePage.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

import kaiaWalking from "../img/kaiaWalking.png";
import kaiaIcon from "../img/kaia.png";
import koaIcon from "../img/koa.png";
import dinoIcon from "../img/dino.png";
import pennyIcon from "../img/penny.png";

import walkIcon from "../img/walkIcon.png";
import personIcon from "../img/personIcon.png";
import bikeIcon from "../img/bikeIcon.png";

export default function HomePage() {
  return (
    <Layout>
      <div className="home-grid">
        {/* Coluna Esquerda */}
        <div className="left-panel">
          {/* Card do Kaizoo */}
          <div className="kaizoo-card">
            <img src={kaiaWalking} alt="Kaizoo" className="kaia-img" />
            <div className="level-footer">
              <div className="level-circle">5</div>
              <div>
                <strong>Nível 5</strong>
                <p>325XP para o próximo nível!</p>
              </div>
            </div>
          </div>

          {/* Botões – FORA do card */}
          <div className="action-buttons">
            <Link to="/atividade">
              <button className="btn-highlight">Registrar Atividade</button>
            </Link>
            <button className="btn-kaizoo-dark">Compartilhar</button>
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
              label={`50%`}
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
