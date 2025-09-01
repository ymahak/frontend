"use client";

import { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StarsIcon from "@mui/icons-material/Stars";

export default function HomePage() {
  const featuredEvents = [
    {
      title: "FIFA Women’s World Cup",
      desc: "Witness the world’s best women footballers in action.",
      img: "https://images.unsplash.com/photo-1624395213132-1fba7f35a8b1?auto=format&fit=crop&w=1650&q=80",
    },
    {
      title: "WNBA Finals",
      desc: "Experience the thrill of women’s basketball at its peak.",
      img: "https://images.unsplash.com/photo-1504457046787-70fc6a9b9b39?auto=format&fit=crop&w=1650&q=80",
    },
    {
      title: "Women’s Tennis Open",
      desc: "Top-ranked players competing for glory.",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1650&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);

  // auto-advance every 5s
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % featuredEvents.length),
      5000
    );
    return () => clearInterval(interval);
  }, [featuredEvents.length]);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1650&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box sx={{ bgcolor: "rgba(0,0,0,0.5)", p: 4, borderRadius: 2 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Welcome to WomenSportsHub
          </Typography>
          <Typography variant="h6" gutterBottom>
            Celebrating women in sports – news, games, collectibles & community
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 3 }}
          >
            Join the Community
          </Button>
        </Box>
      </Box>

      {/* Custom Carousel Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Featured Events
        </Typography>
        <Box sx={{ position: "relative", overflow: "hidden", borderRadius: 2, mt: 3 }}>
          {featuredEvents.map((item, i) => (
            <Box
              key={i}
              sx={{
                position: i === current ? "relative" : "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: { xs: 250, md: 400 },
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: i === current ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            >
              <Box
                sx={{
                  bgcolor: "rgba(0,0,0,0.5)",
                  p: 4,
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.desc}</Typography>
              </Box>
            </Box>
          ))}

          {/* Manual navigation dots */}
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 1,
            }}
          >
            {featuredEvents.map((_, i) => (
              <Box
                key={i}
                onClick={() => setCurrent(i)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: i === current ? "white" : "grey.500",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>

      {/* Categories Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Explore
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <ChatIcon sx={{ fontSize: 60, color: "primary.main" }} />
              <Typography variant="h6" mt={2}>
                Chat with Fans
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Join real-time conversations and share your passion for sports.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <SportsEsportsIcon sx={{ fontSize: 60, color: "secondary.main" }} />
              <Typography variant="h6" mt={2}>
                Fun Games
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Play trivia, fantasy leagues, and interactive sports games.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <StarsIcon sx={{ fontSize: 60, color: "success.main" }} />
              <Typography variant="h6" mt={2}>
                Collectibles
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                Own digital collectibles and celebrate your favorite athletes.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
