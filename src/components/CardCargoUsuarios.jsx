import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [cargo, setCargo] = React.useState("");

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
          <MenuItem value={10}>Diretor</MenuItem>
          <MenuItem value={20}>Gerente</MenuItem>
          <MenuItem value={30}>Agente de Organização</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
