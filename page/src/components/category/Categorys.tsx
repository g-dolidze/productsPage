import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

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

export default function Categorys({ setSearch }) {
  return (
    <PopupState variant="dialog" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            {categoriesArray.map((category) => {
              return (
                <MenuItem
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
