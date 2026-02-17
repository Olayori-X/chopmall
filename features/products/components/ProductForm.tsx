"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateProduct } from "../hooks/useCreateProduct";

export const ProductForm = () => {
  const router = useRouter();
  const { submit, loading, error } = useCreateProduct();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (file: File | null) => {
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);

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
      {/* Product Name */}
      <div>
        <label className="block text-sm font-medium">
          Product Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mt-1"
          placeholder="e.g. Leather Bag"
        />
        {error?.errors?.name && (
          <p className="text-sm text-red-500 mt-1">
            {error.errors.name[0]}
          </p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium">
          Price
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mt-1"
          placeholder="0.00"
        />
        {error?.errors?.price && (
          <p className="text-sm text-red-500 mt-1">
            {error.errors.price[0]}
          </p>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium">
          Product Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            handleImageChange(e.target.files?.[0] || null)
          }
          className="w-full mt-1"
        />

        {error?.errors?.image && (
          <p className="text-sm text-red-500 mt-1">
            {error.errors.image[0]}
          </p>
        )}

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-3 w-full h-40 object-cover rounded-lg"
          />
        )}
      </div>

      {/* Submit */}
      <button
        disabled={loading}
        className="w-full bg-orange-600 text-white py-2 rounded-lg disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create Product"}
      </button>

      {/* General Error */}
      {error?.message && !error.errors && (
        <p className="text-center text-red-500 text-sm">
          {error.message}
        </p>
      )}
    </form>
  );
};
