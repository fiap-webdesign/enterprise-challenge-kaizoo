import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DesafiosPage from "./pages/DesafiosPage";
import AtividadePage from "./pages/AtividadePage";
import ProgressoPage from "./pages/ProgressoPage";
import ComunidadePage from "./pages/ComunidadePage";
import MascotesPage from "./pages/MascotesPage";
import PerfilPage from "./pages/PerfilPage";
import ConfiguracoesPage from "./pages/ConfiguracoesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/desafios" element={<DesafiosPage />} />
        <Route path="/atividade" element={<AtividadePage />} />
        <Route path="/progresso" element={<ProgressoPage />} />
        <Route path="/comunidade" element={<ComunidadePage />} />
        <Route path="/mascotes" element={<MascotesPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/configuracoes" element={<ConfiguracoesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/atividade" element={<AtividadePage />} />
      </Routes>
    </Router>
  );
}

export default App;
