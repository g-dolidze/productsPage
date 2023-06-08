import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { number } from "yup";

export const categoriesArray = [
  "tv",
  "phone",
  "printer",
  "camera",
  "Cooler",
  "kitchen",
  "laptop",
  "laptop",
  "shelve",
  "inverter",
  "washing machine",
  "cleaner",
  "solars",
  "watts",
  "water geyse",
  "switch",
  "frost",
  "earphones",
  "cabels",
];

export default function Category({ setSearch }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Typography
            variant="h5"
            {...bindTrigger(popupState)}
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-130px ",
              cursor: "pointer",
            }}
          >
            Category
            <KeyboardArrowDownIcon fontSize="large" />
          </Typography>
          <Menu {...bindMenu(popupState)}>
            {categoriesArray.map((category) => {
              return (
                <MenuItem
                  key={category}
                  onClick={() => {
                    setSearch(category);
                  }}
                >
                  {category}
                </MenuItem>
              );
            })}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
