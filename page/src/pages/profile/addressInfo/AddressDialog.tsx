import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { Typography } from "@mui/material";

interface AddressInfo {
  city: string;
  street: string;
  zip_code: string;
  address: string;
}
const initialValues = {};

export default function AddressDialog() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user") as string);

  const handleClickOpen = () => {
    setOpen(true);
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
    onSubmit: (userAddress) => {
      if ("addressInfo" in userData) {
        const newAddress = JSON.stringify({
          ...userData,
          addressInfo: userAddress,
        });
        localStorage.setItem("user", newAddress);
        console.log(newAddress);
      } else {
        const userFullInfo = JSON.stringify({
          ...userData,
          addressInfo: userAddress,
        });
        localStorage.setItem("user", userFullInfo);
        console.log(userFullInfo);
      }
    },
  });

  if ("addressInfo" in userData) {
    return (
      <>
        <div>
          <Typography variant="h6">
            City : {userData.addressInfo.city}
          </Typography>
          <Typography variant="h6">
            Street : {userData.addressInfo.street}
          </Typography>
          <Typography variant="h6">
            Zip_code : {userData.addressInfo.zip_code}
          </Typography>
          <Typography variant="h6">
            Address : {userData.addressInfo.address}
          </Typography>
          <Button onClick={handleClickOpen}>Edit your address</Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Address Info</DialogTitle>
            <DialogContent style={{ width: "400px", height: "400px" }}>
              <DialogContentText></DialogContentText>
              <form onSubmit={handleSubmit}>
                <TextField
                  onChange={handleChange}
                  autoFocus
                  name="city"
                  margin="dense"
                  label="city"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  onChange={handleChange}
                  autoFocus
                  name="street"
                  margin="dense"
                  label="street"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  onChange={handleChange}
                  autoFocus
                  name="zip_code"
                  margin="dense"
                  label="zip_code"
                  type="number"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  onChange={handleChange}
                  autoFocus
                  name="Address"
                  margin="dense"
                  label=" Address"
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
                  handleClose(), submitForm(), navigate("/profile/?editing");
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
  } else {
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          add address info
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Address Info</DialogTitle>
          <DialogContent style={{ width: "400px", height: "400px" }}>
            <DialogContentText></DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                autoFocus
                name="city"
                margin="dense"
                label="city"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="street"
                margin="dense"
                label="street"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="zip_code"
                margin="dense"
                label="zip_code"
                type="number"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="Address"
                margin="dense"
                label=" Address"
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
                handleClose(), submitForm(), navigate("/profile/?editing");
              }}
            >
              Add
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
