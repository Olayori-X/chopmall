"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useLogin } from "../hooks/useLogin";

export const LoginForm = () => {
  const { submit, loading, error } = useLogin();
  const [form, setForm] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(form as { email: string; password: string });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        name="email"
        type="email"
        onChange={handleChange}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button loading={loading}>Login</Button>
    </form>
  );
};
