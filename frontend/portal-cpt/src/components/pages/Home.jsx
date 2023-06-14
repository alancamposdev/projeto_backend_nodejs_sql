// import React from 'react'
import Header from "../Header";
import Footer from "../Footer";
import Button from "../Button";
import "../../assets/css/global.css";
import "../../assets/css/home.css";

const Home = () => {
  return (
    <>
      <Header />

      <section className="home">
        <div className="banner"></div>
        <div className="container">

          <h2 className="title">Bem vindo ao Portal CPT!</h2>
          <h3 className="subtitle">Quem somos!?</h3>
          <p>
            Somos a CPT, uma organização filantrópica que visa a inclusão digital
            de pessoas de baixa renda. Nossa missão é levar conhecimento para
            todos, independente de classe social, raça, gênero ou religião.
            Disponibilizamos cursos gratuitos de programação, para que todos
            possam aprender e se desenvolver. Nossa plataforma é gratuita e aberta
            para todos que desejam aprender.
          </p>

          <h3 className="subtitle">Como funciona!?</h3>

          <p>
            Para ter acesso aos cursos, basta se cadastrar em nosso portal e
            começar a estudar. Nossos cursos são divididos em módulos, e cada
            módulo possui uma quantidade de aulas. Ao final de cada módulo, você
            poderá fazer uma avaliação para testar seus conhecimentos. Ao
            finalizar todos os módulos de um curso, você receberá um certificado
            de conclusão.
          </p>

          <h3 className="subtitle">Quais cursos estão disponíveis!?</h3>

          <p>Atualmente, temos os seguintes cursos disponíveis:</p>

          <ul className="home_list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Lógica de Progamação</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Entre outros</li>
          </ul>

          <h3 className="subtitle">
            Eai, gostou!? Faça seu cadastro gratuito e tenha acesso aos cursos
          </h3>

          <Button content="Cadastre aqui" href="/cadastro" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
