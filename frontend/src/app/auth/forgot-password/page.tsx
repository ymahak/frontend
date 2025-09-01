"use client";

import { useState } from "react";
import { Container, Typography, TextField, Button, Box, Link } from "@mui/material";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    // Call your forgot-password API here
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
        Forgot Password
      </Typography>

      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 3 }}>
        Enter your email to reset your password
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 1 }}>
          Reset Password
        </Button>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        Remember your password? <Link href="/login">Login</Link>
      </Typography>
    </Container>
  );
}
