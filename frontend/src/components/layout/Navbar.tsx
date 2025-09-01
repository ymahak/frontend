"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed" // <-- sticks to top
        sx={{
          backgroundColor: "#000", // black color
          boxShadow: "0 2px 8px rgba(0,0,0,0.5)", // refined shadow
        }}
      >
        <Toolbar>

          {/* Logo / Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, fontWeight: 600, ml: 4 }}
          >
            FeSpo
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              position: "relative",
              borderRadius: 2,
              backgroundColor: "rgba(255,255,255,0.1)",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
              ml: { xs: 1, sm: 3 },
              width: { xs: "100%", sm: "auto" },
              flexGrow: { xs: 1, sm: 0 },
              maxWidth: 300,
            }}
          >
            <Box
              sx={{
                p: "0 12px",
                height: "100%",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                pointerEvents: "none",
              }}
            >
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                color: "inherit",
                pl: 4,
                width: "100%",
              }}
            />
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, mr: 2 }}>
            <Button color="inherit" href="auth/login" variant="text" size="small">
              Login
            </Button>
          </Box>

          {/* Notifications + Profile */}
        </Toolbar>
      </AppBar>

      {/* Spacer so content doesn't hide behind fixed navbar */}
      <Toolbar />
    </Box>
  );
}
