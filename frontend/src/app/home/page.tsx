"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";

export default function SportsHomePage() {
  return (
    <>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505843770571-2a9b6e04a9d4?auto=format&fit=crop&w=1650&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box sx={{ bgcolor: "rgba(0,0,0,0.5)", p: 4, borderRadius: 2 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Welcome to SportsHub
          </Typography>
          <Typography variant="h6" gutterBottom>
            Your ultimate destination for live scores, match updates, and sports news
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3 }}
          >
            Explore Now
          </Button>
        </Box>
      </Box>

      {/* Sports Categories */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Popular Sports
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          <Grid size={{xs:12, sm: 4}}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <SportsSoccerIcon sx={{ fontSize: 60, color: "primary.main" }} />
              <Typography variant="h6" mt={2}>
                Football
              </Typography>
            </Card>
          </Grid>
          <Grid size={{xs:12, sm: 4}}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <SportsBasketballIcon sx={{ fontSize: 60, color: "secondary.main" }} />
              <Typography variant="h6" mt={2}>
                Basketball
              </Typography>
            </Card>
          </Grid>
          <Grid size={{xs:12, sm: 4}}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <SportsCricketIcon sx={{ fontSize: 60, color: "success.main" }} />
              <Typography variant="h6" mt={2}>
                Cricket
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Matches */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Featured Matches
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid size={{xs:12, sm: 4}}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80"
                alt="Football Match"
              />
              <CardContent>
                <Typography variant="h6">Champions League Final</Typography>
                <Typography variant="body2" color="text.secondary">
                  Real Madrid vs Liverpool – 10 PM
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{xs:12, sm: 4}}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80"
                alt="Basketball Match"
              />
              <CardContent>
                <Typography variant="h6">NBA Finals</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lakers vs Warriors – 8 PM
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{xs:12, sm: 4}}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80"
                alt="Cricket Match"
              />
              <CardContent>
                <Typography variant="h6">T20 World Cup</Typography>
                <Typography variant="body2" color="text.secondary">
                  India vs Australia – 6 PM
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "grey.900", color: "white", textAlign: "center", py: 3 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} SportsHub. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
