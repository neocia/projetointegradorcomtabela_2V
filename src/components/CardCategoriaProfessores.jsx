import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Categoria({categoria, setCategoria}) {

  const handleChange = (event) => {
    setCategoria(event.target.value);
  };

  return (
    <Box sx={{ minWidth: "50%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          style={{ marginBottom: "8px", width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoria}
          label="Categoria"
          onChange={handleChange}
        >
          <MenuItem value={'A'}>A</MenuItem>
          <MenuItem value={'F'}>F</MenuItem>
          <MenuItem value={'O'}>O</MenuItem>
          <MenuItem value={'V'}>V</MenuItem>
          <MenuItem value={'S'}>S</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
