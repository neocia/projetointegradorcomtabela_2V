import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import Logo from '../assets/SGCPE.png';
import CardCargoProfessores from "../components/CardCargoProfessores";
import CardCategoriaProfessores from "../components/CardCategoriaProfessores";
import Background from '../assets/Fundo.png'
import MenuApp from '../components/MenuApp';

const Fundo = `url(${Background})`;

const Cadastro = () => {
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
              Excluir
            </Button>

            <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
              variant="contained"
            >
              Cadastrar
            </Button>
          </div>
          </form>
    </div>
  </div>
  </>
  );
};

export default Cadastro;
