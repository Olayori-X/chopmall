"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";

interface Props {
  slug: string;
}

export const QuickActions = ({ slug }: Props) => {
  const storeUrl = `${process.env.NEXT_PUBLIC_URL}/shop/${slug}`;
  const router = useRouter();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(storeUrl);
      alert("Store link copied!");
    } catch (err) {
      alert("Failed to copy link");
    }
  };

  const handleLogout = async () => {
    try {
      await api.post("/logout");

      // remove token
      localStorage.removeItem("token");

      // redirect to login
      router.push("/login");
    } catch (err) {
      alert("Logout failed");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Link href="/products" className="btn-primary w-full">
        Products
      </Link>

      <Link href="/orders" className="btn-secondary w-full">
        Orders
      </Link>

      <Link href="/business/create" className="btn-outline w-full">
        Business
      </Link>

      <button
        onClick={handleCopy}
        className="btn-primary w-full text-left block"
      >
        Copy Store Link
      </button>

      <a
        href={storeUrl}
        target="_blank"
        className="btn-outline w-full"
      >
        View Store
      </a>

      <button
        onClick={handleLogout}
        className="w-full bg-red-600 text-white py-2 rounded-lg text-left px-3"
      >
        Logout
      </button>
    </div>
  );
};
