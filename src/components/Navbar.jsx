import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({ cartItems }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer">
        <Link to="/">flatastic</Link>
      </h1>
      <div className="flex items-center space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>

        {/* Cart */}
        <div className="relative">
          <Link to="/cart">
            <FaShoppingCart
              className="text-gray-700 text-xl cursor-pointer hover:text-indigo-600 transition-transform transform hover:scale-110"
            />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
