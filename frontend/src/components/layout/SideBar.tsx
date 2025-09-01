"use client";

import { useState } from "react";
import {
    Drawer,
    IconButton,
    Divider,
    Box,
    Button,
} from "@mui/material";
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Settings as SettingsIcon,
    Info as InfoIcon,
} from "@mui/icons-material";
import router from "next/router";
import Link from "next/link";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: "flex" }}>
            {/* Toggle button */}
            <IconButton
                onClick={toggleDrawer}
                sx={{
                    position: "fixed",
                    top: 12,
                    left: 16,
                    zIndex: 1300,
                    bgcolor: "black",
                    color: "white",
                    "&:hover": { bgcolor: "grey.800" },
                }}
            >
                <MenuIcon />
            </IconButton>

            {/* Sidebar Drawer */}
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: open ? 200 : 60, // collapsed vs expanded
                        transition: "width 0.3s",
                        overflowX: "hidden",
                        bgcolor: "black",
                        color: "white",
                        top: "64px", // height of your navbar
                        height: "calc(100% - 64px)",
                    },
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
                    <Button
                        component={Link}
                        href='/'
                        startIcon={<HomeIcon />}
                        sx={{
                            justifyContent: open ? "flex-start" : "center",
                            color: "white",
                            width: "100%",
                            mb: 1,
                            px: open ? 2 : 0,
                            textTransform: "none",
                        }}
                    >
                        {open && "Home"}
                    </Button>

                    <Button
                        onClick={() => router.push("/settings")}
                        startIcon={<SettingsIcon />}
                        sx={{
                            justifyContent: open ? "flex-start" : "center",
                            color: "white",
                            width: "100%",
                            mb: 1,
                            px: open ? 2 : 0,
                            textTransform: "none",
                        }}
                    >
                        {open && "Settings"}
                    </Button>

                    <Button
                        onClick={() => router.push("/about")}
                        startIcon={<InfoIcon />}
                        sx={{
                            justifyContent: open ? "flex-start" : "center",
                            color: "white",
                            width: "100%",
                            mb: 1,
                            px: open ? 2 : 0,
                            textTransform: "none",
                        }}
                    >
                        {open && "About"}
                    </Button>
                </Box>

                <Divider sx={{ bgcolor: "grey.700" }} />
            </Drawer>
        </Box>
    );
}
