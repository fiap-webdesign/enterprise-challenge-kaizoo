// KaizooButton.js
import React from "react";
import { Link } from "react-router-dom";
import "./KaizooButton.css"; // Se estiver usando CSS separado

export default function KaizooButton({
  to,
  onClick,
  children,
  type = "highlight",
}) {
  const className = `kaizoo-btn ${type}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
