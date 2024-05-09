import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EscolhaFuncionalidade from './pages/EscolhaFuncionalidade';
import Home from './pages/Home';
import CadastroUsuarios from './pages/CadastroUsuarios';
import CadastroProfessores from './pages/CadastroProfessores';
import AtribuicaoAulas from './pages/AtribuicaoAulas';
import RestaurarSenha from './pages/ForgotPassword';
import Professores from './pages/Professores';
import CadastroAtribuicaoAulas from './pages/CadastroAtribuicaoAulas';
import Perfil from './pages/Perfil';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetarSenha';
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (

            <div className="App">
              <ToastContainer />
              <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cadastro-usuarios" element={<CadastroUsuarios />} />
                <Route path="/escolha-funcionalidade" element={<EscolhaFuncionalidade />} />
                <Route path="/cadastro-professores" element={<CadastroProfessores />} />
                <Route path="/atribuicao-aulas" element={<AtribuicaoAulas/>} />
                <Route path="/restaurar-senha" element={<RestaurarSenha />} />
                <Route path="/professores" element={<Professores/>} />
                <Route path="/cadastro-aulas" element={<CadastroAtribuicaoAulas/>} />
                <Route path="/perfil-usuario" element={<Perfil/>} />
                <Route path="EsqueciSenha" element={<ForgotPassword />} />
                <Route path="ResetarSenha" element={<ResetPassword />} />
              </Routes>

            </Router>
        </div>

  );
};

export default App;
