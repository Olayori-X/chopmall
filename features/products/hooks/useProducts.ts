"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchProducts } from "@/lib/api/products";
import { ProductsResponse } from "../types/product.types";

export const useProducts = () => {
  const router = useRouter();
  const [data, setData] = useState<ProductsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    let retries = 0;

    const attempt = async () => {
      try {
        const res = await fetchProducts();
        if (!mounted) return;
        setData(res);
      } catch (err: any) {
        if (!mounted) return;
        const status = err?.response?.status;
        if (status === 401) {
          router.push("/login");
          setData({ success: false, message: "Unauthorized" });
          return;
        }

        // If server indicates no business yet, allow a few retries (backend may need a moment)
        const message = err?.response?.data?.message || "";
        const noBusiness = /business/i.test(message) || message.toLowerCase().includes("you don\'t have a business");

        if (noBusiness && retries < 3) {
          retries += 1;
          // wait a bit then retry
          await new Promise((r) => setTimeout(r, 700 * retries));
          if (mounted) await attempt();
          return;
        }

        setData({ success: false, message: message || "Error fetching products" });
      } finally {
        if (mounted) setLoading(false);
      }
    };

    attempt();

    return () => {
      mounted = false;
    };
  }, [router]);

  return { data, loading };
};
