import React, { FC } from "react";
import "./profile.scss";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField,
} from "@mui/material";
import { editPersonalInfo } from "../../Helpers/user/User";
import Profile from "./Profile";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const initialValues: PersonalInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};
type PropsUserInfo = {
  handleChangeState: () => void;
  isUserEditing: boolean;
};

function UserInfo({ handleChangeState, isUserEditing }: PropsUserInfo) {
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
    onSubmit: async (values: PersonalInfo) => {
      try {
        const { data } = await editPersonalInfo(values);
        localStorage.setItem("user", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    },
  });
  const { t } = useTranslation();

  return (
    <div className="user_info_page">
      <Dialog open={isUserEditing} onClose={handleChangeState}>
        <DialogTitle>{t("global.Address Info")}</DialogTitle>
        <DialogContent style={{ width: "400px", height: "400px" }}>
          <DialogContentText></DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              label={t("global.firstName")}
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              className="TextField"
              autoFocus
              margin="dense"
              type="text"
              fullWidth
              variant="standard"
              error={touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              label={t("global.lastName")}
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              className="TextField"
              autoFocus
              margin="dense"
              type="text"
              fullWidth
              variant="standard"
              error={touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
            />
            <TextField
              label={t("global.phoneNumber")}
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              className="TextField_phoneNumber"
              autoFocus
              margin="dense"
              type="number"
              fullWidth
              variant="standard"
              error={touched.phoneNumber && !!errors.phoneNumber}
              helperText={touched.phoneNumber && errors.phoneNumber}
            />
            <TextField
              label={t("global.email")}
              name="email"
              value={values.email}
              onChange={handleChange}
              className="TextField_email"
              autoFocus
              margin="dense"
              type="text"
              fullWidth
              variant="standard"
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            onClick={() => {
              handleChangeState(), submitForm();
            }}
          >
            {t("global.save")}
          </Button>
          <Button onClick={handleChangeState}>{t("global.Cancel")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserInfo;
