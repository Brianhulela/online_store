import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material"; // Box component for easy styling

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign="center">
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Welcome to the Future of Web Design
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            fontWeight: 500,
            marginBottom: "30px",
          }}
        >
          This is the place where creativity knows no bounds. The future of web
          design isn't just about creating beautiful websites; it's about
          crafting experiences that captivate users and elevate brands. In this
          digital age, design is a powerful tool that shapes how people interact
          with technology, businesses, and each other.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            fontWeight: 400,
            lineHeight: "1.6",
            maxWidth: "800px", // Optional: limit text width for readability
            margin: "0 auto",
          }}
        >
          We believe that design is not just about aesthetics; it's about
          solving problems in a visually engaging way. Our team is dedicated to
          bringing your vision to life by blending creativity, technology, and
          innovation. Whether you're looking to design your brand's first
          website or overhaul your online presence, we are here to help you
          every step of the way. So, join us in this exciting journey as we
          redefine what it means to design for the web.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
