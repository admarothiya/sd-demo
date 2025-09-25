import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import CartPage from "./components/CartPage";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      {/* Pass cartItems to Navbar for the cart icon */}
      <Navbar cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
