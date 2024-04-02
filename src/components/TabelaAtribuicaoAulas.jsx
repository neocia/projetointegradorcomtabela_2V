import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const TabelaAtribuicaoAulas = () => {
  const [dados, setDados] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTurno, setSelectedTurno] = useState('');
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [turno, setTurno] = useState('');

  // Lista de 40 professores disponíveis
  const professoresDisponiveis = Array.from({ length: 40 }, (_, index) => ({ id: index + 1, name: `P${index + 1}` }));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTurnoChange = (event) => {
    setSelectedTurno(event.target.value);
    setCurrentPage(1);
    setTurno(event.target.value); // Definir o turno selecionado

    let dadosAtualizados = [];

    // Definição das turmas e horários de acordo com o turno selecionado
    if (event.target.value === 'Manhã') {
      const turmasManha = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C', '9A', '9B', '9C'];
      const horariosManha = ['07h00 - 07H45', '07h45 - 08H30', '08h30 - 09H15', '09H35 - 10H20', '10H20 - 11H05', '11H05 - 11H50', '11H50 - 12H35'];

      turmasManha.slice((currentPage - 1) * 6, currentPage * 6).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosManha, professores: Array(12).fill('') }; // 12 aulas de manhã
        dadosAtualizados.push(novaTurma);
      });
    } else if (event.target.value === 'Tarde') {
      const turmasTarde = ['6A', '6B', '6C', '6D', '7A', '7B', '7C', '7D', '8A', '8B', '8C', '8D'];
      const horariosTarde = ['13h00 - 13H45', '13h45 - 14H30', '14h30 - 15H15', '15H35 - 16H20', '16H20 - 17H05', '17H50 - 18H35'];

      turmasTarde.slice((currentPage - 1) * 6, currentPage * 6).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosTarde, professores: Array(12).fill('') }; // 12 aulas à tarde
        dadosAtualizados.push(novaTurma);
      });
    } else if (event.target.value === 'Noite') {
      const turmasNoite = ['1D', '2D', '3C', '3D', '2A1', '4A1'];
      const horariosNoite = ['19h00 - 19h45', '19h45 - 20h30', '20H45 - 21H30', '21h30 - 22H15', '22H15 - 23H00'];

      turmasNoite.slice((currentPage - 1) * 6, currentPage * 6).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosNoite, professores: Array(10).fill('') }; // 10 aulas à noite
        dadosAtualizados.push(novaTurma);
      });
    }

    setDados(dadosAtualizados);
    handleQueryChange('');
  };

  const handleEdit = (turmaIndex, professorIndex, newValue) => {
    const novosDados = [...dados];
    novosDados[turmaIndex].professores[professorIndex] = newValue ? newValue.name : '';
    setDados(novosDados);
  };

  const handleQueryChange = (value) => {
    setQuery(value);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1); // Aumentar a página atual em 1
    handlePaginate(currentPage + 1); // Atualizar os dados para a próxima página
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1); // Diminuir a página atual em 1
    handlePaginate(currentPage - 1); // Atualizar os dados para a página anterior
  };

  const handlePaginate = (page) => {
    let dadosAtualizados = [];

    // Definição das turmas e horários de acordo com o turno e a página selecionados
    if (turno === 'Manhã') {
      const turmasManha = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C', '9A', '9B', '9C'];
      const horariosManha = ['07h00 - 07H45', '07h45 - 08H30', '08h30 - 09H15', '09H35 - 10H20', '10H20 - 11H05', '11H05 - 11H50', '11H50 - 12H35'];

      turmasManha.slice((page - 1) * 6, page * 6).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosManha, professores: Array(12).fill('') }; // 12 aulas de manhã
        dadosAtualizados.push(novaTurma);
      });
    } else if (turno === 'Tarde') {
      const turmasTarde = ['6A', '6B', '6C', '6D', '7A', '7B', '7C', '7D', '8A', '8B', '8C', '8D'];
      const horariosTarde = ['13h00 - 13H45', '13h45 - 14H30', '14h30 - 15H15', '15H35 - 16H20', '16H20 - 17H05', '17H50 - 18H35'];

      turmasTarde.slice((page - 1) * 6, page * 6).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosTarde, professores: Array(12).fill('') }; // 12 aulas à tarde
        dadosAtualizados.push(novaTurma);
      });
    } else if (turno === 'Noite') {
      const turmasNoite = ['1D', '2D', '3C', '3D', '2A1', '4A1'];
      const horariosNoite = ['19h00 - 19h45', '19h45 - 20h30', '20H45 - 21H30', '21h30 - 22H15', '22H15 - 23H00'];

      turmasNoite.slice((page - 1) * 6, page * 6).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosNoite, professores: Array(10).fill('') }; // 10 aulas à noite
        dadosAtualizados.push(novaTurma);
      });
    }

    setDados(dadosAtualizados);
    handleQueryChange('');
  };

  return (
    <div>
      <div style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '16px' }}>
        <TextField
          id="date"
          label="Data"
          type="date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl style={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '16px' }}>
          <InputLabel id="turno-label">Turno</InputLabel>
          <Select
            labelId="turno-label"
            id="turno"
            value={selectedTurno}
            onChange={handleTurnoChange}
          >
            <MenuItem value={'Manhã'}>Manhã</MenuItem>
            <MenuItem value={'Tarde'}>Tarde</MenuItem>
            <MenuItem value={'Noite'}>Noite</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="Tabela de horarios">
          <TableHead style={{ background: '#77dd77', color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>
            <TableRow>
              <TableCell style={{ width: '120px' }}>Horário</TableCell>
              {dados.length > 0 && dados.map((turma, index) => (
                <TableCell key={index} align="center">{turma.turma}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dados[0]?.horarios.map((horario, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{horario}</TableCell>
                {dados.map((turma, turmaIndex) => (
                  <TableCell key={turmaIndex} align="center">
                    <div className="relative mt-1">
                      <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Autocomplete
                          options={professoresDisponiveis}
                          getOptionLabel={(option) => option.name}
                          value={turma.professores[index] ? professoresDisponiveis.find(p => p.name === turma.professores[index]) : null}
                          onChange={(event, newValue) => handleEdit(turmaIndex, index, newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Professor"
                              InputProps={{
                                ...params.InputProps,
                                className: 'w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0',
                              }}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button 
          disabled={currentPage === 1} 
          onClick={handlePrevPage}
          variant="contained"
          color="primary"
        >
          &#8592; Anterior
        </Button>
        <span style={{ margin: '0 10px', fontSize: '20px' }}>{currentPage}</span>
        <Button 
          disabled={currentPage === 2} 
          onClick={handleNextPage}
          variant="contained"
          color="primary"
        >
          Próximo &#8594;
        </Button>
      </div>
    </div>
  );
};

export default TabelaAtribuicaoAulas;
