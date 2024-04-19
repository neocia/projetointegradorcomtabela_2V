import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CargoUsuarios({cargo, setCargo}) {


  const handleChange = (event) => {
    setCargo(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 350 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
        <Select
          style={{ marginBottom: "8px", width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cargo}
          label="Cargo"
          onChange={handleChange}
        >
          <MenuItem value={'Diretor'} >Diretor</MenuItem>
          <MenuItem value={'Gerente'}>Gerente</MenuItem>
          <MenuItem value={'Agente de Organização'}>Agente de Organização</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
