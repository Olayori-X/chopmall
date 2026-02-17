"use client";

import { useState } from "react";
import { createProduct } from "@/lib/api/products";

export const useCreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const submit = async (formData: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await createProduct(formData);
      return res;
    } catch (err: any) {
      setError(err.response?.data || { message: "Something went wrong" });
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
};
