import React from "react";
import { Box, Typography, Link } from "@mui/material";
import instaLogo from "../images/Instagram.png";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#33658a",
        color: "#E5E5E5",
        padding: "1rem",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        maxWidth: "100%",
        margin: "0 auto",
        zIndex: 1000,
      }}
    >
      <Typography variant="body1" sx={{ fontSize: "20px" }}>
        MARQUEE SHUTTERS &copy; {new Date().getFullYear()}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "20px" }}>
        Tel: (647) 834-6275 | Email: marqueeshutters@gmail.com 
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          href="https://www.instagram.com/marqueeshutters/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instaLogo} alt="Instagram" style={{ width: "24px", height: "24px", marginLeft: "8px", cursor: "pointer" }} />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
