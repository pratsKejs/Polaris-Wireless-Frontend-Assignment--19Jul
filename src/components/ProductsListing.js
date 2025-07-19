import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Typography, Box, Tabs, Tab, Grid } from "@mui/material";
import FilterListAltIcon from "@mui/icons-material/FilterListAlt";

const ProductsListing = () => {
  const newsLetterProducts = useSelector((state) => state.newsLetterProducts);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 } }}>
      <Typography
        align="center"
        sx={{ fontWeight: 500, fontSize: "50px", mb: 4 }}
      >
        Or Subscribe To The Newsletter
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: "#000000" } }}
        >
          <Tab
            label="All Products"
            sx={{ color: value === 0 ? "#000000" : "gray" }}
          />
          <Tab
            label="T-Shirts"
            sx={{ color: value === 0 ? "#000000" : "gray" }}
          />
          <Tab
            label="Hoodies"
            sx={{ color: value === 0 ? "#000000" : "gray" }}
          />
          <Tab
            label="Jacket"
            sx={{ color: value === 0 ? "#000000" : "gray" }}
          />
        </Tabs>
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
            marginRight: "20px",
          }}
          startIcon={<FilterListAltIcon />}
        >
          Filter
        </Button>
      </Box>

      {/* Products Grid  */}
      <Grid container spacing={2}>
        {newsLetterProducts.map((product) => (
          <Grid item xs={6} md={3} key={product.id}>
            <Box
              component="img"
              src={product.imageURL}
              alt={product.name}
              sx={{ width: "100%", hright: "auto", objectFit: "cover" }}
              loading="lazy"
            />
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {product.name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {product.category}
              </Typography>
              <Box>
                {product.oldPrice && (
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: "line-through",
                      color: "gray",
                      mr: 1,
                      fontWeight: 600,
                    }}
                    component="span"
                  >
                    {product.oldPrice}
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: product.oldPrice ? "#FF6F61" : "#000000",
                  }}
                  component="span"
                >
                  {product.price}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsListing;
