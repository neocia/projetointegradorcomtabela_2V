import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import Logo from '../assets/SGCPE.png';

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

  
const Home = () => {
  return (
  <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row' }}>
    <div style={{width: '50%',  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Avatar sx={{width: '50%', height: '50%'}} src={Logo}  variant="square"/>
    </div>
    <div style={{width: '50%', background: 'linear-gradient(0deg, rgba(9,9,100,1) 0%, rgba(251,156,19,1) 100%)'}}>
        <form style={{height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <TextField
              sx={{ marginBottom: '8px', width: '50%'}}
              label="RG"
              variant="filled"
              fullWidth
            />
            <TextField
              style={{ marginBottom: '8px', width: '50%'}}
              label="Senha"
              variant="filled"
              fullWidth
            />
            <Button
              style={{ marginTop: '16px', width: '50%', background: 'darkblue'}}
              variant="contained"
            >
              Enviar
            </Button>
          </form>
    </div>
    </div>
  );
};

export default Home;
