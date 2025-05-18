import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import KaizooButton from "../components/KaizooButton";
import "./MascotesPage.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

import tatoFront from "../img/card-tato.png";
import tatoBack from "../img/card-tato-descricao.png";
import pennyFront from "../img/card-penny.png";
import pennyBack from "../img/card-penny-descricao.png";
import kaiaFront from "../img/card-kaia.png";
import kaiaBack from "../img/card-kaia-descricao.png";
import koaFront from "../img/card-koa.png";
import koaBack from "../img/card-koa-descricao.png";
import dinoFront from "../img/card-dino.png";
import dinoBack from "../img/card-dino-descricao.png";
import mascotesJuntos from "../img/allTogether.png";

const mascotes = [
  {
    nome: "TATO",
    subtitulo: "TARTARUGA FOCADA",
    front: tatoFront,
    back: tatoBack,
  },
  {
    nome: "PENNY",
    subtitulo: "A PINGUIM SERENA",
    front: pennyFront,
    back: pennyBack,
  },
  {
    nome: "KAIA",
    subtitulo: "A GATA ENERGÉTICA",
    front: kaiaFront,
    back: kaiaBack,
  },
  {
    nome: "KOA",
    subtitulo: "A COALINHA PROTETORA",
    front: koaFront,
    back: koaBack,
  },
  {
    nome: "DINO",
    subtitulo: "O DINOSSAURINHO FORTE",
    front: dinoFront,
    back: dinoBack,
  },
];

