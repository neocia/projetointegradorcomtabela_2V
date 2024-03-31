import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [categoria, setCategoria] = React.useState('');

  const handleChange = (event) => {
    setCategoria(event.target.value);
  };

  return (
       <Box sx={{ minWidth: 350 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
		 style={{ marginBottom: '8px', width: '100%' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoria}
          label="Categoria"
          onChange={handleChange}
        >
          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={20}>F</MenuItem>
          <MenuItem value={30}>O</MenuItem>
          <MenuItem value={30}>V</MenuItem>
          <MenuItem value={30}>S</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}