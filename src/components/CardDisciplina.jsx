import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Disciplinas ({disciplinas, setDisciplinas}) {


  const handleChange = (event) => {
    setDisciplinas(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 350 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Disciplinas</InputLabel>
        <Select
          style={{ marginBottom: "8px", width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={disciplinas}
          label="Disciplinas"
          onChange={handleChange}
        >
          <MenuItem value={'Disciplina A'}>Disciplina A</MenuItem>
          <MenuItem value={'Disciplina B'}>Disciplina B</MenuItem>
          <MenuItem value={'Disciplina C'}>Disciplina C</MenuItem>
          <MenuItem value={'Disciplina D'}>Disciplina D</MenuItem>
          <MenuItem value={'Disciplina E'}>Disciplina E</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
