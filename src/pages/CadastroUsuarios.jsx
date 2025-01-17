import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import Logo from '../assets/SGCPE.png';
import CardCargoUsuarios from "../components/CardCargoUsuarios";
import CardEscolas from "../components/CardEscolas";
import Background from '../assets/Fundo.png';

const Fundo = `url(${Background})`;

const CadastroUsuarios = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeCompletoError, setNomeCompletoError] = useState('');
  const [rg, setRg] = useState('');
  const [rgError, setRgError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaError, setSenhaError] = useState('');
  const [formEnviado, setFormEnviado] = useState(false);
  const [escolas, setEscolas] = React.useState("");
  const [cargo, setCargo] = React.useState("");

  const handleNomeChange = (event) => {
    const { value } = event.target;
    setNomeCompleto(value);
    if (value.trim() === '') {
      setNomeCompletoError('Nome é um campo obrigatório');
    } else {
      setNomeCompletoError('');
    }
  };

  const handleRgChange = (event) => {
    const { value } = event.target;
    setRg(value);
    if (!/^[0-9]*$/.test(value)) {
      setRgError('RG deve conter apenas números');
    } else {
      setRgError('');
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    if (!value.includes('@')) {
      setEmailError('E-mail inválido');
    } else {
      setEmailError('');
    }
  };

  const handleSenhaChange = (event) => {
    const { value } = event.target;
    setSenha(value);
    if (value.trim() === '') {
      setSenhaError('Senha é um campo obrigatório');
    } else {
      setSenhaError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Define o formulário como enviado para mostrar mensagens de erro
    setFormEnviado(true);
    // Verifica se todos os campos estão preenchidos corretamente
    if (
      nomeCompleto.trim() === '' ||
      rg.trim() === '' ||
      email.trim() === '' ||
      senha.trim() === '' ||
      !email.includes('@') ||
      !/^[0-9]*$/.test(rg)
    ) {
      return;
    }
    // Lógica de autenticação ou envio do formulário
    handleCadastroAPISubmit();
  };

  const handleCadastroAPISubmit = () => {
    // Adicione aqui a lógica de autenticação, se necessário
    
    const url = "https://nestjs-sgcpe-api.vercel.app/login_senha/register";
    const opcoes = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({'RG': rg, nomeCompleto, email, senha, 'cargoEscolar': cargo, 'nomeEscola': escolas }),
      
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
    <Grid container style={{ height: '100vh' }}>
      {/* Exibição da imagem à esquerda em telas pequenas */}
      <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar sx={{ width: '50%', height: '50%' }} src={Logo} variant="square" />
      </Grid>
      {/* Formulário à direita */}
      <Grid item xs={12} sm={6} style={{ background: Fundo, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form style={{ height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onSubmit={handleSubmit}>
          <TextField
            sx={{ marginBottom: '8px', width: '100%' }}
            label="Nome completo"
            variant="filled"
            fullWidth
            value={nomeCompleto}
            onChange={handleNomeChange}
            error={formEnviado && nomeCompleto.trim() === ''}
            helperText={(formEnviado && nomeCompleto.trim() === '') && 'Nome é um campo obrigatório'}
          />
          <TextField
            style={{ marginBottom: '8px', width: '100%' }}
            label="RG"
            variant="filled"
            fullWidth
            value={rg}
            onChange={handleRgChange}
            error={formEnviado && rg.trim() === ''}
            helperText={(formEnviado && rg.trim() === '') && 'RG é um campo obrigatório'}
          />
          <TextField
            sx={{ marginBottom: '8px', width: '100%' }}
            label="E-mail"
            variant="filled"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={formEnviado && (!email || !email.includes('@'))}
            helperText={(formEnviado && (!email || !email.includes('@'))) && 'E-mail inválido'}
          />
          <TextField
            sx={{ marginBottom: '8px', width: '100%' }}
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="filled"
            value={senha}
            onChange={handleSenhaChange}
            error={formEnviado && !senha}
            helperText={(formEnviado && !senha) && 'Senha é um campo obrigatório'}
          />
          <CardCargoUsuarios Cargo={cargo} setCargo={setCargo}/>
          <CardEscolas Escolas={escolas} setEscolas={setEscolas}/>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
              variant="contained"
              href="/"
            >
              Voltar
            </Button>

            <Button
              style={{ marginTop: '16px', width: '45%', background: 'darkblue' }}
              variant="contained"
              type="submit"
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
