import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import KaizooCard from "../components/KaizooCard";
import "./PerfilPage.css";

import badge1 from "../img/badge1.png";
import badge2 from "../img/badge2.png";
import badge3 from "../img/badge3.png";

export default function PerfilPage() {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("Usuário");
  const [mascote, setMascote] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("usuario"));
    const savedAvatar = localStorage.getItem("avatar");
    const savedKaizoo = JSON.parse(localStorage.getItem("kaizoo"));

    if (savedUser?.username) setUsername(savedUser.username);
    if (savedAvatar) setAvatar(savedAvatar);
    if (savedKaizoo) setMascote(savedKaizoo);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setAvatar(base64);
      localStorage.setItem("avatar", base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Layout>
      <div className="perfil-container">
        <div className="perfil-topo card">
          <div className="perfil-coluna-esquerda">
            <label htmlFor="upload-foto" className="upload-avatar-label">
              <img
                src={avatar || "https://i.imgur.com/hv3ZbZ9.png"}
                alt="Foto de perfil do usuário"
                className="perfil-avatar"
              />
              <input
                id="upload-foto"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>

            <h2 className="perfil-nome">{username}</h2>
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
                <strong>1</strong> MASCOTE
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
              <img src={badge1} alt="Insígnia Kaizoo 1" />
              <img src={badge2} alt="Insígnia Kaizoo 2" />
              <img src={badge3} alt="Insígnia Kaizoo 3" />
            </div>
          </div>
        </div>

        <div className="perfil-estatisticas">
          <div className="perfil-esquerda">
            {mascote && (
              <KaizooCard
                imagem={mascote.front}
                nivel={5}
                xpRestante="325XP"
                nome={mascote.nome}
                subtitulo={mascote.subtitulo}
              />
            )}
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
                  <div className="activity-badge" title="Caminhada">
                    🚶
                  </div>
                  <div className="activity-badge" title="Yoga">
                    🧘
                  </div>
                  <div className="activity-badge" title="Corrida">
                    🏃‍♀️
                  </div>
                  <div className="activity-badge" title="Ciclismo">
                    🚴‍♂️
                  </div>
                  <div className="activity-badge" title="Meditação">
                    🌿
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
