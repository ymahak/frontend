"use client";

import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed", // sticks to bottom
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "#000", // black background
        color: "#fff", // white text
        textAlign: "center",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.4)", // subtle shadow on top
        fontSize: "0.9rem",
      }}
    >
      <Typography variant="body2" sx={{ mb: 0.5 }}>
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </Typography>
    </Box>
  );
}
