"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBusiness } from "../api/business.api";

export const useCreateBusiness = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const submit = async (data: {
    name: string;
    whatsapp_number: string;
    logo?: File | null;
  }) => {
    try {
      setLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("whatsapp_number", data.whatsapp_number);

      if (data.logo) {
        formData.append("logo", data.logo);
      }

      const res = await createBusiness(formData);

      if (res.success) {
        router.push("/dashboard");
      }

    } catch (error: any) {
      setError(error?.response?.data?.message || "Failed to create business");
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
};
