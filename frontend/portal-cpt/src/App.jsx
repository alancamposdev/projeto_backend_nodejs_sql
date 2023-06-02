import React from 'react';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cadastro from './components/CadastroAluno';
import Login from './components/Login';
import './assets/css/global.css';





const App = () => { 


  return (   

    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>      
    </div>
  )
}

export default App
