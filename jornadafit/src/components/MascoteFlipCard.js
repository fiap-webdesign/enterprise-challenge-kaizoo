import React, { useState } from "react";
import "./MascoteFlipCard.css";

export default function MascoteFlipCard({ frontImage, backImage, alt }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card ${flipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <button className="flip-btn" onClick={() => setFlipped(true)}>
            VER PERSONALIDADE
          </button>
        </div>
        <div className="flip-card-back">
          <img src={backImage} alt={alt} className="card-back-img" />
          <button className="flip-btn" onClick={() => setFlipped(false)}>
            VOLTAR
          </button>
        </div>
      </div>
    </div>
  );
}
