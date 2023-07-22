import React from "react";
import { categoriesArray } from "../../components/category/Category";
import {
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Height } from "@mui/icons-material";
type PropsType = {
  setBrandKind: Function;
};

function BrandProducts({ setBrandKind }: PropsType) {
  const [kind, setKind] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setKind(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        width: "100px  ",
        marginTop: "50px ",
      }}
    >
      <input
        onChange={handleChange}
        type="text"
        placeholder="search"
        style={{
          backgroundColor: "white",
          padding: " 10px ",
          width: "130px ",
          border: "1px solid black ",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      />

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={kind}
          onChange={handleChange}
        >
          {categoriesArray.map((item) => {
            return (
              <MenuItem
                key={item}
                onClick={() => {
                  setBrandKind(item);
                }}
                sx={{ Heigh: "400px" }}
              >
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default BrandProducts;
