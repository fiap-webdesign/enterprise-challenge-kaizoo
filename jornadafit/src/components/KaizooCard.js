// src/components/KaizooCard.js
import React from "react";
import "./KaizooCard.css";

export default function KaizooCard({
  imagem,
  nivel,
  xpRestante,
  nome,
  subtitulo,
}) {
  return (
    <div className="kaizoo-card-container">
      <img src={imagem} alt={nome} className="kaia-img" />
      <div className="level-footer">
        <div className="level-circle">{nivel}</div>
        <div>
          <strong>Nível {nivel}</strong>
          <p>{xpRestante} para o próximo nível!</p>
        </div>
      </div>
    </div>
  );
}
