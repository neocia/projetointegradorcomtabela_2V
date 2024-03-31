import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [escolas, setEscolas] = React.useState('');

  const handleChange = (event) => {
    setEscolas(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 350 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Escolas</InputLabel>
        <Select
		  style={{ marginBottom: '8px', width: '100%' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={escolas}
          label="Escolas"
          onChange={handleChange}
        >
          <MenuItem value={10}>Escola A</MenuItem>
          <MenuItem value={20}>Escola B</MenuItem>
          <MenuItem value={30}>Escola C</MenuItem>
          <MenuItem value={30}>Escola D</MenuItem>
          <MenuItem value={30}>Escola E</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}