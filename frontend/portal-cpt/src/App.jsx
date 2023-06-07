// import React from 'react';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cadastro from './components/pages/CadastroAluno';
import Login from './components/pages/Login';
import Cursos from './components/pages/Cursos';

const App = () => { 


  return (   

    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cursos" element={<Cursos/>} />
          </Routes>
        </BrowserRouter>      
    </div>
  )
}

export default App
