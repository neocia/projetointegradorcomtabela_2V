import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import Logo from '../assets/SGCPE.png';
import CardCargoUsuarios from "../components/CardCargoUsuarios";
import CardEscolas from "../components/CardEscolas";
import Background from '../assets/Fundo.png'

const Fundo = `url(${Background})`;

const CadastroUsuarios = () => {

  return (
    <Grid container style={{ height: '100vh' }}>
      {/* Exibição da imagem à esquerda em telas pequenas */}
      <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar sx={{ width: '50%', height: '50%' }} src={Logo} variant="square" />
      </Grid>
      {/* Formulário à direita */}
      <Grid item xs={12} sm={6} style={{ background: Fundo, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form style={{ height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onSubmit={(e) => {
          e.preventDefault();
          // Adicione aqui a lógica de autenticação, se necessário
          window.location.href = '/SignInSide';
        }}>
          <TextField
            sx={{ marginBottom: '8px', width: '100%' }}
            label="Nome completo"
            variant="filled"
            fullWidth
          />
          <TextField
            style={{ marginBottom: '8px', width: '100%' }}
            label="RG"
            variant="filled"
            fullWidth
          />
          <TextField
            sx={{ marginBottom: '8px', width: '100%' }}
            label="E-mail"
            variant="filled"
            fullWidth
          />
          <TextField
            sx={{ marginBottom: '8px', width: '100%' }}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="filled"
          />
          <CardCargoUsuarios />
          <CardEscolas />

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
              variant="contained"
            >
              Voltar
            </Button>

            <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
              variant="contained"
            >
              Enviar
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

export default CadastroUsuarios;
