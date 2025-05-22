import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import "./ConfiguracoesPage.css";
import { useNavigate } from "react-router-dom";

export default function ConfiguracoesPage() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    username: "",
    email: "",
    nascimento: "",
    senha: "",
  });

  const [notificacoes, setNotificacoes] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("usuario"));
    if (dadosSalvos) {
      setUsuario(dadosSalvos);
    }
  }, []);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSalvar = () => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Alterações salvas com sucesso!");
  };

  const handleExcluirConta = () => {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita."
    );
    if (confirmar) {
      localStorage.removeItem("usuario");
      localStorage.removeItem("kaizoo");
      navigate("/");
    }
  };

  const handleAlterarSenha = () => {
    setErroSenha("");
    if (senhaAtual !== usuario.senha) {
      setErroSenha("Senha atual incorreta.");
      return;
    }
    if (novaSenha !== confirmarNovaSenha) {
      setErroSenha("As novas senhas não coincidem.");
      return;
    }

    const atualizado = { ...usuario, senha: novaSenha };
    localStorage.setItem("usuario", JSON.stringify(atualizado));
    setUsuario(atualizado);
    setShowModal(false);
    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarNovaSenha("");
    alert("Senha alterada com sucesso!");
  };

  return (
    <Layout>
      <div className="config-container">
        <h2 className="config-title">Configurações</h2>

        <div className="config-section">
          <h3>🧑 Minha conta</h3>
          <label>
            Nome de usuário
            <input
              name="username"
              value={usuario.username}
              onChange={handleChange}
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={usuario.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Data de nascimento
            <input
              type="date"
              name="nascimento"
              value={usuario.nascimento}
              disabled
            />
          </label>
          <button
            className="btn-secondary mt-1"
            onClick={() => setShowModal(true)}
          >
            Alterar senha
          </button>
        </div>

        <div className="config-section">
          <h3>⚙️ Preferências</h3>
          <label>
            <input
              type="checkbox"
              checked={notificacoes}
              onChange={() => setNotificacoes(!notificacoes)}
            />
            Receber notificações
          </label>
        </div>

        <div className="config-section">
          <button className="btn-highlight" onClick={handleSalvar}>
            Salvar atualizações
          </button>
        </div>

        <div className="config-section danger-zone">
          <h3>🗑 Outros</h3>
          <button className="btn-danger" onClick={handleExcluirConta}>
            Excluir minha conta
          </button>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Alterar senha</h3>
              <label>
                Senha atual
                <input
                  type="password"
                  value={senhaAtual}
                  onChange={(e) => setSenhaAtual(e.target.value)}
                />
              </label>
              <label>
                Nova senha
                <input
                  type="password"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                />
              </label>
              <label>
                Confirmar nova senha
                <input
                  type="password"
                  value={confirmarNovaSenha}
                  onChange={(e) => setConfirmarNovaSenha(e.target.value)}
                />
              </label>
              {erroSenha && (
                <div style={{ color: "#e74c3c", marginBottom: "1rem" }}>
                  {erroSenha}
                </div>
              )}
              <div className="modal-actions">
                <button
                  className="btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button className="btn-highlight" onClick={handleAlterarSenha}>
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
