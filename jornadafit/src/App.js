// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DesafiosPage from "./pages/DesafiosPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/desafios" element={<DesafiosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
