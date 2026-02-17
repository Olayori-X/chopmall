"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useSignup } from "../hooks/useSignup";
import { useRouter } from "next/navigation";

export const SignupForm = () => {
  const { submit, loading, error } = useSignup();
  const [form, setForm] = useState<any>({});
  const router = useRouter();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await submit(form);

    if (res?.response && res.user_id) {
      router.push(`/verify-otp?user_id=${res.user_id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Full Name" name="fullname" onChange={handleChange} />
      <Input label="Email" name="email" type="email" onChange={handleChange} />
      <Input label="Phone" name="phone" onChange={handleChange} />
      <Input label="Address" name="address" onChange={handleChange} />
      <Input label="Street" name="street" onChange={handleChange} />
      <Input label="City" name="city" onChange={handleChange} />
      <Input label="State" name="state" onChange={handleChange} />
      <Input label="Password" name="password" type="password" onChange={handleChange} />
      <Input
        label="Confirm Password"
        name="password_confirmation"
        type="password"
        onChange={handleChange}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button loading={loading}>Create Account</Button>
    </form>
  );
};
