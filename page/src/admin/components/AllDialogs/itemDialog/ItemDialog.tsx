import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DeleteItemfromApi } from "../../../../Helpers/admin/AdminRequest";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import EditDialog from "../editDialog/EditDialog";

type PropsType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: Prodact;
};

const ItemDialog = (props: PropsType) => {
  const { open, setOpen, item } = props;
  const [openEditItem, setOpenEditItem] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <h1>{item?.brand} </h1>
              <img src={item.images?.[0]} alt="" />
              <div>
                {item.images.map((image, i) => {
                  return <img src={image} width={"60px"} key={i} />;
                })}
              </div>
              <h3>
                model: <span>{item?.title}</span>{" "}
              </h3>
              <h3>
                raiting: <span>{item.description}</span>{" "}
              </h3>
              <h3>
                price: <span> {item.price}</span>
              </h3>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button
            onClick={() => {
              setOpenEditItem(true), setOpen(false);
            }}
            autoFocus
          >
            edit
          </Button>
        </DialogActions>
      </Dialog>
      <EditDialog
        open={openEditItem}
        setOpen={setOpenEditItem}
        product={item}
      />
    </div>
  );
};
export default ItemDialog;
