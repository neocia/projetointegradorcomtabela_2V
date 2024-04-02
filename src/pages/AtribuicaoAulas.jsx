import React from "react";
import TabelaAtribuicaoAulas from "../components/TabelaAtribuicaoAulas";
import { Avatar, Box, Button, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Logo from '../assets/SGCPE.png';
import Background from '../assets/Fundo.png';

const Fundo = `url(${Background})`;

export default function AtribuicaoAulas() {
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');

    const handleSave = () => {
        // Adicionar lógica para salvar as datas selecionadas
    };

    const handleDateChange = (date, type) => {
        if (type === 'start') {
            setStartDate(date);
        } else {
            setEndDate(date);
        }
    };

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '25%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar sx={{ width: '50%', height: '50%' }} src={Logo} variant="square" />
            </div>
            <div style={{ width: '75%', padding: '30px', background: Fundo }}>
                <form style={{ height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <TabelaAtribuicaoAulas />
                    <Box mt={2} mb={2} display="flex" justifyContent="space-between" alignItems="center" width="100%">
                        <FormControl fullWidth style={{ marginRight: '10px' }}>

                            <TextField
                                id="startDate"
                                label="Data de Início"
                                type="date"
                                value={startDate}
                                onChange={(e) => handleDateChange(e.target.value, 'start')}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ backgroundColor: 'white', fontWeight: 'bold', fontSize: '16px' }} // Adiciona a cor de fundo branca
                            />
                        </FormControl>
                        <FormControl fullWidth style={{ marginLeft: '10px' }}>

                            <TextField
                                id="endDate"
                                label="Data de Fim"
                                type="date"
                                value={endDate}
                                onChange={(e) => handleDateChange(e.target.value, 'end')}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ backgroundColor: 'white', fontWeight: 'bold', fontSize: '16px' }} // Adiciona a cor de fundo branca
                            />
                        </FormControl>
                    </Box>
                    <Button variant="contained" onClick={handleSave}>Salvar</Button>
                </form>
            </div>
        </div>
    );
}
