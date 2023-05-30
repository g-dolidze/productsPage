import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import i18next from "i18next";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function Language() {
  const [language, setLanguage] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{ color: "white" }}>
          language
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem onClick={() => i18next.changeLanguage("ge")}>Geo</MenuItem>
          <MenuItem onClick={() => i18next.changeLanguage("en")}>Eng</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
