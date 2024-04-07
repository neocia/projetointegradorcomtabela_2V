import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../assets/SGCPE.png';
import LockResetIcon from '@mui/icons-material/LockReset';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.sgcpe.com.br/">
                SGCPE
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function RestaurarSenha() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                    }}
                >
                    <img src={Logo} alt="SGCPE" style={{ maxWidth: '80%', height: 'auto' }} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f0f0f0', // Altere a cor de fundo conforme necessário
                        padding: '20px',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockResetIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Recuperação de senha
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 1 }}
                        onSubmit={(e) => {
                            e.preventDefault();
                            // Adicione aqui a lógica de autenticação, se necessário
                            window.location.href = '/';
                        }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="E-mail"
                            label="E-mail"
                            name="E-mail"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Recuperar Senha
                        </Button>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
