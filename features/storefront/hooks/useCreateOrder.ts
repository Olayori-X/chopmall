"use client";

import { useState } from "react";
import { createOrder } from "../api/storefront.api";

export const useCreateOrder = (slug: string) => {
  const [loading, setLoading] = useState(false);
  const [successUrl, setSuccessUrl] = useState<string | null>(null);

  const submit = async (payload: any) => {
    try {
      setLoading(true);

      const res = await createOrder(slug, payload);

      if (res.success && res.data?.whatsapp_url) {
        setSuccessUrl(res.data.whatsapp_url);

        // Redirect to WhatsApp
        window.location.href = res.data.whatsapp_url;
      }
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, successUrl };
};
