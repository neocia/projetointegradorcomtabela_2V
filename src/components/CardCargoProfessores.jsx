import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [cargo, setCargo] = React.useState('');

  const handleChange = (event) => {
    setCargo(event.target.value);
  };

  return (
        <Box sx={{ minWidth: '50%'  }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
        <Select
		style={{ marginBottom: '8px', width: '100%' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cargo}
          label="Cargo"
          onChange={handleChange}
        >
          <MenuItem value={10}>D1</MenuItem>
          <MenuItem value={20}>D2</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}