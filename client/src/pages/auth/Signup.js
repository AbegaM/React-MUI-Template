import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Link,
  Container,
} from "@mui/material";

import api from "../../api";

export default function Signup() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await api.signup(userData);
    if (result.status === 200) {
      alert("User created successfully");
      await new Promise((r) => setTimeout(r, 2000));
      navigate("/signin");
    } else {
      alert(result.data.message);
    }
  };

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
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                If you already have an account, signin here
              </Link>
            </Grid>
          </Grid>

          <Button
            type="button"
            fullWidth
            variant="outlined"
            sx={{ mt: 2, mb: 0.5 }}
          >
            Signup With Github
          </Button>

          <Button
            type="button"
            fullWidth
            variant="outlined"
            sx={{ mt: 0.5, mb: 1 }}
          >
            Signup With Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
