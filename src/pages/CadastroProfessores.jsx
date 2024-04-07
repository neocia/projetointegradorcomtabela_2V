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
          window.location.href = '/SignInSide';
        }} style={{ textAlign: 'center', width: '80%' }}>
          <TextField
            sx={{ marginBottom: '8px', width: '100%'}}
            label="Nome Completo"
            variant="filled"
            fullWidth
          />
          <TextField
            sx={{ marginBottom: '8px', width: '100%'}}
            label="RG"
            variant="filled"
            fullWidth
          />
          <TextField
            sx={{ marginBottom: '8px', width: '100%'}}
            label="Email"
            variant="filled"
            fullWidth
          />          
          <CardCategoriaProfessores/>
          <CardCargoProfessores/>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
              variant="contained"
            >
              Salvar
            </Button>
            <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
              variant="contained"
              onClick={handleDelete}
            >
              Excluir
            </Button>
            <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
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
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
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
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
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