import React from "react";
import "./KaizooCard.css";

export default function KaizooCard({ imagem, nivel, xpRestante }) {
  return (
    <div className="card card-mascote">
      <img src={imagem} alt="Kaizoo Mascote" className="kaia-img" />
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
