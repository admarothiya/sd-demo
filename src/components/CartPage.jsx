import React from "react";

export default function CartPage({ cartItems, removeFromCart }) {
  return (
    <div className="min-h-screen p-8 bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-xl rounded-xl p-6 flex flex-col items-center hover:scale-105 transform transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-44 h-44 object-cover mb-4 rounded-lg shadow-md"
              />
              <h2 className="font-semibold text-xl mb-1">{item.name}</h2>
              <p className="text-gray-300 font-medium mb-4">{item.price}</p>

              <div className="flex gap-4 mt-auto w-full justify-center">
                {/* Delete Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-md"
                >
                  Delete
                </button>

                {/* Continue Shopping */}
                <a
                  href="/products"
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md text-center"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
