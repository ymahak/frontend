"use client";

import { useState } from "react";
import { Container, Typography, TextField, Button, Box, Link } from "@mui/material";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { identifier, password });
    // Call your login API here
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
        Login
      </Typography>

      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 3 }}>
        Use your username or email to login
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Username or Email"
          type="text"
          fullWidth
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Forgot Password Link */}
        <Box sx={{ textAlign: "right" }}>
          <Link href="/forgot-password" underline="hover" sx={{ fontSize: "0.875rem" }}>
            Forgot Password?
          </Link>
        </Box>

        <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 1 }}>
          Login
        </Button>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        Don't have an account? <Link href="/auth/signup">Sign up</Link>
      </Typography>
    </Container>
  );
}
