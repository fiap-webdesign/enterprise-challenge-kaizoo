// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  return usuario && usuario.username ? children : <Navigate to="/" />;
}
