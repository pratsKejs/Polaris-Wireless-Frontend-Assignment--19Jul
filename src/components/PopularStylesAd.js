import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const PopularStylesAd = () => {
const products = useSelector((state) => state.products);

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        ml: { md: 4 },
        mr: { md: -4 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 3fr" },
          gap: 2,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={products[0]?.imageURL}
            alt="Popular Styles Large"
            sx={{ maxWidth: "648px", maxHeight: "648px", objectFit: "cover" }}
            loading="lazy"
          />
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "80%",
              left: 0,
              fontWeight: 400,
              left: 0,
              transform: "translateY(-50%) rotate(-90deg)",
              transformOrigin: "left top",
              letterSpacing: 2,
            }}
          >
            EXPLORE NEW AND POPULAR STYLES
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}
        >
          {products?.slice(1).map((product) => (
            <Box
              key={product.id}
              component="img"
              src={product.imageURL}
              alt="Product images"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PopularStylesAd;
