import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const Header = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
        <Typography sx={{ fontWeight: "400", fontSize: "28px", color: "#000000" }}>
          CORAL
        </Typography>
        <Box>
          <IconButton>
            <PersonOutlineOutlinedIcon />
            <Typography sx={{ fontWeight: "400", fontSize: "18px", color: "#1E2832" }}>
              Account
            </Typography>
          </IconButton> 
          <IconButton>
            <ShoppingCartOutlinedIcon />
            <Typography sx={{ fontWeight: "400", fontSize: "18px", color: "#1E2832" }}>
              Shopping
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
