import React from "react";
import { Container, Paper, Typography, Button } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Product from "../components/Product";

function Shop() {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Hero Section */}
      <Paper
        sx={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url('https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=400')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" component="h1">
          Welcome to Our Shop
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Discover the best deals and latest trends
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
        >
          Shop Now
        </Button>
      </Paper>

      {/* Featured Products Section */}
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <Product />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Product />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Product />
        </Grid>
      </Grid>

      {/* Categories Section */}
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Shop by Categories
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <Paper
            sx={{
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography variant="h6">Electronics</Typography>
          </Paper>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Paper
            sx={{
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography variant="h6">Fashion</Typography>
          </Paper>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Paper
            sx={{
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography variant="h6">Home & Living</Typography>
          </Paper>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Paper
            sx={{
              height: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Typography variant="h6">Beauty</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Testimonials or Promo Section */}
      <Paper
        sx={{
          mt: 4,
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Why Shop With Us?
        </Typography>
        <Typography variant="body1">
          We provide the best quality products at the most affordable prices.
          Shop with confidence and enjoy exceptional customer service.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Shop;
