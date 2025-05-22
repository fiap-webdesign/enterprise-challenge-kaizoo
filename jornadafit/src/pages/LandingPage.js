import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import mascotesFull from "../img/successMascots.png";
import KaizooButton from "../components/KaizooButton";

import kaiaBanner from "../img/kaiaWalkingBack.png";
import tatoBanner from "../img/TatoListingBack.png";
import dinoBanner from "../img/DinoExerciseBack.png";
import pennyBanner from "../img/PennyMedBack.png";
import koaBanner from "../img/KoaChildBack.png";

import starKaia from "../img/starKaia.png";
import starTato from "../img/StarTato.png";
import starDino from "../img/StarDino.png";
import starPenny from "../img/StarPenny.png";
import starKoa from "../img/StarKoa.png";

import highlightTato from "../img/TatoListingBack.png";
import highlightTask from "../img/exemploDesafios.png";
import highlightXP from "../img/xpStar.png";
import highlightAll from "../img/allTogether.png";

import iconMais from "../img/mais.png";
import iconReaction from "../img/add_reaction.png";
import iconMetricas from "../img/grafico.png";
import iconTrofeu from "../img/trofeu.png";
import iconStar from "../img/star.png";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <span className="logo">Kaizoo</span>
        <div className="landing-buttons">
          <KaizooButton to="/auth?modo=cadastro" type="highlight">
            Criar Conta
          </KaizooButton>
          <KaizooButton to="/auth?modo=login" type="btn-outline">
            Fazer Login
          </KaizooButton>
        </div>
      </header>

      <section className="hero">
        <h1>
          Transforme sua rotina de <br />
          exercícios em uma jornada épica <br />
          com seus mascotes Kaizoo!
        </h1>
        <p>Treine, evolua e veja seu mascote ficar mais forte com você!</p>
        <Link to="/auth">
          <button className="btn-kaizoo-dark">Escolher meu Kaizoo</button>
        </Link>
        <div className="hero-mascotes">
          <img src={kaiaBanner} alt="Kaia correndo na beira de um lago" />
          <img src={tatoBanner} alt="Tato sorrindo na praia com estetoscópio" />
          <img
            src={dinoBanner}
            alt="Dino segurando halteres na floresta, pronto para treino"
          />
          <img
            src={pennyBanner}
            alt="Penny meditando sobre uma geleira com montanhas ao fundo"
          />
          <img
            src={koaBanner}
            alt="Koa segurando seu filhote em meio a uma floresta de bambus"
          />
        </div>
      </section>

      <section className="benefits">
        <h2>A gente sabe, falta motivação, tempo e constância!</h2>
        <div className="benefit-boxes">
          <div className="benefit-box">
            <div className="benefit-title">FALTA MOTIVAÇÃO?</div>
            <div className="benefit-body">
              Descubra como o Kaizoo reacende sua paixão pelo treino.
            </div>
          </div>

          <div className="benefit-box">
            <div className="benefit-title">TREINOS REPETITIVOS?</div>
            <div className="benefit-body">
              Experimente rotinas de exercícios variadas e envolventes.
            </div>
          </div>

          <div className="benefit-box">
            <div className="benefit-title">ABANDONO DE APLICATIVOS?</div>
            <div className="benefit-body">
              Mantenha o comprometimento com nossa abordagem gamificada.
            </div>
          </div>
        </div>
      </section>

      <section className="explicacao">
        <h2>
          Se exercitar não tem que ser chato e nem uma obrigação pesada em nossa
          rotina! Foi pensando nisso que nasceu o Kaizoo!
        </h2>

        <div className="explication-grid">
          <div className="explication-card">
            <div className="card-content">
              <div className="text-section">
                <h4>SEU KAIZOO</h4>
                <p>
                  Você irá criar e personalizar seu Kaizoo, que vai te
                  acompanhar na sua jornada de exercícios físicos.
                </p>
              </div>
              <img
                src={highlightTato}
                alt="Mascote Tato sorrindo na praia com estetoscópio"
              />
            </div>
          </div>

          <div className="explication-card">
            <div className="card-content">
              <div className="text-section">
                <h4>DESAFIOS DIÁRIOS</h4>
                <p>
                  Adotamos a metodologia Kaizen e acreditamos que fazendo um
                  pouquinho a cada dia, conseguiremos ter grandes conquistas!
                </p>
              </div>
              <img
                src={highlightTask}
                alt="Exemplo de checklist de desafios diários do Kaizoo"
              />
            </div>
          </div>

          <div className="explication-card">
            <div className="card-content">
              <div className="text-section">
                <h4>GAMEFICAÇÃO LEVE</h4>
                <p>
                  Cada pequena conquista vira uma celebração! Você acumula
                  pontos, evolui seu mascote e desbloqueia conquistas com
                  diversão.
                </p>
              </div>
              <img
                src={highlightXP}
                alt="Barra de progresso de XP com medalha e estrelas, representando evolução"
              />
            </div>
          </div>

          <div className="explication-card">
            <div className="card-content">
              <div className="text-section">
                <h4>COMUNIDADE ACOLHEDORA</h4>
                <p>
                  A comunidade é um espaço seguro e motivador, onde cada
                  conquista é celebrada e cada passo é incentivado.
                </p>
              </div>
              <img
                src={highlightAll}
                alt="Todos os mascotes Kaizoo juntos sorrindo e prontos para se exercitar"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="funcionalidades">
        <h2>Principais Funcionalidades</h2>
        <div className="funcionalidades-grid">
          <div className="func-card">
            <img
              src={iconMais}
              alt="Ícone de adicionar atividade, representado por um sinal de mais"
            />
            <p>REGISTRO DE ATIVIDADES FÍSICAS</p>
          </div>
          <div className="func-card">
            <img
              src={iconReaction}
              alt="Ícone de reação, simbolizando evolução dos mascotes"
            />
            <p>EVOLUÇÃO DOS MASCOTES</p>
          </div>
          <div className="func-card">
            <img
              src={iconMetricas}
              alt="Ícone de gráfico de barras, representando métricas de evolução pessoal"
            />
            <p>MÉTRICAS DE EVOLUÇÃO PESSOAL</p>
          </div>
          <div className="func-card">
            <img
              src={iconTrofeu}
              alt="Ícone de troféu dourado, representando conquistas e prêmios"
            />
            <p>TROFÉUS E CONQUISTAS</p>
          </div>
          <div className="func-card">
            <img
              src={iconStar}
              alt="Ícone de estrela, usado para rankings e destaques"
            />
            <p>RANKING ENTRE AMIGOS</p>
          </div>
        </div>
      </section>

      <section className="conheca-mascotes">
        <h2>Conheça os Kaizoo Pets</h2>
        <div className="mascote-cards">
          <div className="mascote-card">
            <div className="pet-badge">
              <img
                src={starKaia}
                alt="Insígnia do mascote Kaia, gata energética em moldura azul"
              />
            </div>
            <strong>KAIA</strong>
            <p className="subtitle">A GATA ENERGÉTICA</p>
            <p className="description">
              Vamos correr juntos para um dia melhor? Eu nunca paro, e você
              também pode!
            </p>
          </div>
          <div className="mascote-card">
            <div className="pet-badge">
              <img
                src={starTato}
                alt="Insígnia do mascote Tato, tartaruga focada em moldura rosa"
              />
            </div>
            <strong>TATO</strong>
            <p className="subtitle">TARTARUGA FOCADA</p>
            <p className="description">
              Devagar, constante e feliz, cada passo nos leva mais longe. Vem
              comigo!
            </p>
          </div>
          <div className="mascote-card">
            <div className="pet-badge">
              <img
                src={starDino}
                alt="Insígnia do mascote Dino, dinossaurinho forte em moldura laranja"
              />
            </div>
            <strong>DINO</strong>
            <p className="subtitle">O DINOSSAURO FORTE</p>
            <p className="description">
              Cada treino é uma vitória! Vamos quebrar nossos próprios recordes
              juntos!
            </p>
          </div>
          <div className="mascote-card">
            <div className="pet-badge">
              <img
                src={starPenny}
                alt="Insígnia da mascote Penny, pinguim serena em moldura rosa claro"
              />
            </div>
            <strong>PENNY</strong>
            <p className="subtitle">A PINGUIM SERENA</p>
            <p className="description">
              Respira fundo... A jornada para o bem-estar começa com um simples
              momento de paz. Eu estou aqui com você!
            </p>
          </div>
          <div className="mascote-card">
            <div className="pet-badge">
              <img
                src={starKoa}
                alt="Insígnia do mascote Koa, coalinha protetora em moldura verde água"
              />
            </div>
            <strong>KOA</strong>
            <p className="subtitle">A COALINHA PROTETORA</p>
            <p className="description">
              Cada movimento seu é um gesto de amor por você e pela sua família.
              Vamos juntos construir essa jornada!
            </p>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="cta-content">
          <img
            src={mascotesFull}
            alt="Todos os mascotes Kaizoo reunidos, sorrindo e celebrando juntos"
            className="cta-img"
          />

          <div className="cta-text">
            <h2>
              <strong>Mexa-se</strong>
              <strong className="highlight">.</strong> <strong>Evolua</strong>
              <strong className="highlight">.</strong>{" "}
              <strong>Divirta-se</strong>
              <strong className="highlight">!</strong>
            </h2>
            <p>Comece agora sua jornada com Kaizoo!</p>

            <div className="cta-buttons">
              <KaizooButton to="/auth?modo=cadastro" type="highlight">
                Criar Conta
              </KaizooButton>
              <KaizooButton to="/auth?modo=login" type="btn-outline">
                Fazer Login
              </KaizooButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <h2>Kaizoo</h2>
        <hr />
        <p>© 2025 Kaizoo. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
