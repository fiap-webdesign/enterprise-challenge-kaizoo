// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DesafiosPage from "./pages/DesafiosPage";
import AtividadePage from "./pages/AtividadePage";
import ProgressoPage from "./pages/ProgressoPage";
import ComunidadePage from "./pages/ComunidadePage";
import MascotesPage from "./pages/MascotesPage";
import PerfilPage from "./pages/PerfilPage";
import ConfiguracoesPage from "./pages/ConfiguracoesPage";
import AuthPage from "./pages/AuthPage";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import VLibrasWidget from "./components/VLibrasWidget";

function App() {
  return (
    <>
      <Router>
        <VLibrasWidget />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/desafios"
            element={
              <PrivateRoute>
                <DesafiosPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/atividade"
            element={
              <PrivateRoute>
                <AtividadePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/progresso"
            element={
              <PrivateRoute>
                <ProgressoPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/comunidade"
            element={
              <PrivateRoute>
                <ComunidadePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/mascotes"
            element={
              <PrivateRoute>
                <MascotesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <PrivateRoute>
                <PerfilPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/configuracoes"
            element={
              <PrivateRoute>
                <ConfiguracoesPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
