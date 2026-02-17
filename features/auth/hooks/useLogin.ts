"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api/auth";
import { LoginResponse } from "../types/auth.types";

export const useLogin = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: {
    email: string;
    password: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      const res: LoginResponse = await login(data);

      if (res.response && res.token) {
        // store token (localStorage for now)
        localStorage.setItem("token", res.token);
        router.push("/dashboard");
      }

      return res;
    } catch (err: any) {
      if (!err?.response?.data?.response && err?.response?.data?.user_id) {
        // email not verified → go to OTP page
        router.push(`/verify-otp?user_id=${err?.response?.data?.user_id}`);
      }else{
        setError(err?.response?.data?.message || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
};
