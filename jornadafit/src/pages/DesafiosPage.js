// src/pages/DesafiosPage.js
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import KaizooCard from "../components/KaizooCard";
import badge1 from "../img/badge1.png";
import badge2 from "../img/badge2.png";
import badge3 from "../img/badge3.png";
import "./DesafiosPage.css";

export default function DesafiosPage() {
  const [mascote, setMascote] = useState(null);

  useEffect(() => {
    const savedMascote = JSON.parse(localStorage.getItem("kaizoo"));
    if (savedMascote) setMascote(savedMascote);
  }, []);

  return (
    <Layout>
      <div className="desafios-page">
        {/* Lado Esquerdo - Perfil */}
        <div className="perfil-section">
          {/* Card: Mascote com KaizooCard */}
          {mascote && (
            <KaizooCard
              imagem={mascote.front}
              nivel={5}
              xpRestante="325XP"
              nome={mascote.nome}
              subtitulo={mascote.subtitulo}
            />
          )}

          {/* Card: Badges */}
          <div className="badges-card">
            <strong>Badges</strong>
            <div className="badges-list">
              <img src={badge1} alt="Badge 1" />
              <img src={badge2} alt="Badge 2" />
              <img src={badge3} alt="Badge 3" />
            </div>
          </div>
        </div>

        {/* Lado Direito - Cards */}
        <div className="cards-section">
          {/* Desafios Ativos */}
          <div className="card">
            <h3>Desafios Ativos</h3>
            <div className="card-row">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="challenge-card active">
                  <h4>🏃 Corrida Matinal</h4>
                  <p>Correr 3km pela manhã!</p>
                  <p>
                    Recompensa: <strong>45XP</strong>
                  </p>
                  <p>
                    Expira em: <strong>4 dias</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desafios Disponíveis */}
          <div className="card">
            <h3>Desafios Disponíveis</h3>
            <div className="card-row">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="challenge-card available">
                  <h4>🏃 Corrida Matinal</h4>
                  <p>Correr 5km pela manhã!</p>
                  <p>
                    Recompensa: <strong>45XP</strong>
                  </p>
                  <p>
                    Tempo de duração: <strong>7 dias</strong>
                  </p>
                  <button>Adicionar Desafio</button>
                </div>
              ))}
            </div>
          </div>

          {/* Desafios Concluídos */}
          <div className="card">
            <h3>Desafios Concluídos</h3>
            <div className="card-row">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="challenge-card completed">
                  <h4>🏃 Corrida Matinal</h4>
                  <p>Finalizado com Sucesso!</p>
                  <p>
                    Recompensa: <strong>45XP</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
