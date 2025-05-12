import React from "react";
import "./FeedCard.css";

export default function FeedCard({
  avatar,
  nome,
  tempo,
  banner,
  xp,
  texto,
  recompensa,
  duracao,
  atividade,
  emojiFeedback,
  feedbackTexto,
  curtidas,
  comentarios,
}) {
  return (
    <div className="feed-card">
      <div className="feed-header-post">
        <div className="feed-user-block">
          <img src={avatar} alt={nome} className="feed-avatar" />
          <div className="feed-user-info">
            <span className="feed-user">{nome}</span>
            <small className="tempo">{tempo}</small>
          </div>
        </div>
        <div className="feed-xp-badge">{xp} XP</div>
      </div>

      <img src={banner} alt="Banner de atividade" className="feed-img" />

      <p className="feed-texto">{texto}</p>

      <div className="info">
        <span>Recompensa: {recompensa}</span>
        <span>Tempo: {duracao}</span>
        <span>
          Atividade: <strong>{atividade}</strong>
        </span>
      </div>

      <div className="emoji-feedback">
        {emojiFeedback} {feedbackTexto}
      </div>

      <div className="feed-reactions">
        <span>❤️ {curtidas}</span>
        <span>💬 {comentarios}</span>
      </div>
    </div>
  );
}
