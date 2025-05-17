// ProgressoPage.js
import React from "react";
import Layout from "../components/Layout";
import "./ProgressoPage.css";

import badge1 from "../img/badge1.png";
import badge2 from "../img/badge2.png";
import badge3 from "../img/badge3.png";
import KaizooCard from "../components/KaizooCard";

export default function ProgressoPage() {
  return (
    <Layout>
      <div className="progresso-container">
        <h2 className="titulo-semana">Métricas da Semana</h2>

        <div className="progresso-grid">
          {/* Coluna 1 - Kaia + Nível + Badges */}
          <div className="coluna-esquerda">
            <KaizooCard />

            <div className="badges">
              <h4>Badges</h4>
              <div className="badges-icons">
                <img src={badge1} alt="Badge 1" />
                <img src={badge2} alt="Badge 2" />
                <img src={badge3} alt="Badge 3" />
              </div>
            </div>
          </div>

          {/* Coluna 2 - Métricas, metas, recordes e desafios */}
          <div className="coluna-direita">
            <div className="metricas-grid">
              <div className="stat-card amarelo">
                4<br />
                <span>DIAS ATIVOS</span>
              </div>
              <div className="stat-card azul">
                3h45
                <br />
                <span>ATIVAS</span>
              </div>
              <div className="stat-card branco">
                10
                <br />
                <span>KM PERCORRIDOS</span>
              </div>
              <div className="stat-card rosa">
                345
                <br />
                <span>CALORIAS QUEIMADAS</span>
              </div>
            </div>

            <div className="linha-cards">
              <div className="card metas">
                <strong>Metas da Semana</strong>
                <div className="lista-metas">
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    Se manter ativo por 5 dias
                  </label>
                  <label className="checkbox-item checked">
                    <input type="checkbox" checked readOnly />
                    Percorrer 7 km em uma semana
                  </label>
                  <label className="checkbox-item checked">
                    <input type="checkbox" checked readOnly />
                    Correr por 3 min. seguidos
                  </label>
                </div>

                <div className="alerta alerta-metas">
                  <span role="img" aria-label="kaia">
                    🐱
                  </span>
                  <strong>Falta apenas 1 meta!</strong>
                </div>
              </div>

              <div className="card recordes">
                <strong>Recordes Pessoais</strong>
                <ul className="lista-recordes">
                  <li>
                    <span className="estrela">⭐</span> Maior distância
                    percorrida: <b>15 km</b>
                  </li>
                  <li>
                    <span className="estrela">⭐</span> Maior tempo de
                    atividade: <b>2h30</b>
                  </li>
                  <li>
                    <span className="estrela">⭐</span> Semana mais ativa:{" "}
                    <b>6 dias</b>
                  </li>
                </ul>

                <div className="alerta alerta-recordes">
                  🐱 Já bateu 2 recordes essa semana!
                </div>
              </div>
            </div>

            <div className="card desafios">
              <strong>Desafios Ativos</strong>
              <div className="desafios-lista">
                <div className="desafio">
                  <h5>🏃‍♂️ Corrida Matinal</h5>
                  <p>
                    Correr 3km pela manhã!
                    <br />
                    Recompensa: <b>45XP</b>
                    <br />
                    Expira em: <b>4 dias</b>
                  </p>
                </div>
                <div className="desafio">
                  <h5>🏃‍♂️ Corrida Matinal</h5>
                  <p>
                    Correr 3km pela manhã!
                    <br />
                    Recompensa: <b>45XP</b>
                    <br />
                    Expira em: <b>4 dias</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
