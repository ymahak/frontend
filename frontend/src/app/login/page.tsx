"use client";

import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function LoginPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />
        <Button variant="contained" color="primary">Login</Button>
      </Box>
    </Container>
  );
}