export default function MascotesPage() {
  const [index, setIndex] = useState(2);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [step, setStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [mascoteEscolhido, setMascoteEscolhido] = useState(null);
  const cardRefs = useRef([]);
  const nodeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const mascoteSalvo = JSON.parse(localStorage.getItem("kaizoo"));
    if (mascoteSalvo) {
      setMascoteEscolhido(mascoteSalvo);
      setStep(4);
    } else {
      setStep(1);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("step-intro", step < 4);
    return () => document.body.classList.remove("step-intro");
  }, [step]);

  useEffect(() => {
    if (cardRefs.current[index] && !isMobile) {
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [index, isMobile]);

  const prev = () => {
    setFlippedIndex(null);
    setIndex((i) => (i === 0 ? mascotes.length - 1 : i - 1));
  };

  const next = () => {
    setFlippedIndex(null);
    setIndex((i) => (i === mascotes.length - 1 ? 0 : i + 1));
  };

  const escolherKaizoo = () => {
    const escolhido = mascotes[index];
    localStorage.setItem("kaizoo", JSON.stringify(escolhido));
    setMascoteEscolhido(escolhido);
    setStep(4);
  };

  return (
    <div
      className="mascotes-wrapper"
      style={{
        backgroundColor: step < 4 ? "#000" : "#1e1e1e",
        minHeight: "100vh",
      }}
    >
      <Layout hideSidebar={step < 4}>
        <div
          className="mascotes-container"
          style={{ padding: step < 4 ? "0" : "2rem" }}
        >
          {step < 4 && (
            <div className="steps">
              <span className={`step ${step === 1 ? "active" : ""}`}>
                1. Escolha seu Kaizoo
              </span>
              <span className={`step ${step === 2 ? "active" : ""}`}>
                2. Breve Questionário
              </span>
              <span className={`step ${step === 3 ? "active" : ""}`}>
                3. Pronto pra se exercitar
              </span>
            </div>
          )}

          <SwitchTransition>
            <CSSTransition
              key={step}
              timeout={400}
              classNames="fade"
              nodeRef={nodeRef}
            >
              <div ref={nodeRef}>
                {step === 1 && (
                  <>
                    <div className="carousel-wrapper">
                      <button className="arrow-btn" onClick={prev}>
                        ←
                      </button>
                      <div className="carousel">
                        {mascotes.map((m, i) => {
                          const isActive = i === index;
                          const isFlipped = flippedIndex === i;
                          if (isMobile && !isActive) return null;
                          return (
                            <div
                              key={i}
                              className="card-column"
                              ref={(el) => (cardRefs.current[i] = el)}
                            >
                              <div
                                className={`flip-container mascote-card ${
                                  isActive ? "active" : "inactive"
                                } ${isFlipped ? "flipped" : ""}`}
                              >
                                <div className="flipper">
                                  <div
                                    className="front"
                                    style={{
                                      backgroundImage: `url(${m.front})`,
                                    }}
                                  >
                                    <div className="mascote-header">
                                      <h5>{m.nome}</h5>
                                      <p>{m.subtitulo}</p>
                                    </div>
                                  </div>
                                  <div className="back">
                                    <img
                                      src={m.back}
                                      alt={`Personalidade de ${m.nome}`}
                                    />
                                  </div>
                                </div>
                              </div>
                              {isActive && (
                                <KaizooButton
                                  type="secondary"
                                  className="mt-1"
                                  onClick={() =>
                                    setFlippedIndex(isFlipped ? null : i)
                                  }
                                >
                                  {isFlipped ? "VOLTAR" : "VER PERSONALIDADE"}
                                </KaizooButton>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <button className="arrow-btn" onClick={next}>
                        →
                      </button>
                    </div>
                    <KaizooButton
                      type="highlight"
                      className="mt-4"
                      onClick={() => setStep(2)}
                    >
                      Escolher Kaizoo
                    </KaizooButton>
                  </>
                )}

                {step === 2 && (
                  <div className="questionario-container">
                    <h2>Me conte suas preferências</h2>
                    <form className="questionario-form">
                      <p>
                        <strong>
                          Qual o seu objetivo principal com exercícios?
                        </strong>
                      </p>
                      <label>
                        <input type="radio" name="objetivo" /> Perder peso
                      </label>
                      <label>
                        <input type="radio" name="objetivo" /> Ganho de massa
                        muscular
                      </label>
                      <label>
                        <input type="radio" name="objetivo" /> Aumentar
                        resistência
                      </label>
                      <p>
                        <strong>
                          Com qual frequência se exercita atualmente?
                        </strong>
                      </p>
                      <label>
                        <input type="radio" name="frequencia" /> Diariamente
                      </label>
                      <label>
                        <input type="radio" name="frequencia" /> 3-4 vezes por
                        semana
                      </label>
                      <label>
                        <input type="radio" name="frequencia" /> Menos de 3
                        vezes por semana
                      </label>
                      <p>
                        <strong>Quais atividades você mais gosta?</strong>
                      </p>
                      <label>
                        <input type="radio" name="atividade" /> Corrida /
                        Caminhada
                      </label>
                      <label>
                        <input type="radio" name="atividade" /> Ciclismo
                      </label>
                      <label>
                        <input type="radio" name="atividade" /> Musculação
                      </label>
                      <label>
                        <input type="radio" name="atividade" /> Yoga /
                        Alongamento
                      </label>
                    </form>
                    <div className="botoes-questionario mt-4">
                      <KaizooButton type="secondary" onClick={() => setStep(1)}>
                        Voltar
                      </KaizooButton>
                      <KaizooButton type="highlight" onClick={() => setStep(3)}>
                        Finalizar
                      </KaizooButton>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="tela-final-container">
                    <img
                      src={mascotesJuntos}
                      alt="Kaizoos juntos"
                      className="tela-final-img"
                    />
                    <h2 className="tela-final-title">Tudo pronto!</h2>
                    <p className="tela-final-text">
                      Seu perfil foi configurado com sucesso!
                    </p>
                    <KaizooButton
                      type="highlight"
                      className="mt-4"
                      onClick={escolherKaizoo}
                    >
                      Ir para início
                    </KaizooButton>
                  </div>
                )}

                {step === 4 && mascoteEscolhido && (
                  <div className="tela-final-container">
                    <h2 className="tela-final-title">Esse é o seu Kaizoo!</h2>
                    <div
                      className="mascote-card active"
                      style={{
                        backgroundImage: `url(${mascoteEscolhido.front})`,
                      }}
                    >
                      <div className="mascote-header">
                        <h5>{mascoteEscolhido.nome}</h5>
                        <p>{mascoteEscolhido.subtitulo}</p>
                      </div>
                    </div>
                    <KaizooButton
                      type="highlight"
                      className="mt-4"
                      onClick={() => setStep(1)}
                    >
                      Alterar Kaizoo
                    </KaizooButton>
                  </div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </Layout>
    </div>
  );
}
