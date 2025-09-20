import React from "react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">ShopEase</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border px-3 py-1 rounded-lg focus:outline-none"
          />
          <FaSearch className="text-gray-500 cursor-pointer" />
          <FaShoppingCart className="text-gray-700 text-xl cursor-pointer" />
          <FaUser className="text-gray-700 text-xl cursor-pointer" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to ShopEase</h2>
        <p className="text-lg mb-6">Find the best deals on all your favorite products</p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200">
          Shop Now
        </button>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-8">
        <h3 className="text-2xl font-bold mb-6">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Men", "Women", "Electronics", "Home"].map((cat) => (
            <div
              key={cat}
              className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg cursor-pointer"
            >
              <h4 className="text-lg font-semibold">{cat}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-8 bg-gray-100">
        <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-white shadow rounded-lg p-4 hover:shadow-lg"
            >
              <img
                src={`https://via.placeholder.com/200x150?text=Product+${id}`}
                alt={`Product ${id}`}
                className="rounded mb-3"
              />
              <h4 className="font-semibold">Product {id}</h4>
              <p className="text-gray-500">$ {(id * 20).toFixed(2)}</p>
              <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default HomePage;