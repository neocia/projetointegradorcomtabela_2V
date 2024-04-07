import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'DodgerBlue',
    color: theme.palette.common.white,
    fontWeight: 'bold',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TabelaAtribuicaoAulas = () => {
  const [dados, setDados] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTurno, setSelectedTurno] = useState('');
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [turno, setTurno] = useState('');
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    if (isSmallScreen) {
      setCurrentPage(1);
    }
  }, [isSmallScreen]);

  const itemsPerPage = isSmallScreen ? 3 : 6;

  const professoresDisponiveis = Array.from({ length: 40 }, (_, index) => ({ id: index + 1, name: `P${index + 1}` }));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTurnoChange = (event) => {
    setSelectedTurno(event.target.value);
    setCurrentPage(1);
    setTurno(event.target.value);

    let dadosAtualizados = [];

    if (event.target.value === 'Manhã') {
      const turmasManha = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C', '9A', '9B', '9C'];
      const horariosManha = ['07h00 - 07H45', '07h45 - 08H30', '08h30 - 09H15', '09H35 - 10H20', '10H20 - 11H05', '11H05 - 11H50', '11H50 - 12H35'];

      turmasManha.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosManha, professores: Array(12).fill('') };
        dadosAtualizados.push(novaTurma);
      });
    } else if (event.target.value === 'Tarde') {
      const turmasTarde = ['6A', '6B', '6C', '6D', '7A', '7B', '7C', '7D', '8A', '8B', '8C', '8D'];
      const horariosTarde = ['13h00 - 13H45', '13h45 - 14H30', '14h30 - 15H15', '15H35 - 16H20', '16H20 - 17H05', '17H50 - 18H35'];

      turmasTarde.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosTarde, professores: Array(12).fill('') };
        dadosAtualizados.push(novaTurma);
      });
    } else if (event.target.value === 'Noite') {
      const turmasNoite = ['1D', '2D', '3C', '3D', '2A1', '4A1'];
      const horariosNoite = ['19h00 - 19h45', '19h45 - 20h30', '20H45 - 21H30', '21h30 - 22H15', '22H15 - 23H00'];

      turmasNoite.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosNoite, professores: Array(10).fill('') };
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
    setCurrentPage(currentPage + 1);
    handlePaginate(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    handlePaginate(currentPage - 1);
  };

  const handlePaginate = (page) => {
    let dadosAtualizados = [];

    if (turno === 'Manhã') {
      const turmasManha = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C', '9A', '9B', '9C'];
      const horariosManha = ['07h00 - 07H45', '07h45 - 08H30', '08h30 - 09H15', '09H35 - 10H20', '10H20 - 11H05', '11H05 - 11H50', '11H50 - 12H35'];

      turmasManha.slice((page - 1) * itemsPerPage, page * itemsPerPage).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosManha, professores: Array(12).fill('') };
        dadosAtualizados.push(novaTurma);
      });
    } else if (turno === 'Tarde') {
      const turmasTarde = ['6A', '6B', '6C', '6D', '7A', '7B', '7C', '7D', '8A', '8B', '8C', '8D'];
      const horariosTarde = ['13h00 - 13H45', '13h45 - 14H30', '14h30 - 15H15', '15H35 - 16H20', '16H20 - 17H05', '17H50 - 18H35'];

      turmasTarde.slice((page - 1) * itemsPerPage, page * itemsPerPage).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosTarde, professores: Array(12).fill('') };
        dadosAtualizados.push(novaTurma);
      });
    } else if (turno === 'Noite') {
      const turmasNoite = ['1D', '2D', '3C', '3D', '2A1', '4A1'];
      const horariosNoite = ['19h00 - 19h45', '19h45 - 20h30', '20H45 - 21H30', '21h30 - 22H15', '22H15 - 23H00'];

      turmasNoite.slice((page - 1) * itemsPerPage, page * itemsPerPage).forEach(turma => {
        const novaTurma = { turma, isEdit: false, horarios: horariosNoite, professores: Array(10).fill('') };
        dadosAtualizados.push(novaTurma);
      });
    }

    setDados(dadosAtualizados);
    handleQueryChange('');
  };

  return (
   <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '500px', maxWidth: '1200px' }}>
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
          <TableHead>
            <TableRow >
              <StyledTableCell style={{width: '100px'}}>Horário</StyledTableCell>
              {dados.length > 0 && dados.map((turma, index) => (
                <StyledTableCell key={index} align="center">{turma.turma}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dados[0]?.horarios.map((horario, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">{horario}</StyledTableCell>
                {dados.map((turma, turmaIndex) => (
                  <StyledTableCell key={turmaIndex} align="center">
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
                  </StyledTableCell>
                ))}
              </StyledTableRow>
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
          disabled={dados.length < itemsPerPage}
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
