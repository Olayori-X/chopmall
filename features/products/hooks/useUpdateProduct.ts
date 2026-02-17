"use client";

import { useState } from "react";
import { updateProduct } from "@/lib/api/products";

export const useUpdateProduct = (productId: number) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const submit = async (formData: FormData) => {
    setLoading(true);
    setError(null);

    try {
      return await updateProduct(productId, formData);
    } catch (err: any) {
      setError(err.response?.data);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
};
