import React from "react";
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

export default function Signin() {
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
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter your email address"
            name="email"
            autoComplete="email"
            autoFocus
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
