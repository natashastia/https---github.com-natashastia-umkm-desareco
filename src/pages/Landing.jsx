import React from "react";
import Hero from "../components/hero.jsx";
import Cards from "../components/cards.jsx";
import Product from "../components/product.jsx";
import Navbar from "../components/navbar.jsx";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Product />
    </div>
  );
}

export default Homepage;
