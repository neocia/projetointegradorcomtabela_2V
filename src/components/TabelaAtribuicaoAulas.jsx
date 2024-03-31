import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const TabelaAtribuicaoAulas = () => {
  const people = [
    { id: 1, name: 'Professor 1' },
    { id: 2, name: 'Professor 2' },
    { id: 3, name: 'Professor 3' },
    { id: 4, name: 'Eventual  1' },
    { id: 5, name: 'Eventual  2' },
    { id: 6, name: 'Eventual  3' },
  ];

  const [dados, setDados] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTurno, setSelectedTurno] = useState('');
  const [query, setQuery] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTurnoChange = (event) => {
    setSelectedTurno(event.target.value);
    let dadosAtualizados = [];

    if (event.target.value === 'Manhã') {
      const turmasManha = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C', '9A', '9B', '9C'];
      const horariosManha = ['07h00 - 07H45', '07h45 - 08H30', '08h30 - 09H15', '09H35 - 10H20', '10H20 - 11H05', '11H05 - 11H50', '11H50 - 12H35'];

      turmasManha.forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosManha };
        dadosAtualizados.push(novaTurma);
      });
    } else if (event.target.value === 'Tarde') {
      const turmasTarde = ['6A', '6B', '6C', '6D', '7A', '7B', '7C', '7D', '8A', '8B', '8C', '8D'];
      const horariosTarde = ['13h00 - 13H45', '13h45 - 14H30', '14h30 - 15H15', '15H35 - 16H20', '16H20 - 17H05', '17H50 - 18H35'];

      turmasTarde.forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosTarde };
        dadosAtualizados.push(novaTurma);
      });
    } else if (event.target.value === 'Noite') {
      const turmasNoite = ['1D', '2D', '3C', '3D', '2A1', '4A1'];
      const horariosNoite = ['19h00 - 19h45', '19h45 - 20h30', '20H45 - 21H30', '21h30 - 22H15', '22H15 - 23H00'];

      turmasNoite.forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosNoite };
        dadosAtualizados.push(novaTurma);
      });
    }

    setDados(dadosAtualizados);
    handleQueryChange('');
  };

  const handleEdit = (id, campo, valor) => {
    const novosDados = dados.map(item => {
      if (item.id === id) {
        return { ...item, [campo]: valor };
      }
      return item;
    });
    setDados(novosDados);
  };

  const handleQueryChange = (value) => {
    setQuery(value);
  };

  const filteredPeople =
    query === ''
      ? []
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

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
              <TableCell>Horário</TableCell>
              {dados.length > 0 && dados.map((turma, index) => (
                <TableCell key={index} align="center">{turma.turma}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dados[0]?.horarios.map((horario, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{horario}</TableCell>
                {dados.map((turma, idx) => (
                  <TableCell key={idx} align="center">
                    <div className="relative mt-1">
                      <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        
                        <Autocomplete
                          options={people}
                          getOptionLabel={(option) => option.name}
                          value={turma.professor}
                          onChange={(event, newValue) => handleEdit(turma.id, `professor${idx}`, newValue ? newValue.name : '')}
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
    </div>
  );
};

export default TabelaAtribuicaoAulas;
