import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";

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

function AddItemDialog(props) {
  const { open, setOpen } = props;

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
    onSubmit: (userAddress) => {
      console.log(userAddress);
    },
  });

  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Address Info</DialogTitle>
          <DialogContent style={{ width: "400px", height: "400px" }}>
            <DialogContentText></DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                autoFocus
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
}

export default AddItemDialog;
