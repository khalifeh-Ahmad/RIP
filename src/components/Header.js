// Enhanced version of Header.js
import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = styled(AppBar)`
  background-color: #333333 !important;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

const NavLogo = styled.img`
  height: 40px;
  margin-right: 20px;
`;

const Header = () => {
  const navItems = ["Home", "Plan a Service", "Dashboard", "Memorials"];

  return (
    <Navbar position="sticky">
      <Toolbar>
        <NavLogo src="/path/to/logo.png" alt="Logo" />
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#FFD700" }}>
          Funeral Services
        </Typography>
        {navItems.map((item, index) => (
          <Button key={index} sx={{ color: "#FFD700", textTransform: "none" }}>
            {item}
          </Button>
        ))}
      </Toolbar>
    </Navbar>
  );
};

export default Header;
