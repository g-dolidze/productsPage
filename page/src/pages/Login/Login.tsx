import { useEffect, useState } from "react";
import { Avatar, Snackbar } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { Link, json, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { userLogin } from "../../Helpers/user/User";

interface LoginFormData {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (user: LoginFormData) => {
      const loginrRequest = async () => {
        const { data } = await userLogin(user);
        localStorage.setItem("token", data.AccessToken);
        localStorage.setItem("user", JSON.stringify(data.User));
        if (data) navigate("/");
      };
      loginrRequest();
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651&width=1024)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[800],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t("global.Sing in")}{" "}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              name="email"
              fullWidth
              id="email"
              label={t("global.email")}
              value={values.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ my: 2 }}
            />
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t("global.Remember me")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {t("global.Sign in")}
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2">
                  {" "}
                  {t("global.Forgot password?")}
                </Typography>
              </Grid>

              <Grid item>
                <Link to="/registration">
                  {t("global.Don't have an account?")}
                  {t("global.Sign up")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setIsSnackbarOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {t("global.Incorrect Credentials")}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Login;
