import React from "react";
import Layout from "../components/Layout";
import "./PerfilPage.css";
import ProgressBar from "react-bootstrap/ProgressBar";

import kaiaWalking from "../img/kaiaWalking.png";
import badge1 from "../img/badge1.png"; // Exemplo
import badge2 from "../img/badge2.png";
import badge3 from "../img/badge3.png";

import walkIcon from "../img/walkIcon.png";
import personIcon from "../img/personIcon.png";
import bikeIcon from "../img/bikeIcon.png";

export default function PerfilPage() {
  return (
    <Layout>
      <div className="perfil-container">
        <div className="perfil-topo card">
          <div className="perfil-coluna-esquerda">
            <img
              src="https://i.imgur.com/hv3ZbZ9.png"
              alt="Avatar"
              className="perfil-avatar"
            />
            <h2 className="perfil-nome">Julia Costa</h2>
            <p className="perfil-descricao">
              Adoro começar o dia com movimento e boas energias. Entre um
              alongamento e uma pedalada no parque, busco leveza, saúde e
              motivação no meu ritmo.
            </p>
            <div className="perfil-contagem">
              <span>
                <strong>35</strong> AMIGOS
              </span>
              <span>
                <strong>10</strong> COMUNIDADES
              </span>
              <span>
                <strong>1</strong> MASCOTES
              </span>
            </div>
          </div>

          <div className="perfil-coluna-direita">
            <button className="btn-kaizoo-dark">Convidar Amigos</button>
            <button className="btn-highlight">Compartilhar</button>
          </div>
        </div>

        <div className="badges-section card">
          <div className="badges">
            <h4 className="badges-title">Badges</h4>
            <div className="badges-icons">
              <img src={badge1} alt="Badge" />
              <img src={badge2} alt="Badge" />
              <img src={badge3} alt="Badge" />
            </div>
          </div>
        </div>

        <div className="perfil-estatisticas">
          <div className="card card-mascote">
            <img src={kaiaWalking} alt="Kaia" className="kaia-img" />
            <div className="level-footer">
              <div className="level-circle">5</div>
              <div>
                <strong>Nível 5</strong>
                <p>325XP para o próximo nível!</p>
              </div>
            </div>
          </div>

          <div className="perfil-direita">
            <div className="estatistica-grid">
              <div className="stat-card amarelo">
                43
                <br />
                <span>DIAS ATIVOS</span>
              </div>
              <div className="stat-card azul">
                344
                <br />
                <span>HORAS ATIVAS</span>
              </div>
              <div className="stat-card branco">
                1230
                <br />
                <span>KM PERCORRIDOS</span>
              </div>
              <div className="stat-card rosa">
                10K
                <br />
                <span>CALORIAS QUEIMADAS</span>
              </div>
              <div className="stat-card rosa-claro">
                134
                <br />
                <span>DESAFIOS CONCLUÍDOS</span>
              </div>
              <div className="stat-card cinza">
                32
                <br />
                <span>RECORDES BATIDOS</span>
              </div>
              <div className="stat-card laranja">
                156
                <br />
                <span>METAS CUMPRIDAS</span>
              </div>
              <div className="stat-card azul">
                5<br />
                <span>ATIVIDADES PRATICADAS</span>
              </div>
            </div>

            <div className="registro-e-atividades">
              <div className="card galeria">
                <strong>Galeria de Registros</strong>
                <div className="registros-fakes">
                  <div className="registro-item" />
                  <div className="registro-item" />
                  <div className="registro-item" />
                  <div className="registro-item" />
                </div>
                <p className="ver-todas">ver todas</p>
              </div>

              <div className="card favoritas">
                <strong>Atividades Preferidas</strong>
                <div className="activity-icons">
                  <div className="activity-badge">🚶</div>
                  <div className="activity-badge">🧘</div>
                  <div className="activity-badge">🏃‍♀️</div>
                  <div className="activity-badge">🚴‍♂️</div>
                  <div className="activity-badge">🌿</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
