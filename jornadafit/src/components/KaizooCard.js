// src/components/KaizooCard.js
import React from "react";
import kaiaWalking from "../img/kaiaWalking.png";
import "./KaizooCard.css";

export default function KaizooCard() {
  return (
    <div className="kaizoo-card">
      <img src={kaiaWalking} alt="Kaizoo" className="kaia-img" />
      <div className="level-footer">
        <div className="level-circle">5</div>
        <div>
          <strong>Nível 5</strong>
          <p>325XP para o próximo nível!</p>
        </div>
      </div>
    </div>
  );
}
