import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar, MenuItem } from '@mui/material';
import Logo from '../assets/SGCPE.png';
import CardCargoProfessores from "../components/CardCargoProfessores";
import CardCategoriaProfessores from "../components/CardCategoriaProfessores";
import Background from '../assets/Fundo.png'
import MenuApp from '../components/MenuApp';

const Fundo = `url(${Background})`;

const Cadastro = () => {
  const [showEditModal, setShowEditModal] = useState(false); // Estado para controlar a exibição do modal de edição
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Estado para controlar a exibição do modal de exclusão
  const [selectedProfessor, setSelectedProfessor] = useState(''); // Estado para armazenar o professor selecionado

  const handleEdit = () => {
    setShowEditModal(true); // Mostrar o modal de edição ao clicar no botão de editar
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false); // Fechar o modal de edição ao clicar no botão de fechar
  };

  const handleSaveEdit = () => {
    // Adicione aqui a lógica para salvar as edições e fechar o modal de edição
    setShowEditModal(false);
  };

  const handleDelete = () => {
    setShowDeleteModal(true); // Mostrar o modal de exclusão ao clicar no botão de excluir
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false); // Fechar o modal de exclusão ao clicar no botão de fechar
  };

  const handleDeleteConfirm = () => {
    // Adicione aqui a lógica para excluir o professor e fechar o modal de exclusão
    setShowDeleteModal(false);
  };

  return (
    <>
    <MenuApp/>
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar sx={{ width: '50%', height: '50%' }} src={Logo} variant="square" />
      </div>
      <div style={{ width: '50%', background: Fundo}}>
	  
        <form style={{ height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onSubmit={(e) => {
                e.preventDefault();
                // Adicione aqui a lógica de autenticação, se necessário
                window.location.href = '/SignInSide';
              }} >
        <TextField
              sx={{ marginBottom: '8px', width: '50%'}}
              label="Nome Completo"
              variant="filled"
              fullWidth
            />
            <TextField
              sx={{ marginBottom: '8px', width: '50%'}}
              label="RG"
              variant="filled"
              fullWidth
            />
            <TextField
              style={{ marginBottom: '8px', width: '50%'}}
              label="Email"
              variant="filled"
              fullWidth
            />          
            <CardCategoriaProfessores/>
            <CardCargoProfessores/>
            
            
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
			 <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
              variant="contained"
              
            >
              Salvar
            </Button>
            <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
              variant="contained"
              onClick={handleDelete} // Adicionar a função handleDelete ao botão de excluir
            >
              Excluir
            </Button>

            <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
              variant="contained"
              onClick={handleEdit} // Adicionar a função handleEdit ao botão de editar
            >
              Editar
            </Button>
          </div>
          </form>
    </div>
  </div>

  {showEditModal && (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
        <h2>Editar Professor</h2>
        <TextField
          select
          label="Selecione um professor"
          value={selectedProfessor}
          onChange={(e) => setSelectedProfessor(e.target.value)}
          sx={{ width: '100%' }} // Ajustar a largura do ComboBox para preencher o modal
        >
          {/* Aqui você adiciona as opções para selecionar o professor */}
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
          sx={{ width: '100%' }} // Ajustar a largura do ComboBox para preencher o modal
        >
          {/* Aqui você adiciona as opções para selecionar o professor */}
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

export default Cadastro;
