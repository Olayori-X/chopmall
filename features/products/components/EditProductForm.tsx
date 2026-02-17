"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUpdateProduct } from "../hooks/useUpdateProduct";

type Props = {
  product: {
    id: number;
    name: string;
    price: number;
    is_available: boolean;
  };
};

export const EditProductForm = ({ product }: Props) => {
  const router = useRouter();
  const { submit, loading, error } = useUpdateProduct(product.id);

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(String(product.price));
  const [isAvailable, setIsAvailable] = useState(product.is_available);
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("is_available", String(isAvailable));

    if (image) {
      formData.append("image", image);
    }

    await submit(formData);

    router.push("/products");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-sm space-y-4 max-w-md"
    >
      <div>
        <label className="block text-sm font-medium">Product Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mt-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
        />
        <label className="text-sm">Available for sale</label>
      </div>

      {/* ✅ NEW IMAGE INPUT */}
      <div>
        <label className="block text-sm font-medium">Update Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full"
        />
      </div>

      <button
        disabled={loading}
        className="w-full bg-orange-600 text-white py-2 rounded-lg disabled:opacity-50"
      >
        {loading ? "Updating..." : "Update Product"}
      </button>

      {error?.message && (
        <p className="text-center text-red-500 text-sm">
          {error.message}
        </p>
      )}
    </form>
  );
};
