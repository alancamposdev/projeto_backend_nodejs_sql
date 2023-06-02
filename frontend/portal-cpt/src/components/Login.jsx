import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ButtonSubmit from "./ButtonSubmit";
import "../assets/css/form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Faça uma requisição POST para a rota de login no backend, enviando os dados de login
    // Exemplo: axios.post('/api/alunos/login', { email, senha })
    // Trate a resposta da requisição, exibindo uma mensagem de sucesso ou erro para o usuário
  };

  return (
    <>
      <Header />
      <section className="container">
        <h2 className="title">Login</h2>
        <form onSubmit={handleLogin} className="form">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>

          <ButtonSubmit content="Entrar" />

          <div className="form_duvidas">
            <p>
              Ainda não é cadastrado? <a href="/cadastro">Cadastre aqui</a>
            </p>
            <p>
              Esqueceu sua senha? <a href="/recuperar-senha">Clique aqui</a>
            </p>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Login;
