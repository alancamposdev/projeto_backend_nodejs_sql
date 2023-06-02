import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ButtonSubmit from "./ButtonSubmit";
import "../assets/css/form.css";
import "../assets/css/global.css";

const CadastroAluno = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não são iguais");
      return;
    }
    // Fazer uma requisição POST para a rota de cadastro no backend, enviando os dados do aluno
    // Exemplo: axios.post('/api/alunos/cadastro', { nome, email, senha })
    // Trate a resposta da requisição, exibindo uma mensagem de sucesso ou erro para o usuário
  };

  return (
    <>
      <Header />

      <section className="container">
        <h2 className="title">Cadastro de Aluno</h2>
        <form onSubmit={handleCadastro} className="form">
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
            />
          </label>
          <label>
            Email *:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </label>
          <label>
            Senha *:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite uma senha"
              required
            />
            Confirmar a senha *:
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Digite uma senha"
            />
          </label>
          <div className="full_box">
            <input type="checkbox" name="aceite" id="" />
            <label htmlFor="aceite">
              Eu li e aceito os <a href="">termos de uso</a>
            </label>
          </div>

          <ButtonSubmit content="Cadastro" />

          <div className="form_duvidas">
            <p>
              Já é cadastrado? <a href="/login">Faça o login aqui</a>
            </p>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default CadastroAluno;
