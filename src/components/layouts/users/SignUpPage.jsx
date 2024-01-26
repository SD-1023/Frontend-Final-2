import {  Button, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function SignUpPage() {
   const [fNError,setFNError]=useState("");
   const [lNError,setLNError]=useState("");
   const [emailError,setEmailError]=useState("");
   const [passwordError,setPasswordError]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className="my-8 flex flex-col text-center" >
      
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form  noValidate onSubmit={handleSubmit} className="w-full mt-3">
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
              onBlur={(e)=>{console.log(e)}}
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            error
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            />
          </Grid>
       
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end" className="my-4">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
   
  </Container>
    )
}
