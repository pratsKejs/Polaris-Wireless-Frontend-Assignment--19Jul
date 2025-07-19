import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const BrandLogoSection = () => {
  const brands = useSelector((state) => state.brands);

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          alignItems: "center",
          gap: 4,
          marginLeft: "80px",
        }}
      >
        {brands.map((brand, index) => (
          <Box
            key={index}
            component="img"
            src={brand.logoURL}
            alt={brand.name}
            loading="lazy"
            sx={{ height: 70, width: "200", objectFit: "contain" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BrandLogoSection;
