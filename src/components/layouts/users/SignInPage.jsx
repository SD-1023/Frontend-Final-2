import { Copyright } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useApi from "../../hooks/useApi";
import { Link } from "react-router-dom";
import { signInSchema } from "./Validation";
import { useAuth } from "../../contexts/AuthContext";

export default function SignInPage() {
  const { post, data } = useApi();
  const { signIn } = useAuth(); 

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      let body = { email: values.email, password: values.password };
      post(`/users/signin`, body);
    },
  });
  useEffect(() => {
    console.log("data", data);
    if (data?.message === "success") {
      signIn({ ...data.userdata, sessionId: data.sessionId }, () => {
        navigate("/");
      });
    }
  }, [data, navigate, signIn]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mb: 12,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={"#"} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to={"/signup"}>{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
 
    </Container>
  );
}
