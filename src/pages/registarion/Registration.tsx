import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { registerNewUser } from "../../Helpers/user/User";
interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  // password2: string;
}

const initialValues: RegisterFormData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required("firstName is required"),
  lastName: yup.string().required("lastName is required"),
  phoneNumber: yup.string().required("phoneNumber is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),

  // password2: yup
  //   .string()
  //   .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

const Registration = () => {
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (user: RegisterFormData) => {
      try {
        const { data } = await registerNewUser(user);
      } catch (error) {
        console.log(error);
      }
    },
  });
  const { t } = useTranslation();
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("global.Sign up")}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                fullWidth
                id="firstName"
                label={t("global.firstName")}
                value={values.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                fullWidth
                id="lastName"
                label={t("global.lastName")}
                value={values.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phoneNumber"
                fullWidth
                id="phoneNumber"
                label={t("global.phoneNumber")}
                value={values.phoneNumber}
                onChange={handleChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                fullWidth
                id="email"
                label={t("global.email")}
                value={values.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="password"
                name="password"
                fullWidth
                label={t("global.password")}
                value={values.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
            {/* <Grid item xs={6}>
              <TextField
                type="password"
                name="password2"
                fullWidth
                label="Confirm Password"
                value={values.password2}
                onChange={handleChange}
                error={!!errors.password2}
                helperText={errors.password2}
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <Link to="/login"> {t("global.SIGN UP")}</Link>
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/Login">
                {t("global.Already have an account?")} {t("global.Sign in")}{" "}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Registration;
