import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe Routes
import EscolhaFuncionalidade from '../src/pages/EscolhaFuncionalidade';
import Home from '../src/pages/Home';
import CadastroUsuarios from '../src/pages/CadastroUsuarios';
import CadastroProfessores from '../src/pages/CadastroProfessores';
import AtribuicaoAulas from '../src/pages/AtribuicaoAulas';

function App() {
  return (
    <Router>
      <div style={{ width: '100%', height: '100%' }}>
        <Routes> {/* Envolve todos os seus componentes Route dentro de Routes */}
          <Route exact path="/" element={<Home/>} /> {/* Use 'element' em vez de 'component' */}
          <Route path="/cadastro-usuarios" element={<CadastroUsuarios />} />
          <Route path="/escolha-funcionalidade" element={<EscolhaFuncionalidade />} />
		  <Route path="/cadastro-professores" element={<CadastroProfessores />} />
		  <Route path="/atribuicao-aulas" element={<AtribuicaoAulas/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
