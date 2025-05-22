import React from "react";
import "./DestaquesCard.css";

import miniBanner0 from "../img/minibanner0.png";
import miniBanner1 from "../img/minibanner1.png";
import banner1 from "../img/banner1.png";

export default function DestaquesCard() {
  return (
    <div className="card-destaques">
      <h3 className="titulo-destaques">Destaques</h3>
      <div className="conteudo-destaques">
        {/* Coluna 1: Mini Banners Verticais */}
        <div className="coluna-esquerda">
          <img
            src={miniBanner0}
            alt="Mini banner com ilustração de treino ao ar livre"
          />
          <img
            src={miniBanner1}
            alt="Mini banner com ilustração de alongamento ou yoga"
          />
        </div>

        {/* Coluna 2: Banner Horizontal */}
        <div className="coluna-meio">
          <img
            src={banner1}
            alt="Banner principal com imagem de destaque do desafio da semana"
          />
        </div>

        {/* Coluna 3: Texto e Botão */}
        <div className="coluna-direita">
          <h4>Desafio da Semana</h4>
          <p>
            Participe do desafio coletivo da semana e veja a comunidade se
            movimentar junto com você! Conquiste pontos, evolua seu pet e
            celebre com outros usuários.
          </p>
          <button className="botao-saiba-mais">Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}
