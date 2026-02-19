import { useState } from "react";
import { signup } from "../services/auth.service";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (formData: any) => {
    try {
      setLoading(true);
      setError(null);
      return await signup(formData);
    } catch (err: any) {
      console.log("Signup error:", err);
      setError(err?.response?.data?.message || "Signup failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
};
