import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import i18next from "i18next";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function Language() {
  const [language, setLanguage] = React.useState("Eng");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-label" style={{ color: "white" }}>
        {language}
      </InputLabel>
      <Select
         inputProps={{ "aria-label": "Without label" }}
        id="demo-simple-select"
        onChange={handleChange}
      >
        <MenuItem
          onClick={() => {
            i18next.changeLanguage("ge"), setLanguage("Geo");
          }}
        >
          Geo
        </MenuItem>
        <MenuItem
          onClick={() => {
            i18next.changeLanguage("en"), setLanguage("Eng");
          }}
        >
          Eng
        </MenuItem>
      </Select>
    </FormControl>
  );
}
