import {
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";

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
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
          <Grid container justify="flex-end" className="my-4">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
