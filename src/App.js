import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import BrandLogoSection from "./components/BrandLogoSection";
import PopularStylesAd from './components/PopularStylesAd';
import ProductsListing from './components/ProductsListing';

// lazy loading at the end

const App = () => {
  return (
    <div>
      <Header />
      <hr style={{color: "#E3E3E3"}}/>
      {/* <div> Hello </div> */}
      <Navbar />
      <Hero />
      <BrandLogoSection />
      <PopularStylesAd />
      <ProductsListing />
    </div>
  )
}

export default App;
