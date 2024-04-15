import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Escolas ({escolas, setEscolas}) {
  // const [escolas, setEscolas] = React.useState("");

  const handleChange = (event) => {
    setEscolas(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 350 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Escolas</InputLabel>
        <Select
          style={{ marginBottom: "8px", width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={escolas}
          label="Escolas"
          onChange={handleChange}
        >
          <MenuItem value={'Escola A'}>Escola A</MenuItem>
          <MenuItem value={'Escola B'}>Escola B</MenuItem>
          <MenuItem value={'Escola C'}>Escola C</MenuItem>
          <MenuItem value={'Escola D'}>Escola D</MenuItem>
          <MenuItem value={'Escola E'}>Escola E</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
