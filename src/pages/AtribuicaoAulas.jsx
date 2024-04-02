import React from "react";
import TabelaAtribuicaoAulas from "../components/TabelaAtribuicaoAulas";
import { Avatar } from '@mui/material';
import Logo from '../assets/SGCPE.png';
import Background from '../assets/Fundo.png';

const Fundo = `url(${Background})`;

export default function AtribuicaoAulas() {
    return(
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row' }}>
			<div style={{ width: '100%', padding: '30px' ,background: Fundo}}>
	  
				<form style={{ height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 	'center' }} onSubmit={(e) => {
						e.preventDefault();
						// Adicionar aqui a lógica de autenticação
						window.location.href = '/SignInSide';
					}} >
					<TabelaAtribuicaoAulas/>
				</form>
			</div>
		</div>
    );
}