import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// Hero section is the product collections part
const Hero = () => {
  const hero = useSelector((state) => state.hero);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 5 },
        bgColor: "#f2f2f2",
        marginLeft: "100px"
      }}
    >
      <Box sx={{ maxWidth: 500}}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "300", fontSize: "74px", color: "#000000", mb: 4 }}
        >
          {hero.title}
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "30px",
            colro: "#000000",
            mb: 6,
            textTransform: "capitalize",
          }}
        >
          {hero.subtitle}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 0,
            "&: hover": {
              bgColor: "#333",
            },
            textTransform: "capitalize",
          }}
          size="large"
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          {hero.buttonText}
        </Button>
      </Box>
      <Box
        component="img"
        src={hero.imageURL}
        alt={hero.imageName}
        sx={{
          maxWidth: "500",
          height: "auto",
          mt: { xs: 4, md: 0 },
        }}
        loading="lazy"
      />
    </Box>
  );
};

export default Hero;
