import React, { FC } from "react";
import "./profile.scss";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { Button, Paper, TextField } from "@mui/material";
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
};

function UserInfo({ handleChangeState }: PropsUserInfo) {
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
      <h4>{t("global.Edit User info")} </h4>
      <Paper variant="outlined" className="user_form_info">
        <form onSubmit={handleSubmit} className="user_form">
          <TextField
            label={t("global.firstName")}
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            className="TextField"
          />
          <TextField
            label={t("global.lastName")}
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            className="TextField"
          />
          <TextField
            label={t("global.phoneNumber")}
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            className="TextField_phoneNumber"
          />
          <TextField
            label={t("global.email")}
            name="email"
            value={values.email}
            onChange={handleChange}
            className="TextField_email"
          />
          <Button
            type="submit"
            onClick={() => {
              handleChangeState(), submitForm();
            }}
            className="form_btn"
          >
            {t("global.save")}
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default UserInfo;
