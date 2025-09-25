
import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const menu = [
  "Home",
  "Slider",
  "Shop",
  "Portfolio",
  "Pages",
  "Blog",
  "Features",
  "Contact",
];

const products = [
  { name: "Bagpack", img: "/Bagpack.jpg" },
  { name: "Belt", img: "/Belt.jpg" },
  { name: "Cap", img: "/Cap.jpg" },
  { name: "Jeans", img: "/jeens.jpg" },
  { name: "Shirt", img: "/shirt.jpg" },
  { name: "Shoes", img: "/shose.jpg" },
  { name: "Smart Watch", img: "/Smart Watch.jpg" },
  { name: "Sunglasses", img: "/Sunglasses.jpg" },
  { name: "Wallet", img: "/wallet.jpg" },
  { name: "Study Table", img: "/studytabble.jpg" },
  { name: "Snaker", img: "/snaker.jpg" },
  { name: "as.jpg", img: "/as.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-3 border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <img src="https://cdn-icons-png.flaticon.com/512/1170/1170627.png" alt="logo" className="w-8 h-8" />
          <span className="text-2xl font-bold text-orange-500">flatastic</span>
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {menu.map((item) => (
            <li key={item} className="hover:text-orange-500 cursor-pointer transition-colors">{item}</li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <FaSearch className="text-gray-500 text-lg cursor-pointer hover:text-orange-500" />
          <FaUser className="text-gray-500 text-lg cursor-pointer hover:text-orange-500" />
          <FaShoppingCart className="text-gray-500 text-lg cursor-pointer hover:text-orange-500" />
          <button className="ml-2 px-3 py-1 bg-orange-500 text-white rounded text-sm font-semibold hover:bg-orange-600 transition">EN</button>
        </div>
      </nav>

      {/* SALE Banner */}
      <section className="relative w-full flex flex-col items-center justify-center py-16 px-4 bg-gray-100 border-b">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 select-none pointer-events-none">
          <span className="text-[8rem] md:text-[12rem] font-extrabold uppercase tracking-tight text-gray-400" style={{ WebkitTextStroke: '2px #222', color: 'transparent', background: 'url(https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80) center/cover', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>SALE</span>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">SALE</h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">UP TO 70% OFF</p>
          <Link to="/products">
            <button className="bg-orange-500 text-white font-bold px-8 py-3 rounded shadow hover:bg-orange-600 transition text-lg">SHOP NOW</button>
          </Link>
        </div>
      </section>

      {/* All Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-gray-800">ALL PRODUCTS</h3>
          <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded">SALE</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white border rounded-lg shadow hover:shadow-lg transition flex flex-col items-center p-4">
              <img src={product.img} alt={product.name} className="w-28 h-28 object-cover rounded mb-3 border" />
              <span className="font-medium text-gray-700 text-center">{product.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
