import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../images/shuttersLogo.png";

const Nav = () => {
  const isActive = (path) => window.location.pathname === path;

  return (
    <AppBar position="static" sx={{ bgcolor: '#33658a', padding: '5px 10px' }}>
      <Toolbar sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        <Box sx={{ display: 'inline-block' }}>
          <img
            src={logo}
            alt="Shutters Logo"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              marginLeft: "10px",
            }}
          />
        </Box>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#E5E5E5', textAlign: 'center', fontSize: 62 }}>
          MARQUEE SHUTTERS AND BLINDS
        </Typography>
        <Box sx={{ display: 'flex' }}>
          {['/', '/about', '/services', '/contact'].map((path) => (
            <Button
              key={path}
              component={NavLink}
              to={path}
              sx={{
                color: isActive(path) ? '#E5E5E5' : 'inherit',
                margin: '0 10px',
                fontSize: '20px',
                textDecoration: 'none',
                ':hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
                padding: '10px 15px',
                borderRight: '3px solid #E5E5E5',
                ':last-of-type': {
                  borderRight: 'none',
                },
              }}
              exact={path === '/'}
            >
              {path.substring(1) || 'Home'}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;