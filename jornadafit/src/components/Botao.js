// src/components/Botao.js
import React from "react";
import "./Botao.css";

export default function Botao({
  tipo = "primary",
  onClick,
  children,
  ...props
}) {
  return (
    <button className={`botao ${tipo}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
