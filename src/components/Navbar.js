import React from "react";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";

const Navbar = () => {
  const navItems = useSelector((state) => state.navbar);


  return (
    <Box sx={{display: "flex", justifyContent: "center", gap: 2, flexWrap: 'wrap', bgColor: "#f8f8f8", py: 1}}>
      {navItems.map((item, index) => (
        <Button key={index} sx={{color: "#000000", textTransform: "none"}}>
          {item}
        </Button>
      ))}
    </Box>
  );
};
export default Navbar;
