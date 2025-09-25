import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
    } else {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white p-6 rounded-lg shadow max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        {status && <p className="mb-4 text-indigo-600">{status}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full border rounded px-3 py-2"
              rows="5"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
