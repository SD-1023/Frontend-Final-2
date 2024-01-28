import {
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import useApi from "../../hooks/useApi";
import { Link, useNavigate } from "react-router-dom";
import {  signUpSchema } from "./Validation";

export default function SignUpPage() {
  // http://161.156.81.77:4000/users
  // http://161.156.81.77:4000/users/signin
  const { post, data } = useApi();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      let body = {username:values.firstName + values.lastName,email:values.email ,password:values.password}
      post(`/users/signup`,body);

    },
  });
  useEffect(()=>{
   if(data?.newUser?.id){
     navigate('/signin');
   }
  
  },[data])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="my-8 flex flex-col text-center">
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate onSubmit={formik.handleSubmit} className="w-full mt-3">
          <Grid container spacing={2} className="mb-4">
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && formik.errors.firstName}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && formik.errors.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={formik.touched.email && (formik.errors.email )}
                helperText={formik.touched.email && (formik.errors.email)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
          <Grid container justify="flex-end" className="my-4">
            <Grid item>
              <Link to={"/signin"} >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
