import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DI({di, setDi}) {

  const handleChange = (event) => {
    setDi(event.target.value);
  };

  return (
    <Box sx={{ minWidth: "50%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">DI</InputLabel>
        <Select
          style={{ marginBottom: "8px", width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={di}
          label="DI"
          onChange={handleChange}
        >
          <MenuItem value={'D1'}>D1</MenuItem>
          <MenuItem value={'D2'}>D2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
