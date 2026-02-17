"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/api/products";
import { ProductsResponse } from "../types/product.types";

export const useProducts = () => {
  const [data, setData] = useState<ProductsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
