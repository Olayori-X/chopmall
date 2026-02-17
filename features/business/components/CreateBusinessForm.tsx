"use client";

import { useState } from "react";
import { useCreateBusiness } from "../hooks/useCreateBusiness";

export const CreateBusinessForm = () => {
  const { submit, loading, error } = useCreateBusiness();

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [logo, setLogo] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit({
      name,
      whatsapp_number: whatsapp,
      logo,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Business Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="text"
        placeholder="WhatsApp Number"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="file"
        onChange={(e) => setLogo(e.target.files?.[0] || null)}
        className="w-full"
      />

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Creating..." : "Create Business"}
      </button>
    </form>
  );
};
