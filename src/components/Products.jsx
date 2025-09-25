import React, { useState } from "react";

// Dark theme colors
const bgMain = "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900";
const cardBg = "bg-gray-800 border-gray-700";
const textMain = "text-gray-100";
const accent = "text-orange-400";
const btn = "bg-indigo-600 hover:bg-indigo-700";
const modalBg = "bg-gray-900 border border-gray-700";

const demoProducts = [
  {
    id: 1,
    name: "T-shirt",
    price: 499,
    discount: 699,
    img: ["/shirt.jpg", "/shirt.jpg", "/as.jpg"],
    stock: 3,
    desc: "Soft, breathable cotton T-shirt. Perfect for everyday comfort. Join the movement for sustainable fashion!",
    reviews: [
      { user: "Amit", rating: 5, text: "Super comfy and fits perfectly!" },
      { user: "Priya", rating: 4, text: "Nice quality, would buy again." },
    ],
    badges: ["Best Seller", "Eco-Friendly"],
  },
  {
    id: 2,
    name: "Shoes",
    price: 1999,
    discount: 2499,
    img: ["/shose.jpg", "/snaker.jpg", "/as.jpg"],
    stock: 5,
    desc: "Step up your style with these versatile shoes. Designed for all-day comfort and adventure.",
    reviews: [
      { user: "Rahul", rating: 5, text: "Very stylish and durable!" },
    ],
    badges: ["Award Winner"],
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 2999,
    discount: 3999,
    img: ["/Smart Watch.jpg", "/as.jpg"],
    stock: 2,
    desc: "Track your fitness and stay connected. The perfect companion for your active lifestyle.",
    reviews: [
      { user: "Sneha", rating: 4, text: "Great features for the price." },
    ],
    badges: ["Media Mention"],
  },
  {
    id: 5,
    name: "Backpack",
    price: 799,
    discount: 999,
    img: ["/Bagpack.jpg", "/as.jpg"],
    stock: 1,
    desc: "Carry your world in style. Spacious, durable, and water-resistant.",
    reviews: [
      { user: "Vikas", rating: 5, text: "Perfect for college!" },
    ],
    badges: ["Best Seller"],
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 599,
    discount: 899,
    img: ["/Sunglasses.jpg", "/as.jpg"],
    stock: 4,
    desc: "Protect your eyes in style. UV protection and trendy design for every outing.",
    reviews: [
      { user: "Riya", rating: 5, text: "Looks amazing and feels light!" },
    ],
    badges: ["Trending"],
  },
  {
    id: 7,
    name: "Jeans",
    price: 1299,
    discount: 1799,
    img: ["/jeens.jpg", "/as.jpg"],
    stock: 6,
    desc: "Classic fit jeans for all-day comfort. Durable and stylish for any occasion.",
    reviews: [
      { user: "Manish", rating: 4, text: "Good quality and fit." },
    ],
    badges: ["Best Seller"],
  },
  {
    id: 8,
    name: "Jacket",
    price: 2499,
    discount: 2999,
    img: ["/jacket.jpg", "/as.jpg"],
    stock: 2,
    desc: "Stay warm and stylish with this premium jacket. Perfect for winter adventures.",
    reviews: [
      { user: "Sonal", rating: 5, text: "Very warm and fashionable!" },
    ],
    badges: ["Winter Special"],
  },
  {
    id: 9,
    name: "Sneakers",
    price: 1599,
    discount: 2099,
    img: ["/snaker.jpg", "/as.jpg"],
    stock: 3,
    desc: "Run, walk, or play – these sneakers are made for it all. Lightweight and comfortable.",
    reviews: [
      { user: "Deepak", rating: 4, text: "Great for running!" },
    ],
    badges: ["Sport"],
  },
  {
    id: 10,
    name: "Cap",
    price: 299,
    discount: 499,
    img: ["/Cap.jpg", "/as.jpg"],
    stock: 7,
    desc: "Cool and casual cap for sunny days. Adjustable and comfortable.",
    reviews: [
      { user: "Aarav", rating: 5, text: "Nice color and fit!" },
    ],
    badges: ["Summer Pick"],
  },
  {
    id: 11,
    name: "Belt",
    price: 399,
    discount: 599,
    img: ["/Belt.jpg", "/as.jpg"],
    stock: 5,
    desc: "Premium leather belt for a sharp look. Durable and stylish.",
    reviews: [
      { user: "Kabir", rating: 4, text: "Good quality leather." },
    ],
    badges: ["Classic"],
  },
  {
    id: 12,
    name: "Wallet",
    price: 699,
    discount: 899,
    img: ["/wallet.jpg", "/as.jpg"],
    stock: 8,
    desc: "Sleek and compact wallet. Keep your essentials organized in style.",
    reviews: [
      { user: "Neha", rating: 5, text: "Very handy and stylish!" },
    ],
    badges: ["Popular"],
  },
];

const relatedProducts = [
  { id: 6, name: "Sunglasses", img: "/Sunglasses.jpg" },
  { id: 7, name: "Jeans", img: "/jeens.jpg" },
  { id: 10, name: "Cap", img: "/Cap.jpg" },
];

