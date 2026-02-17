"use client";

import { useState } from "react";
import api from "@/lib/axios";

export default function AdminAddProduct() {
  const [form, setForm] = useState({
    slug: "",
    name: "",
    price: "",
    description: "",
    image: null as File | null,
});


  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await api.post("/admin/products", form);
      alert("Product created!");
      console.log(res.data);
    } catch (err: any) {
      alert(err.response?.data?.message || "Error");
    }
  };

  const handleFileChange = (e: any) => {
        setForm({
            ...form,
            image: e.target.files[0],
        });
    };


  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Admin Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="slug"
          placeholder="Business Slug"
          onChange={handleChange}
          className="w-full border p-2"
        />

        <input
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          className="w-full border p-2"
        />

        <input
          name="price"
          placeholder="Price"
          type="number"
          onChange={handleChange}
          className="w-full border p-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full border p-2"
        />

        <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border p-2"
        />

        <button className="bg-black text-white px-4 py-2 w-full">
          Create Product
        </button>
      </form>
    </div>
  );
}
