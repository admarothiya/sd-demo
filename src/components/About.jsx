import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-12 text-gray-100">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
            alt="About ShopEase"
            className="rounded-3xl shadow-2xl transform transition hover:scale-105 hover:rotate-1"
          />
        </div>

        {/* Right Side - Card */}
        <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-700 hover:shadow-3xl transform transition hover:-translate-y-2 hover:scale-105">
          <h1 className="text-4xl font-bold text-indigo-400 mb-4">About Us</h1>
          <p className="text-gray-300 leading-relaxed mb-4 text-lg">
            Welcome to <span className="font-semibold text-indigo-400">ShopEase</span>, 
            your one-stop destination for quality products at the best prices. 
            Our mission is to make online shopping simple, fast, and enjoyable 
            for everyone.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6 text-md">
            This website is built as a demo e-commerce project using{" "}
            <span className="font-medium text-indigo-300">React, React Router, and TailwindCSS</span>.  
            You can explore products, read more about us, and connect with us 
            from the contact page.
          </p>

          {/* Features List */}
          <ul className="mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <span className="bg-indigo-600 p-1 rounded-full">✔</span>
              <span>High Quality Products</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-indigo-600 p-1 rounded-full">✔</span>
              <span>Fast & Secure Shopping</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-indigo-600 p-1 rounded-full">✔</span>
              <span>24/7 Customer Support</span>
            </li>
          </ul>

          <div className="mt-4">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
