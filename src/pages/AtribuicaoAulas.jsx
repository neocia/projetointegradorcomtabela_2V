import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TabelaAtribuicaoAulas from "../components/TabelaAtribuicaoAulas";
import { Box, Button, TextField, FormControl } from '@mui/material';
import MenuApp from "../components/MenuApp";
import Background from '../assets/Fundo.png';

const theme = createTheme();

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
        <ThemeProvider theme={theme}>
            <>
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
                    <MenuApp />
                </div>
                <Box sx={{ paddingTop: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
                    <form style={{ textAlign: 'center' }}>
                        <TabelaAtribuicaoAulas />
                        <Box mt={2} mb={2} display="flex" justifyContent="center" alignItems="center">
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
									
                                />
                            </FormControl>
                            <FormControl fullWidth style={{ marginLeft: '10px', minWidth: '50px' }}>
                                <Button variant="contained" onClick={handleSave}>Salvar</Button>
                            </FormControl>
                        </Box>
                    </form>
                </Box>
            </>
        </ThemeProvider>
    );
}
