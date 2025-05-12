import React, { useState } from "react";
import "./AuthPage.css";
import mascotesImg from "../img/successMascots.png";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [modo, setModo] = useState("cadastro");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    nascimento: "",
    senha: "",
    confirmarSenha: "",
    login: "",
    loginSenha: "",
  });
  const [erroLogin, setErroLogin] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const novoUsuario = {
      username: formData.username,
      email: formData.email,
      nascimento: formData.nascimento,
      senha: formData.senha,
    };

    localStorage.setItem("usuario", JSON.stringify(novoUsuario));
    alert("Conta criada com sucesso!");
    setModo("login");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const dadosSalvos = JSON.parse(localStorage.getItem("usuario"));
    if (
      dadosSalvos &&
      (formData.login === dadosSalvos.username ||
        formData.login === dadosSalvos.email) &&
      formData.loginSenha === dadosSalvos.senha
    ) {
      navigate("/home");
    } else {
      setErroLogin("Usuário ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <>
      <Header hideSidebarToggle hideNotificationIcon />
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-form">
            <div className="auth-tabs">
              <button
                className={modo === "cadastro" ? "active" : ""}
                onClick={() => {
                  setModo("cadastro");
                  setErroLogin("");
                }}
              >
                Cadastrar
              </button>
              <button
                className={modo === "login" ? "active" : ""}
                onClick={() => {
                  setModo("login");
                  setErroLogin("");
                }}
              >
                Fazer Login
              </button>
            </div>

            {modo === "cadastro" ? (
              <form onSubmit={handleCadastro}>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="e-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  placeholder="Data de nascimento"
                  name="nascimento"
                  value={formData.nascimento}
                  onChange={handleChange}
                />
                <div className="input-row">
                  <input
                    type="password"
                    placeholder="senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    placeholder="confirmar senha"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn-highlight">Criar Conta</button>
              </form>
            ) : (
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  placeholder="username ou e-mail"
                  name="login"
                  value={formData.login}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="senha"
                  name="loginSenha"
                  value={formData.loginSenha}
                  onChange={handleChange}
                />
                {erroLogin && (
                  <div style={{ color: "#ff6961", fontWeight: "bold" }}>
                    {erroLogin}
                  </div>
                )}
                <button className="btn-highlight">Entrar</button>
              </form>
            )}
          </div>

          <div className="auth-banner">
            <h2>
              Seja
              <br />
              <strong>Bem vindo!</strong>
            </h2>
            <img src={mascotesImg} alt="Mascotes" />
          </div>
        </div>
      </div>
    </>
  );
}
