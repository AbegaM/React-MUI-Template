import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  Container,
} from "@mui/material";

import api from "../../api";

export default function Signin() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const clearStateData = () => {
    setUserData({ email: "", password: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await api.signIn(userData);
    if (result.status === 200) {
      const token = result.data.data.token;
      localStorage.setItem("scrumify-token", token);
      navigate("/dashboard");
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
          Signin
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter your email address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Enter your password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Signin
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forget password
              </Link>
            </Grid>

            <Grid item>
              <Link href="#" variant="body2">
                If you don't have an account signup here
              </Link>
            </Grid>
          </Grid>

          <Button
            type="button"
            fullWidth
            variant="outlined"
            sx={{ mt: 2, mb: 0.5 }}
          >
            Signin With Github
          </Button>

          <Button
            type="button"
            fullWidth
            variant="outlined"
            sx={{ mt: 0.5, mb: 1 }}
          >
            Signin With Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
