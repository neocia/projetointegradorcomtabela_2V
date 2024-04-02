import React from 'react';
import Logo from '../assets/SGCPE.png';
import Figura1 from '../assets/sala.png'
import Figura2 from '../assets/coruja.png'
import Fundo from '../assets/Fundo.png'
import CardFuncionalidade from "../components/CardFuncionalidade";

export default function EscolhaFuncionalidade() {
    return (
        <div 
            style={{
                width: '100vw', 
                height: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                backgroundImage: `url(${Fundo})`, // Adiciona a imagem de fundo
                backgroundSize: 'cover', // Garante que a imagem de fundo cubra toda a área
                backgroundPosition: 'center', // Centraliza a imagem de fundo
            }}
        >
            <div style={{ 
                width: '30%', 
                height: '60%', 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignContent: 'center' 
            }}>
                <CardFuncionalidade img={Figura1} header='Atribuição de Aulas' url={'/atribuicao-aulas'} />
            </div>
            <div style={{ 
                width: '30%', 
                height: '60%', 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignContent: 'center' 
            }}>
                <CardFuncionalidade img={Figura2} header='Cadastro de Professores' url={'/cadastro-professores'} />
            </div>
        </div>
    );
}