import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import Confirm from "../confirmDialog";

interface Products {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  brand: string;
  price: number;
  rating: string;
  amount: string;
  brands: string;
}

const initialValues = {
  id: "",
  title: "",
  description: "",
  category: "",
  images: [""],
  brand: "",
  price: 0,
  rating: "",
  amount: "",
  brands: "",
};
type PropsType = {
  product: Prodact;
  setOpen: Function;
  open: boolean;
};

const EditDialog = (props: PropsType) => {
  const { open, setOpen, product } = props;
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [editedItem, steEditedItem] = useState<Products>();

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    values,
    handleChange,
    setFieldValue,
    handleSubmit,
    errors,
    touched,
    submitForm,
  } = useFormik({
    initialValues,
    onSubmit: (item) => {
      steEditedItem(item);
    },
  });

  return (
    <>
      <Confirm open={openDialog} setOpen={setOpenDialog} item={editedItem} />
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Address Info</DialogTitle>
          <DialogContent style={{ width: "400px", height: "400px" }}>
            <DialogContentText></DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                autoFocus
                placeholder={product.id}
                name="id"
                margin="dense"
                label="id"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="title"
                margin="dense"
                label="title"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="price"
                margin="dense"
                label=" price"
                type="number"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="description"
                margin="dense"
                label="description"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="rating"
                margin="dense"
                label="rating"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="amount"
                margin="dense"
                label="amount"
                type="text"
                fullWidth
                variant="standard"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              onClick={() => {
                handleClose(), submitForm();
                handleClickOpen();
              }}
            >
              Add
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default EditDialog;
