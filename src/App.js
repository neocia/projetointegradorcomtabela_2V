import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe Routes
import EscolhaFuncionalidade from '../src/pages/EscolhaFuncionalidade';
import Home from '../src/pages/Home';
import CadastroUsuarios from '../src/pages/CadastroUsuarios';
import SignInSide from '../src/pages/SignInSide';
import CadastroProfessores from '../src/pages/CadastroProfessores';
import TabelaProfessores from '../src/pages/AtribuicaoAulas';

function App() {
  return (
    <Router>
      <div style={{ width: '100%', height: '100%' }}>
        <Routes> {/* Envolve todos os seus componentes Route dentro de Routes */}
          <Route exact path="/" element={<SignInSide />} /> {/* Use 'element' em vez de 'component' */}
          <Route path="/cadastro-usuarios" element={<CadastroUsuarios />} />
          <Route path="/escolha-funcionalidade" element={<EscolhaFuncionalidade />} />
          <Route path="/home" element={<Home />} />
		  <Route path="/cadastro-professores" element={<CadastroProfessores />} />
		  <Route path="/tabela-professores" element={<TabelaProfessores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
