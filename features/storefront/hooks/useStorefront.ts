"use client";

import { useEffect, useState } from "react";
import { fetchStorefront } from "../api/storefront.api";
import { StorefrontResponse } from "../types/storefront.types";

export const useStorefront = (slug: string) => {
  const [data, setData] = useState<StorefrontResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStorefront(slug)
      .then(setData)
      .finally(() => setLoading(false));
  }, [slug]);

  return { data, loading };
};
