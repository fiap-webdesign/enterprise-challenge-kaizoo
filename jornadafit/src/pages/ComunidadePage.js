import React from "react";
import Layout from "../components/Layout";
import "./ComunidadePage.css";

import juliaAvatar from "../img/photoProfile.png";
import juliaKaizoo from "../img/kaia.png";

import avatar1 from "../img/icoDino.png";
import avatar2 from "../img/icoKaia.png";
import avatar3 from "../img/icoKoa.png";
import avatar4 from "../img/icoPenny.png";
import avatar5 from "../img/icoDino.png";

import banner1 from "../img/banner1.png";

import DestaquesCard from "../components/DestaquesCard";
import FeedCard from "../components/FeedCard";
import EventoCard from "../components/EventoCard";

export default function ComunidadePage() {
  return (
    <Layout>
      <div className="comunidade-topo">
        <h1 className="titulo-pagina">Comunidade</h1>
        <DestaquesCard />
      </div>

      <div className="comunidade-page">
        <div className="comunidade-esquerda">
          <div className="perfil-card">
            <div className="perfil-avatar-nome">
              <img
                src={juliaAvatar}
                alt="Foto de perfil de Julia Costa"
                className="avatar-perfil"
              />
              <h4 className="nome-usuario">Julia Costa</h4>
            </div>
            <p className="descricao-usuario">
              Adoro começar o dia com movimento e boas energias. Entre um
              alongamento e uma pedalada no parque, busco leveza, saúde e
              motivação no meu ritmo.
            </p>
            <div className="mascote-perfil">
              <img src={juliaKaizoo} alt="Mascote Kaia da Julia" />
            </div>
          </div>

          <div className="leaderboard-card">
            <h4 className="titulo-leaderboard">Leaderboard</h4>
            <p className="subtitulo-leaderboard">
              Ranking da Semana está bombando!
            </p>
            <ul className="lista-leaderboard">
              <li>
                <img src={avatar1} alt="Mascote Dino de Camila Rocha" />
                <span className="nome">Camila Rocha</span>
                <span className="xp">1045XP</span>
              </li>
              <li>
                <img src={avatar2} alt="Mascote Kaia de Lucas Ferreira" />
                <span className="nome">Lucas Ferreira</span>
                <span className="xp">995XP</span>
              </li>
              <li>
                <img src={avatar3} alt="Mascote Koa de Julia Costa" />
                <span className="nome">Julia Costa</span>
                <span className="xp">990XP</span>
              </li>
              <li>
                <img src={avatar4} alt="Mascote Penny de Ana Martins" />
                <span className="nome">Ana Martins</span>
                <span className="xp">760XP</span>
              </li>
              <li>
                <img src={avatar5} alt="Mascote Dino de Marcos Paulo" />
                <span className="nome">Marcos Paulo</span>
                <span className="xp">730XP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="comunidade-feed">
          <div className="feed-wrapper">
            <h2 className="titulo-feed">Feed</h2>

            <div className="feed-header">
              <button>Novo Post</button>
              <button>Comunidades</button>
              <button>Eventos</button>
            </div>

            <FeedCard
              avatar={avatar2}
              nome="Ana Martins"
              tempo="postado à 1h"
              banner={banner1}
              xp={50}
              texto="Hoje consegui acordar 30 minutinhos mais cedo e fiz a sequência de alongamento do Kaizoo antes de começar a trabalhar. Meu pet quase dormiu de tão relaxado! 🧘‍♀️✨ Alguém mais tentando manter a rotina com leveza?"
              recompensa="50XP"
              duracao="32min."
              atividade="Yoga"
              emojiFeedback="😌"
              feedbackTexto="Kaia se sente relaxada!"
              curtidas={43}
              comentarios={4}
            />

            <FeedCard
              avatar={avatar1}
              nome="Lucas Ferreira"
              tempo="postado à 2h"
              banner={banner1}
              xp={55}
              texto="Confesso que estava meio desanimado, mas o desafio da semana me deu o empurrão que eu precisava! 12km pedalando e o Kaikinho já subiu de nível 🚴‍♂️✨ Bora seguir firme!"
              recompensa="55XP"
              duracao="40min."
              atividade="Pedalar"
              emojiFeedback="🦕"
              feedbackTexto="Dino se sente energizado!"
              curtidas={65}
              comentarios={7}
            />

            <button className="carregar-mais">Carregar Mais</button>
          </div>
        </div>

        <div className="comunidade-direita">
          <div className="evento-wrapper">
            <h4 className="evento-titulo">Eventos da Comunidade</h4>

            <EventoCard
              titulo="Yoga ao Ar Livre"
              descricao="Relaxe e recarregue suas energias ao ar livre!"
              recompensa="110XP"
              data="10/06/2025"
              local="Parque Barigui"
            />

            <EventoCard
              titulo="Maratona de Caridade"
              descricao="Corra por uma causa e ajude a arrecadar fundos!"
              recompensa="1000XP"
              data="25/08/2025"
            />

            <EventoCard
              titulo="Corrida Virtual"
              descricao="Participe da corrida virtual de 5km e conquiste novas medalhas!"
              recompensa="210XP"
              data="07/09/2025"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
