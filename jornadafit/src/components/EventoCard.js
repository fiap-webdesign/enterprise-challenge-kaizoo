import React from "react";
import "./EventoCard.css";

export default function EventoCard({
  titulo,
  descricao,
  recompensa,
  data,
  local,
}) {
  return (
    <div className="evento-card">
      <div className="evento-header">
        <span className="icone-evento">📅</span>
        <strong>{titulo}</strong>
      </div>
      <p>{descricao}</p>
      <p>
        <strong>Recompensa:</strong> {recompensa}
      </p>
      <p>
        <strong>Data:</strong> {data}
      </p>
      {local && (
        <p>
          <strong>Local:</strong> <span className="evento-local">{local}</span>
        </p>
      )}
      <button className="botao-evento">Participar do Evento</button>
    </div>
  );
}
