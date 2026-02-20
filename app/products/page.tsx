"use client";

import { useProducts } from "@/features/products/hooks/useProducts";
import { ProductTable } from "@/features/products/components/ProductTable";
import { EmptyProducts } from "@/features/products/components/EmptyProducts";
import { NoBusiness } from "@/features/products/components/NoBusiness";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const { data, loading } = useProducts();
  const router = useRouter();
  
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if(storedToken === null) {
      console.log(storedToken);
      router.push("/login");
    }
  }, []);

  if (loading) return <p>Loading products...</p>;
  console.log("Products data:", data);

  if (!data?.success && data?.message) {
    return <NoBusiness />;
  }

  if (data?.success && data.data?.length === 0) {
    return <EmptyProducts />;
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Products</h1>

      <ProductTable products={data?.data!} />

      <Link
        href="/products/create"
        className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-gray-800 transition"
      >
        +
      </Link>
    </div>
  );
}
