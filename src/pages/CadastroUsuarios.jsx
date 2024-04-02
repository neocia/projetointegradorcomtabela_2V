import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import Logo from '../assets/SGCPE.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CardCargoUsuarios from "../components/CardCargoUsuarios";
import CardEscolas from "../components/CardEscolas";
import Background from '../assets/Fundo.png'

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50%',
  backgroundColor: '#f0f0f0',
};

const formContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50%',
  backgroundColor: '#e0e0e0',
};

const Fundo = `url(${Background})`;

const Home = () => {

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar sx={{ width: '50%', height: '50%' }} src={Logo} variant="square" />
      </div>
      <div style={{ width: '50%', background: Fundo }}>
        <form style={{ height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onSubmit={(e) => {
          e.preventDefault();
          // Adicione aqui a lógica de autenticação, se necessário
          window.location.href = '/SignInSide';
        }}>
          <TextField
            sx={{ marginBottom: '8px', width: '50%' }}
            label="Nome completo"
            variant="filled"
            fullWidth
          />
          <TextField
            style={{ marginBottom: '8px', width: '50%' }}
            label="RG"
            variant="filled"
            fullWidth
          />
          <TextField
            sx={{ marginBottom: '8px', width: '50%' }}
            label="Email"
            variant="filled"
            fullWidth
          />
          <TextField
            sx={{ marginBottom: '8px', width: '50%' }}
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

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
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
      </div>
    </div>
  );
};

export default Home;