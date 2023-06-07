import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';

const Cursos = () => {

  //const [curso, setCurso] = useState("");
  // const [descricao, setDescricao] = useState("");
  // const [cargaHoraria, setCargaHoraria] = useState(""); 
  // const [categoria, setCategoria] = useState("");
  // const [imagem, setImagem] = useState("");

  try {
      axios.get('http://localhost:3002/cursos')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error))

  }catch (error) {console.error(error);} 

  const handleCurso = (e) => {

    e.preventDefault();    

    

   
  };
  

  return (
    <>
    <Header/>
    <section>
      {/* Seção de cursos para os alunos logados  */}
      <div className='heading'>
        <h2>Bem vindo usuário !</h2>
        <h1>Portal CPT - Area de Cursos</h1>
        
        <h2>Escolha o curso desejado e inscreva-se:</h2>
        <div className='cursos'>
          {/* cards com todos os cursos disponiveis  */}

          <div className="card">
            <img src="" alt="" />
            <h3>Nome do curso</h3>
            <p>Descrição.......</p>            
            <a href="">Iniciar</a>
          </div>
          <div className="card">
            <img src="" alt="" />
            <h3>Nome do curso</h3>
            <p>Descrição.......</p>            
            <a href="">Iniciar</a>
          </div>
          <div className="card">
            <img src="" alt="" />
            <h3>Nome do curso</h3>
            <p>Descrição.......</p>            
            <a href="">Iniciar</a>
          </div>

        
        </div>

      </div>
      
      
    </section>
    <Footer/>
    </>
  )
}

export default Cursos
