"use client";

import { useState } from "react";
import { Product } from "../types/storefront.types";
import { useCreateOrder } from "../hooks/useCreateOrder";

interface Props {
  product: Product;
  slug: string;
}

export const ProductCard = ({ product, slug }: Props) => {
  const { submit, loading } = useCreateOrder(slug);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleOrder = () => {
    submit({
      customer_name: customerName,
      customer_phone: customerPhone,
      items: [
        {
          name: product.name,
          price: product.price,
          qty: 1,
        },
      ],
    });
  };
  console.log("ProductCard props:", product);

  return (
    <div className="border p-4 rounded space-y-3">
      {product.image && (
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${product.image}`}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
      )}
      <h2 className="font-semibold">{product.name}</h2>
      <p>₦{product.price}</p>

      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Order on WhatsApp
        </button>
      ) : (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Your Phone"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <button
            onClick={handleOrder}
            disabled={loading}
            className="bg-green-600 text-white px-3 py-1 rounded w-full"
          >
            {loading ? "Processing..." : "Confirm Order"}
          </button>
        </div>
      )}
    </div>
  );
};
