import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar, MenuItem, Grid } from '@mui/material';
import Logo from '../assets/SGCPE.png';
import CardCargoProfessores from "../components/CardCargoProfessores";
import CardCategoriaProfessores from "../components/CardCategoriaProfessores";
import Background from '../assets/Fundo.png'
import MenuApp from '../components/MenuApp';

const Fundo = `url(${Background})`;

const CadastroProfessores = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState('');
  const [codigoDisciplina, setcodigoDisciplina] = useState('');
  const [codigoDisciplinaError, setcodigoDisciplinaError] = useState('');
  const [rg, setRg] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [di, setDi] = React.useState('');
  const [categoria, setCategoria] = React.useState('');

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleSaveEdit = () => {
    setShowEditModal(false);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
  };

  const handlecodigoDisciplinaChange = (event) => {
    const { value } = event.target;
    setcodigoDisciplina(value);
    if (!value.includes("@")) {
      setcodigoDisciplinaError("E-mail inválido");
    } else {
      setcodigoDisciplinaError("");
    }
  };

  const handleCadastroProfessorSubmit = () => {
    // Adicione aqui a lógica de autenticação, se necessário
    
    const url = "http://localhost:3000/cadastro_professores";
    const opcoes = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({'RG': rg, nomeCompleto, codigoDisciplina }),
      
    };

    fetch(url, opcoes)
      .then((resposta) => {
        // Verificando se a requisição foi bem-sucedida
        if (resposta.ok) {
          console.log("Requisição bem-sucedida!");
          // Você pode processar a resposta da API aqui, se necessário
          window.location = "/";
          return resposta.json();
        } else {
         
          console.error("Erro ao fazer a requisição:", resposta.status);
          return resposta.json()
        }

      })
      .then((data) => {
        // Processar os dados da resposta, se necessário
        console.log("Resposta da API:", data);
        alert(data.message);
      })
      .catch((error) => {
        console.error("Erro durante a requisição:", error);
      });
  };

  return (
    <>
    <MenuApp/>
    <Grid container style={{ height: '100vh' }}>
      <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar sx={{ width: '50%', height: '50%' }} src={Logo} variant="square" />
      </Grid>
      <Grid item xs={12} sm={6} style={{ background: Fundo, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={(e) => {
          e.preventDefault();
          
        }} style={{ textAlign: 'center', width: '80%' }}>
          <TextField
            sx={{ marginBottom: '8px', width: '100%'}}
            label="Nome Completo"
            variant="filled"
            value={nomeCompleto}
            onChange={(event) => {
              setNomeCompleto(event.target.value);
            }}
            fullWidth
          />
          <TextField
            sx={{ marginBottom: '8px', width: '100%'}}
            label="RG"
            variant="filled"
            value={rg}
            onChange={(event) => {
              setRg(event.target.value);
            }}
            fullWidth
          />
          <TextField
            sx={{ marginBottom: '8px', width: '100%'}}
            label="Código da disciplina"
            variant="filled"
            fullWidth
            value={codigoDisciplina}
            onChange={handlecodigoDisciplinaChange}
            error={Boolean(codigoDisciplinaError)}
            helperText={codigoDisciplinaError}
          />
          <CardCategoriaProfessores Categoria={categoria} setCategoria={setCategoria}/>
          <CardCargoProfessores DI={di} setDi={setDi}/>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button
              style={{ marginTop: '16px', width: '30%', background: 'darkblue' }}
              variant="contained"
              onClick={handleCadastroProfessorSubmit}
            >
              Salvar
            </Button>
            <Button
              style={{ marginTop: '16px', width: '30%', background: 'darkblue' }}
              variant="contained"
              onClick={handleDelete}
            >
              Excluir
            </Button>
            <Button
              style={{ marginTop: '16px', width: '30%', background: 'darkblue' }}
              variant="contained"
              onClick={handleEdit}
            >
              Editar
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>

    {showEditModal && (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '100%' }}>
          <h2>Editar Professor</h2>
          <TextField
            select
            label="Selecione um professor"
            value={selectedProfessor}
            onChange={(e) => setSelectedProfessor(e.target.value)}
            sx={{ width: '100%' }}
          >
            <MenuItem value="professor1">Professor 1</MenuItem>
            <MenuItem value="professor2">Professor 2</MenuItem>
          </TextField>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" onClick={handleCloseEditModal}>Fechar</Button>
            <Button variant="contained" onClick={handleSaveEdit}>Editar</Button>
          </div>
        </div>
      </div>
    )}

    {showDeleteModal && (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '100%' }}>
          <h2>Excluir Professor</h2>
          <TextField
            select
            label="Selecione um professor"
            value={selectedProfessor}
            onChange={(e) => setSelectedProfessor(e.target.value)}
            sx={{ width: '100%' }}
          >
            <MenuItem value="professor1">Professor 1</MenuItem>
            <MenuItem value="professor2">Professor 2</MenuItem>
          </TextField>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" onClick={handleCloseDeleteModal}>Fechar</Button>
            <Button variant="contained" onClick={handleDeleteConfirm}>Excluir</Button>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default CadastroProfessores;