function StarRating({ rating }) {
  return (
    <span className="text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </span>
  );
}


export default function Products({ addToCart }) {
  const [selected, setSelected] = useState(null);
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <div className={`min-h-screen ${bgMain} p-4 md:p-8 ${textMain}`}>
      {/* Promo Banner */}
      <section className="relative bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-600 text-white text-center py-10 px-4 md:px-8 rounded-2xl mb-10 shadow-2xl border-2 border-orange-400 animate-pulse">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight drop-shadow-lg">🔥 Mega Sale! 80% OFF 🔥</h2>
        <p className="text-lg md:text-xl font-semibold">Hurry up! Limited time offer on all products.</p>
      </section>

      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-wide text-orange-400 drop-shadow">Our Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-10">
        {demoProducts.map((p) => (
          <div
            key={p.id}
            className={`${cardBg} rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-700 group`}
            onClick={() => setSelected(p)}
          >
            <div className="h-56 w-full overflow-hidden flex items-center justify-center bg-gray-900 group-hover:bg-gray-800 transition">
              <img
                src={p.img[0]}
                alt={p.name}
                className="w-36 h-36 object-cover rounded-xl group-hover:scale-110 transition duration-300 shadow-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-1 flex items-center gap-2 text-white group-hover:text-orange-400 transition">{p.name}
                {p.badges && p.badges.map((b, i) => (
                  <span key={i} className="ml-1 px-2 py-0.5 bg-green-900 text-green-300 text-xs rounded font-semibold shadow">{b}</span>
                ))}
              </h2>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-bold text-orange-400">₹{p.price}</span>
                <span className="line-through text-gray-400 text-sm">₹{p.discount}</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">{p.stock <= 3 ? `Only ${p.stock} left in stock!` : "In Stock"}</div>
              <button
                className={`mt-2 w-full px-4 py-2 ${btn} text-white rounded-lg font-semibold shadow hover:shadow-lg transition`}
                onClick={e => { e.stopPropagation(); addToCart(p); }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className={`${modalBg} rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative animate-fadeIn`}>
            <button className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-3xl font-bold" onClick={() => setSelected(null)}>&times;</button>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Images */}
              <div className="flex flex-col items-center gap-3 md:w-1/2">
                <div className="relative w-56 h-56 bg-gray-800 flex items-center justify-center rounded-xl cursor-zoom-in border-2 border-gray-700 shadow" onClick={() => setZoomImg(selected.img[0])}>
                  <img src={selected.img[0]} alt={selected.name} className="w-full h-full object-cover rounded-xl" />
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-0.5 rounded">Zoom</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {selected.img.map((img, i) => (
                    <img key={i} src={img} alt="thumb" className="w-12 h-12 object-cover rounded border-2 border-gray-700 cursor-pointer hover:border-orange-400 transition" onClick={() => setZoomImg(img)} />
                  ))}
                </div>
              </div>
              {/* Details */}
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-white">{selected.name}
                  {selected.badges && selected.badges.map((b, i) => (
                    <span key={i} className="ml-1 px-2 py-0.5 bg-green-900 text-green-300 text-xs rounded font-semibold shadow">{b}</span>
                  ))}
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-orange-400">₹{selected.price}</span>
                  <span className="line-through text-gray-400 text-lg">₹{selected.discount}</span>
                </div>
                <div className="text-sm text-gray-400 mb-2">{selected.stock <= 3 ? `Only ${selected.stock} left in stock!` : "In Stock"}</div>
                <p className="mb-4 text-gray-200">{selected.desc}</p>
                <button className={`w-full px-4 py-2 ${btn} text-white rounded-lg font-semibold mb-4 shadow hover:shadow-lg transition`} onClick={() => { addToCart(selected); setSelected(null); }}>Add to Cart</button>
                {/* Trust Badges */}
                <div className="flex gap-2 mb-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="certified" className="w-6 h-6" title="Certified" />
                  <img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="award" className="w-6 h-6" title="Award Winner" />
                  <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="media" className="w-6 h-6" title="Media Mention" />
                </div>
                {/* Reviews */}
                <div className="mt-2">
                  <h4 className="font-semibold mb-1 text-gray-200">Customer Reviews</h4>
                  {selected.reviews && selected.reviews.length > 0 ? (
                    selected.reviews.map((r, i) => (
                      <div key={i} className="mb-1 text-sm text-gray-300">
                        <StarRating rating={r.rating} /> <span className="font-medium">{r.user}</span>: {r.text}
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-xs">No reviews yet.</div>
                  )}
                </div>
              </div>
            </div>
            {/* Related Products */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-gray-200">Related Products</h4>
              <div className="flex gap-4">
                {relatedProducts.map(rp => (
                  <div key={rp.id} className="flex flex-col items-center w-24">
                    <img src={rp.img} alt={rp.name} className="w-16 h-16 object-cover rounded border-2 border-gray-700 mb-1" />
                    <span className="text-xs text-gray-300 text-center">{rp.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Zoom Modal */}
          {zoomImg && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setZoomImg(null)}>
              <img src={zoomImg} alt="zoom" className="max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl border-4 border-white" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
