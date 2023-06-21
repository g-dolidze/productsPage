import React from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
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
  Address: string;
}
const initialValues = {};

export default function AddressDialog(address: boolean) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user") as string);

  const handleClickOpen = () => {
    setOpen(true);
    address = true;
  };

  const handleClose = () => {
    setOpen(false);
    address = false;
  };
  const { t } = useTranslation();

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
      }
    },
  });

  if ("addressInfo" in userData) {
    return (
      <>
        <div>
          <Typography variant="h6">
            {t("global.City")} : {userData.addressInfo.city}
          </Typography>
          <Typography variant="h6">
            {t("global.Street")} : {userData.addressInfo.street}
          </Typography>
          <Typography variant="h6">
            {t("global.Zip_code")} : {userData.addressInfo.zip_code}
          </Typography>
          <Typography variant="h6">
            {t("global.Address")} : {userData.addressInfo.address}
          </Typography>
          <Button onClick={handleClickOpen}>Edit your address</Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle> {t("global.Address Info")} </DialogTitle>
            <DialogContent style={{ width: "400px", height: "400px" }}>
              <DialogContentText></DialogContentText>
              <form onSubmit={handleSubmit}>
                <TextField
                  onChange={handleChange}
                  autoFocus
                  name="city"
                  margin="dense"
                  label={t("global.City")}
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  onChange={handleChange}
                  autoFocus
                  name="street"
                  margin="dense"
                  label={t("global.Street")}
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  onChange={handleChange}
                  autoFocus
                  name="zip_code"
                  margin="dense"
                  label={t("global.Zip_code")}
                  type="number"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  onChange={handleChange}
                  autoFocus
                  name="Address"
                  margin="dense"
                  label={t("global.Address")}
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
                {t("global.Add")}
              </Button>
              <Button onClick={handleClose}>{t("global.Cancel")}</Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          {t("global.Add Address Info")}
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{t("global.Address Info")}</DialogTitle>
          <DialogContent style={{ width: "400px", height: "400px" }}>
            <DialogContentText></DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                autoFocus
                name="city"
                margin="dense"
                label={t("global.City")}
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="street"
                margin="dense"
                label={t("global.Street")}
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="zip_code"
                margin="dense"
                label={t("global.Zip_code")}
                type="number"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                autoFocus
                name="Address"
                margin="dense"
                label={t("global.Address")}
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
              {t("global.Add")}
            </Button>
            <Button onClick={handleClose}>{t("global.Cancel")}</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
