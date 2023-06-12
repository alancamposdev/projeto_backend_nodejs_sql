<h1 align="center"> Backend_NodeJs com SQL</h1>
<p>Professor: Orlando Fonseca Guilarte</p>

<br>

<p align="center">
  <a href="#-projeto"> Projeto </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias"> Tecnologias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagrama"> Diagramas </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>
</p>

<br>

## 💻 Projeto: Portal CPT "Conhecimento Para Todos"

> Status: em desenvolvimento


Um projeto de uma organização filantrópica fictícia, que pretende levar conhecimento
sobre diversas áreas às pessoas que buscam entrar no mercado de trabalho.

<br>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJs]() _ para desenvolver a API.
- [NPM - Node Package Manager ]() _ como gerenciador de pacotes.
    - Backend 
      - [Express](https://expressjs.com/pt-br/) _ framework para as rotas
      - [Nodemon](https://www.npmjs.com/package/nodemon) _ ferramenta para reiniciar o servidor automaticamente.
      - [Dotenv](https://www.npmjs.com/package/dotenv) _ modulo para carregar as variaveis de ambiente em um arquivo `.env`
      - [Mariadb](https://www.npmjs.com/package/mariadb) _ dependencia para conectar com o banco de dados MariaDB;
      - [Sequelize](https://www.npmjs.com/package/sequelize) _ para modelagem do banco de dadosd

- [React]() _ biblioteca JS para o frontend

<br>

## 🚀 Como executar
  <br>
  * Clone o repositório no seu PC :

  ```git
  git clone https://github.com/alancamposdev/projeto_backend_nodejs_sql.git 
  ```  
  <br> 

Para rodar o  _FRONT END_  entre na pasta com o comando no terminal ` cd projeto_backend_node_sql/frontend/portal-cpt `

e use o comando 
```shell
npm install ; npm run dev
``` 

Irá iniciar o servidor do REACT. \
A aplicação pode ser acessada em http://localhost:5173/


---

<br>

Para rodar o __BACK END__ o servidor da API, no terminal entre na pasta `cd projeto_backend_node_sql/backend/api-portal-cpt` e use comando: 

``` 
npm install ; npm start
```
Irá iniciar o servidor do EXPRESS/NODE.\
A aplicação pode ser acessada em http://localhost:3000/


<br>

## 🛢 Banco de dados

banco de dados usado no projeto é o _Mariadb_ .

Para a construção, mapeamento e atualização de esquemas de banco de dados com estrutura __Mapeamento objeto-relacional ORM__ usei o _SequelizeJS_ .

...

<br>

## 📌 Rotas da aplicação

_ http://localhost:3000/cursos \
_ http://localhost:3000/usuarios

...


