import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const categoriesArray = [
  "Televisions",
  "Accessories",
  "phone",
  "printer",
  "camera",
  "Cooler",
  "kitchen",
  "laptop",
  "safety locker",
  "inverter",
  "washing machine",
  "cleaner",
  "solars",
  "watts",
  "water geyse",
  "switch",
  "frost",
  "earphones",
  "adapter",
];

type PropsType = {
  setSearch: Function;
};
export default function Category({ setSearch }: PropsType) {
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
                    setSearch(category), popupState.close();
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
